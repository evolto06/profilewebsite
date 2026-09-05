import { FormEvent, useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'opened' | 'blocked'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=eusefkarl@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const draftWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    setStatus(draftWindow ? 'opened' : 'blocked');
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-info">
        <p>Have a project in mind? Send me a message.</p>
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
            <textarea id="message" name="message" rows={6} required />
          </div>
          <button type="submit" className="email-link">
            Open Gmail Draft
          </button>
          {status === 'opened' && <p className="form-note" aria-live="polite">Your Gmail draft is ready to send.</p>}
          {status === 'blocked' && <p className="form-note" aria-live="polite">Your browser blocked the draft window. Allow pop-ups and try again.</p>}
        </form>
        <a href="mailto:eusefkarl@gmail.com" className="direct-email">
          eusefkarl@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;