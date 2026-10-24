import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const SERVICES = ['Property for Sale', 'HMO', 'Serviced Accommodation', 'Property Developers', 'Not sure'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[0-9+()\-\s]{7,20}$/;
const MIN_FILL_MS = 3000;

type FieldErrors = Partial<Record<'name' | 'email' | 'phone' | 'service' | 'message', string>>;

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Spam checks first — bots get a fake success and no hints.
  // `company` is a honeypot field hidden from people; `startedAt` is when the form rendered.
  const startedAt = Number(body.startedAt);
  if (str(body.company) || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const service = str(body.service);
  const message = str(body.message);

  const errors: FieldErrors = {};
  if (name.length < 2 || name.length > 100) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = 'Please enter a valid email address.';
  if (!PHONE_RE.test(phone)) errors.phone = 'Please enter a valid phone number.';
  if (!SERVICES.includes(service)) errors.service = 'Please choose a service.';
  if (message.length < 10 || message.length > 3000) errors.message = 'Please tell us a little about your property (10–3000 characters).';
  if ((message.match(/https?:\/\//gi) || []).length > 2) errors.message = 'Please remove the links from your message.';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: 'Please check the highlighted fields.', fields: errors }, { status: 400 });
  }

  // Created per request so a missing key fails this request, not the build.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form email failed: RESEND_API_KEY is not set for this environment');
    return NextResponse.json({ error: 'Failed to send enquiry. Please try again or call us directly.' }, { status: 500 });
  }
  const resend = new Resend(apiKey);

  const toEmail = process.env.CONTACT_TO_EMAIL || 'hello@stagedready.com';
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Staged Ready Website <onboarding@resend.dev>';
  // Strip line breaks so visitor input can't alter email headers.
  const safeName = name.replace(/[\r\n]+/g, ' ');

  try {
    const { error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${safeName}`,
      text: [`Name: ${safeName}`, `Email: ${email}`, `Phone: ${phone}`, `Service: ${service}`, '', message].join('\n'),
    });

    if (sendError) {
      console.error('Contact form email failed:', sendError);
      return NextResponse.json({ error: 'Failed to send enquiry. Please try again or call us directly.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form email failed:', error);
    return NextResponse.json({ error: 'Failed to send enquiry. Please try again or call us directly.' }, { status: 500 });
  }
}
