function Contact() {
  return (
    <section className="connect" id="contact">
      <h2>Get In Touch</h2>
      <p>Have a project in mind or want to collaborate? I'd love to hear from you!</p>
      <form className="contact-form">
        <label className="field">
          <span>Name *</span>
          <input type="text" name="name" placeholder="Your full name" required />
        </label>
        <label className="field">
          <span>Email *</span>
          <input type="email" name="email" placeholder="your.email@example.com" required />
        </label>
        <label className="field">
          <span>Message *</span>
          <textarea name="message" placeholder="Tell me about your project, ideas, or just say hello..." rows={5} required />
        </label>
        <button className="contact-button" type="submit">
          Send Message
        </button>
      </form>
      <div className="socials">
        <a className="social-link" href="#" aria-label="Instagram">
          IG
        </a>
        <a className="social-link" href="#" aria-label="X">
          X
        </a>
        <a className="social-link" href="#" aria-label="LinkedIn">
          in
        </a>
      </div>
    </section>
  )
}

export default Contact
