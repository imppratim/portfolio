import personalData from "../data/meinDaten.ts";
import "../styles/components/Introduction.css";

const Introduction = () => {
  return (
    <section id="introduction" className="py-5 introduction-section">
      <div className="container-lg">
        <div className="row align-items-center gap-4 gap-lg-0">
          {/* Text Content */}
          <div className="col-lg-6 introduction-content">
            <h1 className="display-3 fw-bold mb-3 introduction-name">
              {personalData.name}
            </h1>
            <p className="lead fs-5 mb-4 introduction-title">
              {personalData.title}
            </p>
            <p className="lh-lg mb-4 introduction-summary">
              {personalData.intro}
            </p>
            <div className="d-grid gap-3 d-sm-flex introduction-actions">
              <a
                href="mailto:imppratim@gmail.com"
                className="btn btn-lg fw-bold text-decoration-none intro-btn intro-btn-primary"
              >
                Get In Touch
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Partha-Pratim-Nandi-CV.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg fw-bold text-decoration-none intro-btn intro-btn-outline"
              >
                View CV
              </a>
            </div>
          </div>

          {/* Image with Glare Effect */}
          <div className="col-lg-6 text-center">
            <div className="glare-container">
              <img
                src={personalData.image}
                alt={personalData.name}
                className="img-fluid rounded-circle profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
