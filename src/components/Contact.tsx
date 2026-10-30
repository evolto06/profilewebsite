import { FormEvent, useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'opened'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const mailtoUrl = `mailto:eusefkarl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setStatus('opened');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-panel">
        <div className="contact-intro">
          <div>
            <p className="section-kicker">03 — Contact</p>
            <h2>
              Have a project
              <br />
              in mind<span className="accent-text">?</span>
            </h2>
            <p className="contact-lede">
              Internships, collaborations, or just talking shop about compilers and games — my inbox is open.
            </p>
          </div>
          <a href="mailto:eusefkarl@gmail.com" className="direct-email">
            eusefkarl@gmail.com
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required />
          </div>
          <button type="submit" className="btn btn-accent contact-submit">
            Send via email app <span aria-hidden="true">↗</span>
          </button>
          {status === 'opened' && <p className="form-note" aria-live="polite">Your email app should open with the message ready to send.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
