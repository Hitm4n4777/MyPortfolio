import { Cog } from "lucide-react";

const highlights = [
  {
    icon: Cog,
    number: "01",
    title: "Full Stack Developer",
    text: "6 years of experience in software development.",
    desc: "From web and mobile applications to automation and desktop software, I build practical solutions across the stack.",
  },
];

function Exp() {
  return (
    <section id="exp" className="exp-section">
      <div className="exp-section-container">
        <div className="section-heading">
          <span className="section-number"> 03 </span>

          <div className="exp-heading-content">
            <p className="section-label"> Experience </p>
            <h2>
              My <span>Experience</span>
            </h2>
          </div>
        </div>

        <div className="exp-content">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article className="exp-card" key={item.number}>
                <div className="exp-card-top">
                  <div className="exp-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <span className="exp-card-index">{item.number}</span>
                </div>

                <div className="exp-card-content">
                  <p className="exp-card-label">Career snapshot</p>
                  <h3>{item.title}</h3>
                  <p className="exp-card-summary">{item.text}</p>
                  <p className="exp-card-description">{item.desc}</p>
                </div>

                <div
                  className="exp-card-years"
                  aria-label="6 years of experience"
                >
                  <strong>6</strong>
                  <span>
                    years
                    <br />
                    experience
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Exp;
