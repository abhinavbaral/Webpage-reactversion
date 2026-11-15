import React, { useEffect, useState } from 'react';
import { useReveal } from '../../hooks/useReveal.js';
import { getContactDetails, sendEnquiry } from '../../lib/api.js';
import { Arrow } from '../ui/Arrow.jsx';

const EMPTY = { name: '', email: '', budget: '', message: '', honeypot: '' };

export function Contact({ profile }) {
  const ref = useReveal();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [details, setDetails] = useState(null);

  // Contact details load separately so they are not in the page source.
  useEffect(() => {
    let cancelled = false;
    getContactDetails()
      .then((data) => {
        if (!cancelled) setDetails(data);
      })
      .catch(() => {
        /* The form still works without them. */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const update = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  async function handleSubmit() {
    setStatus({ state: 'sending', message: 'Sending…' });
    setErrors({});

    try {
      const result = await sendEnquiry(values);
      setValues(EMPTY);
      setStatus({ state: 'sent', message: result.message });
    } catch (error) {
      if (error.errors) {
        setErrors(error.errors);
        setStatus({ state: 'idle', message: '' });
      } else {
        setStatus({ state: 'failed', message: error.message });
      }
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="shell reveal" ref={ref}>
        <div className="contact__grid">
          <div>
            <p className="eyebrow eyebrow--accent">// Available for work</p>
            <h2 className="contact__head">Contact</h2>

            <p className="contact__detail">
              Email:{' '}
              {details ? (
                <a href={`mailto:${details.email}`}>{details.email}</a>
              ) : (
                'loading…'
              )}
            </p>
            <p className="contact__detail">
              Phone:{' '}
              {details ? (
                <a href={`tel:${details.phone.replace(/\s/g, '')}`}>{details.phone}</a>
              ) : (
                'loading…'
              )}
            </p>
            <p className="contact__detail">
              WhatsApp:{' '}
              {details ? (
                <a
                  href={`https://wa.me/${details.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              ) : (
                'loading…'
              )}
            </p>
            <p className="contact__detail">Based in {profile.location}</p>
          </div>

          {/* No <form> element: submission is handled entirely in JS. */}
          <div>
            <label className="field">
              <span className="field__label">Your name</span>
              <input
                className="field__input"
                type="text"
                value={values.name}
                onChange={update('name')}
                autoComplete="name"
              />
              {errors.name ? <span className="field__error">{errors.name}</span> : null}
            </label>

            <label className="field">
              <span className="field__label">Email</span>
              <input
                className="field__input"
                type="email"
                value={values.email}
                onChange={update('email')}
                autoComplete="email"
              />
              {errors.email ? <span className="field__error">{errors.email}</span> : null}
            </label>

            <label className="field">
              <span className="field__label">Budget (optional)</span>
              <input
                className="field__input"
                type="text"
                value={values.budget}
                onChange={update('budget')}
                placeholder="e.g. NPR 40,000"
              />
            </label>

            <label className="field">
              <span className="field__label">What are you building?</span>
              <textarea
                className="field__textarea"
                value={values.message}
                onChange={update('message')}
              />
              {errors.message ? (
                <span className="field__error">{errors.message}</span>
              ) : null}
            </label>

            {/* Bots fill this. People never see it. */}
            <div className="honeypot" aria-hidden="true">
              <label>
                Leave this empty
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.honeypot}
                  onChange={update('honeypot')}
                />
              </label>
            </div>

            <button
              className="btn btn--fill"
              type="button"
              onClick={handleSubmit}
              disabled={status.state === 'sending'}
            >
              {status.state === 'sending' ? 'Sending…' : 'Send message'} <Arrow />
            </button>

            {status.message ? (
              <p className="form__status" role="status">
                {status.message}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
