import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-header">
          <div>
            <span className="section-label">
              04 / PROJECTS
            </span>

            <h2>
              Things I've <span>built.</span>
            </h2>

            <p>
              A collection of applications, websites,
              automation systems and creative work.
            </p>
          </div>

          <div className="project-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={filter === category ? "active" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-content">

                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <ArrowUpRight size={20} />
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}