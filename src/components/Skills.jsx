import {
  Smartphone,
  Globe,
  Bot,
  SearchCode,
  Monitor,
  Palette,
  Code2,
} from "lucide-react";

const skillCategories = [
  {
    number: "01",
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Building responsive and polished mobile applications with modern React-based technologies.",
    technologies: [
      "React Native",
      "Expo",
      "JavaScript",
      "React",
    ],
  },

  {
    number: "02",
    icon: Globe,
    title: "Web Development",
    description:
      "Creating modern websites and interactive web experiences with clean, responsive interfaces.",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },

  {
    number: "03",
    icon: Bot,
    title: "Python Automation",
    description:
      "Automating repetitive workflows, browser tasks, data collection and complex processes.",
    technologies: [
      "Python",
      "Selenium",
      "Requests",
      "Automation",
    ],
  },

  {
    number: "04",
    icon: SearchCode,
    title: "Web Crawlers",
    description:
      "Building systems that collect, process and organize information from websites.",
    technologies: [
      "Python",
      "Selenium",
      "Web Scraping",
      "APIs",
    ],
  },

  {
    number: "05",
    icon: Monitor,
    title: "Desktop Applications",
    description:
      "Developing desktop software with practical interfaces and custom functionality.",
    technologies: [
      "C++",
      "Qt",
      "Java",
      "Python",
    ],
  },

  {
    number: "06",
    icon: Palette,
    title: "Graphic Design",
    description:
      "Designing visual assets, interfaces and digital graphics with a focus on clean presentation.",
    technologies: [
      "UI Design",
      "Visual Design",
      "Branding",
      "Graphics",
    ],
  },
];

const additionalSkills = [
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "React",
  "React Native",
  "SQL",
  "HTML",
  "CSS",
  "Git",
  "REST APIs",
  "Selenium",
];

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="section-container">

        {/* Heading */}

        <div className="section-heading">

          <span className="section-number">
            02
          </span>

          <div>

            <p className="section-label">
              SKILLS & EXPERTISE
            </p>

            <h2>
              What I
              <span> build.</span>
            </h2>

          </div>

        </div>

        {/* Intro */}

        <div className="skills-intro">

          <p>
            I work across multiple areas of software
            development, from mobile applications and
            websites to automation systems and custom
            desktop software.
          </p>

        </div>

        {/* Skill Cards */}

        <div className="skills-grid">

          {skillCategories.map((skill) => {

            const Icon = skill.icon;

            return (
              <article
                className="skill-card"
                key={skill.title}
              >

                <div className="skill-card-top">

                  <span className="skill-number">
                    {skill.number}
                  </span>

                  <div className="skill-icon">
                    <Icon size={21} />
                  </div>

                </div>

                <h3>
                  {skill.title}
                </h3>

                <p>
                  {skill.description}
                </p>

                <div className="skill-tags">

                  {skill.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </article>
            );

          })}

        </div>

        {/* Technology Stack */}

        <div className="technology-stack">

          <div className="stack-header">

            <div>

              <p className="section-label">
                TECHNOLOGY STACK
              </p>

              <h3>
                Tools I work with
              </h3>

            </div>

            <Code2 size={24} />

          </div>

          <div className="technology-list">

            {additionalSkills.map(
              (skill) => (
                <span key={skill}>
                  {skill}
                </span>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;