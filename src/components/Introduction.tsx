import personalData from "../data/meinDaten.ts";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container-lg">
        <div className="row align-items-center gap-4 gap-lg-0">
          {/* Text Content */}
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
                  padding: "12px 30px",
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
                  padding: "12px 30px",
                }}
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

      <style>{`
        /* Container to clip the glare within the circle */
        .glare-container {
          position: relative;
          display: inline-block;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.15);
          isolation: isolate; /* Fixes overflow issues in some browsers */
        }

        .profile-img {
          max-width: 400px;
          display: block;
          transition: transform 0.3s ease;
        }

        /* The Glare Sweep */
        .glare-container::after {
          content: "";
          position: absolute;
          top: 0;
          left: -150%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          animation: sweep 5s infinite;
        }

        @keyframes sweep {
          0% {
            left: -150%;
          }
          20% {
            left: 150%;
          }
          100% {
            left: 150%;
          }
        }

        .glare-container:hover .profile-img {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default Introduction;
