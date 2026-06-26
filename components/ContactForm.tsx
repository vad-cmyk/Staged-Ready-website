'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm({ dark = true }: { dark?: boolean }) {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const labelColor = dark ? 'rgba(242,237,232,0.6)' : '#6B6460';
  const textColor = dark ? '#F2EDE8' : '#2D2926';
  const borderColor = dark ? 'rgba(242,237,232,0.18)' : 'rgba(45,41,38,0.18)';
  const bgColor = dark ? 'rgba(242,237,232,0.05)' : '#FFFFFF';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      router.push('/thank-you');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: bgColor,
    border: `1px solid ${borderColor}`,
    borderRadius: '4px',
    padding: '0.875rem 1rem',
    fontSize: '0.9375rem',
    color: textColor,
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.75rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: labelColor,
    marginBottom: '0.5rem',
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '32rem', margin: '0 auto', textAlign: 'left' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label htmlFor="contact-name" style={labelStyle}>Name</label>
          <input id="contact-name" name="name" type="text" required style={inputStyle} />
        </div>
        <div>
          <label htmlFor="contact-email" style={labelStyle}>Email</label>
          <input id="contact-email" name="email" type="email" required style={inputStyle} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label htmlFor="contact-phone" style={labelStyle}>Phone (optional)</label>
          <input id="contact-phone" name="phone" type="tel" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="contact-service" style={labelStyle}>Service</label>
          <select id="contact-service" name="service" style={inputStyle}>
            <option value="Property for Sale">Property for Sale</option>
            <option value="HMO">HMO Furniture Package</option>
            <option value="Serviced Accommodation">Serviced Accommodation</option>
            <option value="Not sure">Not sure yet</option>
          </select>
        </div>
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="contact-message" style={labelStyle}>Message (optional)</label>
        <textarea id="contact-message" name="message" rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
      </div>

      {status === 'error' && (
        <p style={{ color: '#E08585', fontSize: '0.875rem', marginBottom: '1rem' }}>{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={dark ? 'btn-dark btn-magnetic' : 'btn-primary btn-magnetic'}
        style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem', padding: '1.125rem 3rem', opacity: status === 'submitting' ? 0.7 : 1 }}
      >
        {status === 'submitting' ? 'Sending…' : 'Get My Free Consultation'}
      </button>
    </form>
  );
}
