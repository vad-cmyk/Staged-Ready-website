import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, service, message } = body as {
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
  };

  if (!name || !email || !phone || !service || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || 'hello@stagedready.com';
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Staged Ready Website <onboarding@resend.dev>';

  try {
    const { error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        service ? `Service: ${service}` : null,
        '',
        message || '(no message provided)',
      ]
        .filter(Boolean)
        .join('\n'),
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
