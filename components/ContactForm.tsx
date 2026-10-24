'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type Field = 'name' | 'email' | 'phone' | 'service' | 'message';

export default function ContactForm({ dark = true }: { dark?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<Field, string>>>({});
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const labelColor = dark ? 'rgba(242,237,232,0.75)' : '#6B6460';
  const textColor = dark ? '#F2EDE8' : '#2D2926';
  const borderColor = dark ? 'rgba(242,237,232,0.35)' : 'rgba(45,41,38,0.4)';
  const bgColor = dark ? 'rgba(242,237,232,0.05)' : '#FFFFFF';
  const errorColor = dark ? '#F0A3A3' : '#A63D3D';
  const noteColor = dark ? 'rgba(242,237,232,0.65)' : '#6B6460';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      company: formData.get('company'),
      startedAt: startedAt.current,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data.fields) setFieldErrors(data.fields);
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      window.location.href = '/thank-you';
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  const inputStyle = (field: Field): React.CSSProperties => ({
    width: '100%',
    background: bgColor,
    border: `1px solid ${fieldErrors[field] ? errorColor : borderColor}`,
    borderRadius: '4px',
    padding: '0.875rem 1rem',
    fontSize: '1rem',
    color: textColor,
  });

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.75rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: labelColor,
    marginBottom: '0.5rem',
  };

  const errorProps = (field: Field) =>
    fieldErrors[field]
      ? { 'aria-invalid': true as const, 'aria-describedby': `contact-${field}-error` }
      : {};

  const FieldError = ({ field }: { field: Field }) =>
    fieldErrors[field] ? (
      <p id={`contact-${field}-error`} style={{ color: errorColor, fontSize: '0.8125rem', marginTop: '0.375rem' }}>
        {fieldErrors[field]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} className="contact-form" style={{ maxWidth: '32rem', margin: '0 auto', textAlign: 'left' }}>
      {/* Honeypot — hidden from people, filled in by bots */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="contact-name" style={labelStyle}>Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} style={inputStyle('name')} {...errorProps('name')} />
          <FieldError field="name" />
        </div>
        <div>
          <label htmlFor="contact-email" style={labelStyle}>Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={200} style={inputStyle('email')} {...errorProps('email')} />
          <FieldError field="email" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="contact-phone" style={labelStyle}>Phone</label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" required maxLength={20} style={inputStyle('phone')} {...errorProps('phone')} />
          <FieldError field="phone" />
        </div>
        <div>
          <label htmlFor="contact-service" style={labelStyle}>Service</label>
          <select id="contact-service" name="service" required style={inputStyle('service')} {...errorProps('service')}>
            <option value="Property for Sale">Property for Sale</option>
            <option value="Property Developers">Property Developers</option>
            <option value="HMO">HMO Furniture Package</option>
            <option value="Serviced Accommodation">Serviced Accommodation</option>
            <option value="Not sure">Not sure yet</option>
          </select>
          <FieldError field="service" />
        </div>
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="contact-message" style={labelStyle}>Message</label>
        <textarea id="contact-message" name="message" rows={4} required minLength={10} maxLength={3000} style={{ ...inputStyle('message'), resize: 'vertical' }} {...errorProps('message')} />
        <FieldError field="message" />
      </div>

      <div role="alert" aria-live="assertive">
        {status === 'error' && (
          <p style={{ color: errorColor, fontSize: '0.875rem', marginBottom: '1rem' }}>{errorMessage}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={dark ? 'btn-dark btn-magnetic' : 'btn-primary btn-magnetic'}
        style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem', padding: '1.125rem 3rem', opacity: status === 'submitting' ? 0.7 : 1 }}
      >
        {status === 'submitting' ? 'Sending…' : 'Get My Free Consultation'}
      </button>

      <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: noteColor, marginTop: '1rem', textAlign: 'center' }}>
        We&apos;ll only use your details to reply to your enquiry. See our{' '}
        <Link href="/privacy" className="inline-link" style={{ color: 'inherit', textDecoration: 'underline' }}>
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
