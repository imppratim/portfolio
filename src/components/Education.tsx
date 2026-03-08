import education from "../data/education";
import "../styles/components/Education.css";

const Education = () => {
  return (
    <section id="education" className="py-5 education-section">
      <div className="container-lg">
        <h2 className="display-5 fw-bold text-center mb-2 education-title">
          Education
        </h2>
        <p className="text-center mb-5 education-subtitle">
          Academic background and qualifications
        </p>

        <div className="row g-4 justify-content-center">
          {education.map((edu, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100 shadow-sm border-0 education-card">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <img src={edu.logo} alt={edu.university} className="education-logo" />
                    <div>
                      <h5 className="card-title fw-bold mb-1 education-degree">
                        {edu.degree}
                      </h5>
                      <p className="card-text small mb-1 education-field">
                        {edu.field}
                      </p>
                      <p className="education-university">
                        <small>
                          <strong>{edu.university}</strong>
                        </small>
                      </p>
                    </div>
                  </div>

                  <div className="education-meta">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="education-meta-text">
                        <small>📅 {edu.year}</small>
                      </span>
                      <span className="badge education-grade">
                        {edu.grade}
                      </span>
                    </div>
                    <span className="education-meta-text">
                      <small>📍 {edu.location}</small>
                    </span>
                  </div>

                  {edu.scholarship && (
                    <div className="education-detail-block">
                      <p className="education-detail-text education-detail-text-sm">
                        <strong>Scholarship:</strong> {edu.scholarship}
                      </p>
                    </div>
                  )}

                  {edu.thesis && (
                    <div className="education-detail-block">
                      <p className="education-detail-title">
                        <strong>Thesis:</strong>
                      </p>
                      <p className="education-detail-text">
                        {edu.thesis}
                      </p>
                    </div>
                  )}

                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="education-detail-block">
                      <p className="education-detail-title">
                        <strong>Highlights:</strong>
                      </p>
                      <ul className="education-highlights">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="education-highlight-item">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.courses && edu.courses.length > 0 && (
                    <div className="education-detail-block">
                      <p className="education-detail-title">
                        <strong>Key Courses:</strong>
                      </p>
                      <div className="education-courses">
                        {edu.courses.map((course, idx) => (
                          <span key={idx} className="education-course-tag">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.finalProject && (
                    <div className="education-final-project">
                      <p className="education-detail-text">
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
