import personalData from "../data/meinDaten.ts";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #0d1b2a 0%, #1a2a3a 100%)",
      }}
    >
      <div className="container-lg">
        <div className="row align-items-center gap-4 gap-lg-0">
          <div className="col-lg-6 text-white">
            <h1 className="display-3 fw-bold mb-3" style={{ color: "#00d4ff" }}>
              {personalData.name}
            </h1>
            <p className="lead fs-5 mb-4" style={{ color: "#64b5f6" }}>
              {personalData.title}
            </p>
            <p className="text-white-50 lh-lg mb-4">{personalData.intro}</p>
            <div className="d-grid gap-3 d-sm-flex">
              <button
                type="button"
                className="btn btn-lg fw-bold"
                style={{
                  backgroundColor: "#00d4ff",
                  color: "#0d1b2a",
                  border: "none",
                }}
              >
                Get In Touch
              </button>
              <button
                type="button"
                className="btn btn-lg fw-bold"
                style={{
                  color: "#00d4ff",
                  border: "2px solid #00d4ff",
                  backgroundColor: "transparent",
                }}
              >
                View CV
              </button>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={personalData.image}
              alt={personalData.name}
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxWidth: "400px", border: "4px solid #00d4ff" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
