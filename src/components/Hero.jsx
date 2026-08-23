import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Terminal,
} from "lucide-react";

function Hero() {

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section id="home" className="hero">

      {/* Background */}

      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* Main Content */}

      <div className="hero-container">

        <div className="hero-content">

          {/* Availability */}

          <div className="availability">

            <span className="availability-dot" />

            Available for projects

          </div>

          {/* Small Heading */}

          <div className="hero-label">

            <Code2 size={15} />

            SOFTWARE DEVELOPER

          </div>

          {/* Main Heading */}

          <h1>

            Hi, I'm

            <span className="hero-name">
              {" "}Haider Ali.
            </span>

            <br />

            I build

            <span className="hero-gradient">
              {" "}digital things.
            </span>

          </h1>

          {/* Description */}

          <p className="hero-description">

            I build mobile applications, web apps,
            automation systems, web crawlers and
            desktop software — turning ideas into
            functional digital products.

          </p>

          {/* Buttons */}

          <div className="hero-buttons">

            <button
              className="button-primary"
              onClick={scrollToProjects}
            >

              View My Work

              <ArrowUpRight size={18} />

            </button>

            <button
              className="button-secondary"
              onClick={scrollToContact}
            >

              Let's Talk

            </button>

          </div>

          {/* Terminal */}

          <div className="hero-terminal">

            <div className="terminal-header">

              <div className="terminal-dots">

                <span />
                <span />
                <span />

              </div>

              <div className="terminal-title">

                <Terminal size={13} />

                haider.js

              </div>

            </div>

            <div className="terminal-body">

              <div>
                <span className="syntax-purple">
                  const
                </span>{" "}

                <span className="syntax-blue">
                  haider
                </span>{" "}

                = {"{"}
              </div>

              <div className="terminal-indent">

                <span className="syntax-white">
                  role
                </span>
                :{" "}

                <span className="syntax-green">
                  "Developer"
                </span>,

              </div>

              <div className="terminal-indent">

                <span className="syntax-white">
                  skills
                </span>
                : [

                <span className="syntax-green">
                  "React"
                </span>
                ,{" "}

                <span className="syntax-green">
                  "Python"
                </span>
                ,{" "}

                <span className="syntax-green">
                  "C++"
                </span>

                ],

              </div>

              <div className="terminal-indent">

                <span className="syntax-white">
                  mindset
                </span>
                :{" "}

                <span className="syntax-green">
                  "Build"
                </span>

              </div>

              <div>
                {"};"}

                <span className="terminal-cursor">
                  ▌
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="hero-scroll">

        <ArrowDown size={15} />

        <span>
          Scroll to explore
        </span>

      </div>

    </section>
  );
}

export default Hero;