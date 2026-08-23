export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <span className="section-label">
            05 / CONTACT
          </span>

          <h2>
            Let's build something <span>great.</span>
          </h2>

          <p>
            Have a project, idea, or opportunity in mind?
            Let's talk and build something awesome together.
          </p>
        </div>

        <div className="contact-content">

          <a
            href="mailto:hitmn4430@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">
              @
            </div>

            <div className="contact-info">
              <span>Email</span>
              <strong>hitmn4430gmail.com</strong>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              GH
            </div>

            <div className="contact-info">
              <span>GitHub</span>
              <strong>View my repositories</strong>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              IN
            </div>

            {/* <div className="contact-info">
              <span>LinkedIn</span>
              <strong>Let's connect</strong>
            </div> */}

            <span className="contact-arrow">↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}