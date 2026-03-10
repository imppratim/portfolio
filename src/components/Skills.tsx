import mySkills from "../data/meinSkills";
import "../styles/components/Skills.css";

const Skills = () => {
  const getSkillProgressClass = (proficiency: number) => {
    const clamped = Math.max(0, Math.min(100, Math.round(proficiency)));
    return `skill-progress-${clamped}`;
  };

  return (
    <section id="skills" className="py-5 skills-section">
      <div className="container-lg">
        <h2 className="display-5 fw-bold text-center mb-2 skills-title">
          Skills
        </h2>
        <p className="text-center mb-5 skills-subtitle">
          Expertise across AI/ML, Web Development, Backend, and DevOps
        </p>

        <div className="row g-4">
          {mySkills.map((skillGroup, index) => (
            <div key={index} className="col">
              <div className="card h-100 shadow-sm border-0 skills-card skills-panel">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <span className="skills-icon">{skillGroup.icon}</span>
                    <h5 className="card-title fw-bold mb-0 skills-category-title">
                      {skillGroup.category}
                    </h5>
                  </div>

                  <div className="skills-list">
                    {skillGroup.skills.map((skill, idx) => (
                      <div key={idx} className="mb-3">
                        <span className="fw-500 skills-skill-name">
                          {skill.name}
                        </span>
                        <div className="progress skills-progress-track">
                          <div
                            className={`progress-bar skills-progress-fill ${getSkillProgressClass(skill.proficiency)}`}
                            role="progressbar"
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
