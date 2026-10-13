import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/portfolio";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((item) => String(item.id) === projectId);

  const overview = project?.overview || project?.description || "";
  const features = project?.features || [];
  const challenge = project?.challenge || "";

  if (!project) {
    // Missing project state
    return (
      <main className="project-details project-details-not-found">
        <p className="section-label">PROJECT NOT FOUND</p>
        <h1>That project does not exist.</h1>
        <Link className="project-back-link" to="/">
          <ArrowLeft size={16} />
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    // Project details page
    <main className="project-details">
      <div className="project-details-container">
        {/* Back navigation */}
        <Link className="project-back-link" to="/">
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {/* Project title, category, and description */}
        <div className="project-details-header">
          <div>
            <span className="section-label">{project.category}</span>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>

          {/* Project technologies */}
          <div className="project-details-tech">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        {/* Project preview image */}
        <img
          className="project-details-image"
          src={project.image}
          alt={project.title}
        />

        <div className="project-details-body">
          <div className="project-details-panel">
            <h2>Overview</h2>
            <p>{overview}</p>
          </div>

          <div className="project-details-panel">
            <h2>Key features</h2>
            <ul>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-details-panel">
            <h2>Challenge</h2>
            <p>{challenge}</p>
          </div>
        </div>

        {/* Optional live project link */}
        {project.demo && (
          <a
            className="project-details-action"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            View live project
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </main>
  );
}
