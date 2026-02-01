import education from "../data/education";

const Education = () => {
  return (
    <section
      id="education"
      className="py-5"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="container-lg">
        <h2
          className="display-5 fw-bold text-center mb-2"
          style={{ color: "#ffffff" }}
        >
          Education
        </h2>
        <p className="text-center mb-5" style={{ color: "#888888" }}>
          Academic background and qualifications
        </p>

        <div className="row g-4 justify-content-center">
          {education.map((edu, index) => (
            <div key={index} className="col-md-6">
              <div
                className="card h-100 shadow-sm border-0"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderLeft: "5px solid #ffffff",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <img
                      src={edu.logo}
                      alt={edu.university}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "contain",
                        marginRight: "15px",
                        borderRadius: "4px",
                      }}
                    />
                    <div>
                      <h5
                        className="card-title fw-bold mb-1"
                        style={{ color: "#ffffff", fontSize: "1.05rem" }}
                      >
                        {edu.degree}
                      </h5>
                      <p
                        className="card-text small mb-1"
                        style={{ color: "#b0b0b0" }}
                      >
                        {edu.field}
                      </p>
                      <p
                        style={{
                          color: "#888888",
                          marginBottom: "0",
                          fontSize: "0.9rem",
                        }}
                      >
                        <small>
                          <strong>{edu.university}</strong>
                        </small>
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      marginBottom: "1rem",
                      paddingTop: "1rem",
                      borderTop: "1px solid #333333",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span style={{ color: "#888888", fontSize: "0.85rem" }}>
                        <small>📅 {edu.year}</small>
                      </span>
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#000000",
                          fontWeight: "600",
                          fontSize: "0.85rem",
                        }}
                      >
                        {edu.grade}
                      </span>
                    </div>
                    <span style={{ color: "#888888", fontSize: "0.85rem" }}>
                      <small>📍 {edu.location}</small>
                    </span>
                  </div>

                  {edu.scholarship && (
                    <div style={{ marginBottom: "1rem", paddingTop: "0.5rem" }}>
                      <p
                        style={{
                          color: "#b0b0b0",
                          fontSize: "0.9rem",
                          marginBottom: "0.25rem",
                        }}
                      >
                        <strong>Scholarship:</strong> {edu.scholarship}
                      </p>
                    </div>
                  )}

                  {edu.thesis && (
                    <div style={{ marginBottom: "1rem", paddingTop: "0.5rem" }}>
                      <p
                        style={{
                          color: "#b0b0b0",
                          fontSize: "0.85rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <strong>Thesis:</strong>
                      </p>
                      <p
                        style={{
                          color: "#888888",
                          fontSize: "0.85rem",
                          marginBottom: "0",
                        }}
                      >
                        {edu.thesis}
                      </p>
                    </div>
                  )}

                  {edu.highlights && edu.highlights.length > 0 && (
                    <div style={{ marginBottom: "1rem", paddingTop: "0.5rem" }}>
                      <p
                        style={{
                          color: "#b0b0b0",
                          fontSize: "0.85rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <strong>Highlights:</strong>
                      </p>
                      <ul
                        style={{
                          color: "#888888",
                          fontSize: "0.85rem",
                          paddingLeft: "1.25rem",
                          marginBottom: "0",
                        }}
                      >
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} style={{ marginBottom: "0.25rem" }}>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.courses && edu.courses.length > 0 && (
                    <div style={{ marginBottom: "1rem", paddingTop: "0.5rem" }}>
                      <p
                        style={{
                          color: "#b0b0b0",
                          fontSize: "0.85rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <strong>Key Courses:</strong>
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        {edu.courses.map((course, idx) => (
                          <span
                            key={idx}
                            style={{
                              backgroundColor: "#333333",
                              color: "#e0e0e0",
                              padding: "0.25rem 0.5rem",
                              borderRadius: "4px",
                              fontSize: "0.75rem",
                            }}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.finalProject && (
                    <div style={{ paddingTop: "0.5rem" }}>
                      <p
                        style={{
                          color: "#b0b0b0",
                          fontSize: "0.85rem",
                          marginBottom: "0.25rem",
                        }}
                      >
                        <strong>Final Project:</strong> {edu.finalProject}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
