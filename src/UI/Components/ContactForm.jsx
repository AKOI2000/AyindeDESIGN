function ContactForm() {
  return (
    <section className="contact-section" id="contact-section">
      <div className="container-main">
        <div className="grid col-2-by-1">
          <div className="text-box">
            <h2>
              Let’s Create <br />
              something <br /> amazing together
            </h2>
            <p>Open for freelance projects and full-time opportunities</p>

            <div className="contact-info">
              <p>abdtaiwo1606@gmail.com</p>
              <p>+234(70) 64548062</p>
            </div>
          </div>
          <form action="" className="form-box">
            <h3>Get in Touch</h3>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Taiwo Abdullahi"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="abdtaiwo1606@gmail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id=""
                placeholder="Tell me about your project..."
              ></textarea>

              <p>Minimum of 500 characters</p>
            </div>

            <button className="btn btn-secondary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
