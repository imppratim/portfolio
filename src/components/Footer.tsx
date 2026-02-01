const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #222222" }}
      className="text-white py-5"
    >
      <div className="container-lg">
        <div className="row mb-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3" style={{ color: "#ffffff" }}>
              Partha Pratim Nandi
            </h5>
            <p className="small" style={{ color: "#888888" }}>
              AI Engineer | Web Developer | Tech Enthusiast
            </p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3" style={{ color: "#ffffff" }}>
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#introduction"
                  className="text-decoration-none small"
                  style={{ color: "#888888" }}
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-decoration-none small"
                  style={{ color: "#888888" }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-decoration-none small"
                  style={{ color: "#888888" }}
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-3" style={{ color: "#ffffff" }}>
              Follow Me
            </h5>
            <div className="d-flex gap-3">
              <a
                href="https://linkedin.com"
                className="text-decoration-none"
                style={{ color: "#888888" }}
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://github.com"
                className="text-white-50 text-decoration-none"
              >
                <i className="bi bi-github"></i> GitHub
              </a>
              <a
                href="mailto:partha@example.com"
                className="text-white-50 text-decoration-none"
              >
                <i className="bi bi-envelope"></i> Email
              </a>
            </div>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="text-center text-white-50 small">
          <p className="mb-0">
            © {currentYear} Partha Pratim Nandi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
