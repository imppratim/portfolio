import personalData from "../data/meinDaten.ts";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
      }}
    >
      <div className="container-lg">
        <div className="row align-items-center gap-4 gap-lg-0">
          <div className="col-lg-6 text-white">
            <h1 className="display-3 fw-bold mb-3" style={{ color: "#ffffff" }}>
              {personalData.name}
            </h1>
            <p className="lead fs-5 mb-4" style={{ color: "#b0b0b0" }}>
              {personalData.title}
            </p>
            <p
              className="text-white-50 lh-lg mb-4"
              style={{ color: "#888888" }}
            >
              {personalData.intro}
            </p>
            <div className="d-grid gap-3 d-sm-flex">
              <a
                href="mailto:imppratim@gmail.com"
                className="btn btn-lg fw-bold text-decoration-none"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  border: "none",
                  display: "inline-block",
                }}
              >
                Get In Touch
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Partha-Pratim-Nandi-CV.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg fw-bold text-decoration-none"
                style={{
                  color: "#ffffff",
                  border: "2px solid #ffffff",
                  backgroundColor: "transparent",
                  display: "inline-block",
                }}
              >
                View CV
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={personalData.image}
              alt={personalData.name}
              className="img-fluid rounded-circle shadow-lg"
              style={{
                maxWidth: "400px",
                border: "4px solid #ffffff",
                boxShadow:
                  "0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 100px rgba(255, 255, 255, 0.1)",
                animation: "glare 3s ease-in-out infinite",
              }}
            />
            <style>{`
              @keyframes glare {
                0% {
                  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5),
                              0 0 60px rgba(255, 255, 255, 0.3),
                              0 0 100px rgba(255, 255, 255, 0.1);
                }
                50% {
                  box-shadow: 0 0 40px rgba(255, 255, 255, 0.7),
                              0 0 80px rgba(255, 255, 255, 0.5),
                              0 0 120px rgba(255, 255, 255, 0.2);
                }
                100% {
                  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5),
                              0 0 60px rgba(255, 255, 255, 0.3),
                              0 0 100px rgba(255, 255, 255, 0.1);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
