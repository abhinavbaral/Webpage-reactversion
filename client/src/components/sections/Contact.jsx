import React, { useEffect, useState } from 'react';
import { useReveal } from '../../hooks/useReveal.js';
import { getContactDetails } from '../../lib/api.js';

export function Contact({ profile }) {
  const ref = useReveal();
  const [details, setDetails] = useState(null);

  // Contact details load separately so they are not in the page source.
  useEffect(() => {
    let cancelled = false;
    getContactDetails()
      .then((data) => {
        if (!cancelled) setDetails(data);
      })
      .catch(() => {
        /* Details simply stay hidden if the server is unreachable. */
      });
    return () => {
      cancelled = true;
    };
  }, []);

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
        </div>
      </div>
    </section>
  );
}
