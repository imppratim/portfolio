import { useState } from "react";
import myProjects from "../data/myProjects";
import type { Project } from "../data/myProjects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["AI/ML", "Web", "Backend", "Data"] as const;

  const filteredProjects = selectedCategory
    ? myProjects.filter((p) => p.category === selectedCategory)
    : myProjects;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "#4CAF50";
      case "Intermediate":
        return "#FFC107";
      case "Advanced":
        return "#F44336";
      default:
        return "#00d4ff";
    }
  };

  return (
    <section
      id="projects"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div className="container-lg">
        <h2
          className="display-5 fw-bold text-center mb-2"
          style={{ color: "#0d1b2a" }}
        >
          Featured Projects
        </h2>
        <p className="text-center text-muted mb-4">
          Showcasing my work across different domains
        </p>

        {/* Category Filter */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          <button
            className="btn btn-sm fw-bold"
            onClick={() => setSelectedCategory(null)}
            style={{
              backgroundColor:
                selectedCategory === null ? "#00d4ff" : "#e0e0e0",
              color: selectedCategory === null ? "#0d1b2a" : "#666",
              border: "none",
            }}
          >
            All Projects
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className="btn btn-sm fw-bold"
              onClick={() => setSelectedCategory(cat)}
              style={{
                backgroundColor:
                  selectedCategory === cat ? "#00d4ff" : "#e0e0e0",
                color: selectedCategory === cat ? "#0d1b2a" : "#666",
                border: "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project: Project) => (
            <div key={project.id} className="col-md-6 col-lg-6">
              <div
                className="card h-100 shadow-sm border-0 overflow-hidden project-card"
                style={{
                  transition: "all 0.3s ease",
                  borderTop: "4px solid #00d4ff",
                }}
              >
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <span style={{ fontSize: "2rem" }}>
                        {project.icon || "📌"}
                      </span>
                      <h5
                        className="card-title fw-bold mb-0"
                        style={{ color: "#0d1b2a" }}
                      >
                        {project.title}
                      </h5>
                    </div>
                    <span
                      className="badge fw-bold"
                      style={{
                        backgroundColor: getDifficultyColor(project.difficulty),
                        color: "white",
                      }}
                    >
                      {project.difficulty}
                    </span>
                  </div>

                  <p
                    className="card-text text-muted small mb-3"
                    style={{ lineHeight: "1.6" }}
                  >
                    {project.description}
                  </p>

                  <p
                    className="text-muted"
                    style={{ fontSize: "0.85rem", marginBottom: "1rem" }}
                  >
                    <small>
                      📅 {project.year || "2024"} • 📂 {project.category}
                    </small>
                  </p>

                  <div className="mb-3">
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="badge"
                          style={{
                            backgroundColor: "#e3f2fd",
                            color: "#00d4ff",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            border: "1px solid #00d4ff",
                          }}
                        >
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
                        className="btn btn-sm fw-bold flex-grow-1"
                        style={{
                          backgroundColor: "#0d1b2a",
                          color: "#00d4ff",
                          border: "1px solid #00d4ff",
                        }}
                      >
                        🔗 GitHub
                      </a>
                    )}
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm fw-bold flex-grow-1"
                        style={{
                          backgroundColor: "#00d4ff",
                          color: "#0d1b2a",
                          border: "none",
                        }}
                      >
                        🚀 View Live
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
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
