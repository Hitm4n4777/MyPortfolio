import { Code2, Lightbulb, Rocket, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Builder",
    text: "I enjoy turning ideas into working software.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    text: "I like finding simple solutions to complicated problems.",
  },
  {
    icon: Rocket,
    title: "Always Learning",
    text: "I constantly experiment with new technologies and ideas.",
  },
  {
    icon: Zap,
    title: "Automation Mindset",
    text: "If something can be automated, I'll probably try to automate it.",
  },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        {/* Section heading */}

        <div className="section-heading">
          <span className="section-number">01</span>

          <div>
            <p className="section-label">ABOUT ME</p>

            <h2>
              More than just
              <span> code.</span>
            </h2>
          </div>
        </div>

        {/* Main About Layout */}

        <div className="about-layout">
          {/* Image */}

          <div className="about-image-wrapper">
            <div className="about-image-glow" />

            <div className="about-image-frame">
              <img src="/profile/haider.jpg" alt="Haider Ali" />

              <div className="image-overlay" />

              <div className="image-tag">
                <span />
                Haider Ali
              </div>
            </div>
          </div>

          {/* Content */}

          <div className="about-content">
            <p className="about-intro">
              I'm Haider Ali — A Full Stack developer Who likes to Build
              Software Multiple Across Multiple Fields Of Software..
            </p>

            <p>
              My work ranges from React and React Native applications to
              websites, web apps, Python automation, browser automation, web
              crawlers and desktop applications.
            </p>

            <p>
              I am All about finding Simple Solutions to Complex Problems,
              usinng different technologies and tools to make things work
              better, faster and more efficiently.
            </p>

            <p>
              Whether it's a mobile application, an automated workflow, a
              website or a custom desktop tool, I enjoy taking an idea from
              concept to something that actually works.
            </p>
          </div>
        </div>

        {/* Highlights */}

        <div className="about-highlights">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article className="highlight-card" key={item.title}>
                <div className="highlight-icon">
                  <Icon size={20} />
                </div>

                <div>
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
