import { BookOpen, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Education",
    text: "I have a Strong Eduction in Computer and its Technologies and its related Fields",
    desc: "Intermediate in Computer Science || 2025",
  },

  {
    icon: BookOpen,
    number: "02",
    title: "Courses and Certs",
    text: "I have completed Various Software Development and other Computer Related Courses ",
    desc: "Programming Languages Courses, Web Development Cert. , Mobile App and Desktop App dev courses ",
  },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        {/* section header */}

        <div className="section-heading">
          <span className="section-number">02</span>

          <div>
            <p className="education-label">ACADEMIC BACKGROUND</p>

            <h2>
              My <span> Education</span>
            </h2>
          </div>
        </div>

        {/* Education Cards */}

        <div className="education-grid">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="education-card" key={index}>
                {/* Card Header */}

                <div className="education-card-top">
                  <div className="education-icon">
                    <Icon size={22} />
                  </div>
                  <span className="education-number">{item.number}</span>
                </div>

                {/* Card Contents */}
                <div className="education-card-content">
                  <h3> {item.title} </h3>
                  <p> {item.text} </p>
                  <p> {item.desc} </p>
                </div>

                {/* Bottom Accent */}

                <div className="education-card-accent"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
