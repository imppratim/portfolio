import mySkills from "../data/meinSkills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container-lg">
        <h2
          className="display-5 fw-bold text-center mb-2"
          style={{ color: "#0d1b2a" }}
        >
          Technical Skills
        </h2>
        <p className="text-center text-muted mb-5">
          Expertise across AI/ML, Web Development, Backend, and DevOps
        </p>

        <div className="row g-4">
          {mySkills.map((skillGroup, index) => (
            <div key={index} className="col-lg-6">
              <div
                className="card h-100 shadow-sm border-0 skills-card"
                style={{
                  backgroundColor: "white",
                  borderLeft: "5px solid #00d4ff",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <span style={{ fontSize: "2rem", marginRight: "12px" }}>
                      {skillGroup.icon}
                    </span>
                    <h5
                      className="card-title fw-bold mb-0"
                      style={{ color: "#0d1b2a" }}
                    >
                      {skillGroup.category}
                    </h5>
                  </div>

                  <div className="skills-list">
                    {skillGroup.skills.map((skill, idx) => (
                      <div key={idx} className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="d-flex align-items-center gap-2">
                            <span style={{ fontSize: "1.2rem" }}>
                              {skill.icon}
                            </span>
                            <span
                              className="fw-500"
                              style={{ color: "#0d1b2a", fontSize: "0.95rem" }}
                            >
                              {skill.name}
                            </span>
                          </div>
                          <span
                            className="badge"
                            style={{
                              backgroundColor: "#00d4ff",
                              color: "#0d1b2a",
                            }}
                          >
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div
                          className="progress"
                          style={{ height: "8px", backgroundColor: "#e0e0e0" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${skill.proficiency}%`,
                              backgroundColor: "#00d4ff",
                              transition: "width 0.6s ease",
                            }}
                            aria-valuenow={skill.proficiency}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
