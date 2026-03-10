import { useState } from "react";
import myProjects from "../data/myProjects";
import type { Project } from "../data/myProjects";
import "../styles/components/Projects.css";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["AI/ML", "Web", "Data"] as const;

  const filteredProjects = selectedCategory
    ? myProjects.filter((p) => {
        if (selectedCategory === "Data") {
          return (
            p.category === "Data Engineering" || p.category === "Data Analysis"
          );
        }
        return p.category === selectedCategory;
      })
    : myProjects;

  const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "projects-difficulty-beginner";
      case "Intermediate":
        return "projects-difficulty-intermediate";
      case "Advanced":
        return "projects-difficulty-advanced";
      default:
        return "projects-difficulty-beginner";
    }
  };

  return (
    <section id="projects" className="py-5 projects-section">
      <div className="container-lg">
        <h2 className="display-5 fw-bold text-center mb-2 projects-title">
          Featured Projects
        </h2>
        <p className="text-center mb-4 projects-subtitle">
          Showcasing my work across different domains
        </p>

        {/* Category Filter */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          <button
            className={`btn btn-sm fw-bold projects-filter-btn ${
              selectedCategory === null ? "projects-filter-btn-active" : ""
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All Projects
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm fw-bold projects-filter-btn ${
                selectedCategory === cat ? "projects-filter-btn-active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project: Project) => (
            <div key={project.id} className="col-md-6 col-lg-6">
              <div className="card h-100 shadow-sm border-0 overflow-hidden project-card projects-card-shell">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <span className="projects-icon">{project.icon || "📌"}</span>
                      <h5 className="card-title fw-bold mb-0 projects-card-title">
                        {project.title}
                      </h5>
                    </div>
                    <span
                      className={`badge fw-bold projects-difficulty-badge ${getDifficultyClass(project.difficulty)}`}
                    >
                      {project.difficulty}
                    </span>
                  </div>

                  <p className="card-text small mb-3 projects-description">
                    {project.description}
                  </p>

                  <p className="projects-meta">
                    <small>
                      📅 {project.year || "2024"} • 📂 {project.category}
                    </small>
                  </p>

                  <div className="mb-3">
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="badge projects-tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex gap-2 mt-3">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm fw-bold flex-grow-1 projects-action-btn projects-action-btn-github"
                      >
                        🔗 GitHub
                      </a>
                    )}
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm fw-bold flex-grow-1 projects-action-btn projects-action-btn-live"
                      >
                        View Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <p className="projects-empty-text">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
