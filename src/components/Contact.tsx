import { FormEvent, useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    setSubmitted(true);
    window.location.href = `mailto:eusefkarl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
            Open Email Draft
          </button>
          {submitted && <p className="form-note" aria-live="polite">Your email draft is ready to send.</p>}
        </form>
        <a href="mailto:eusefkarl@gmail.com" className="direct-email">
          eusefkarl@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;