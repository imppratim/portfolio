import "../styles/components/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-5 footer-section">
      <div className="container-lg">
        <div className="row mb-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3 footer-heading">
              Partha Pratim Nandi
            </h5>
            <p className="small footer-subtext">
              AI Engineer | Web Developer | Tech Enthusiast
            </p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3 footer-heading">
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#introduction"
                  className="text-decoration-none small footer-link"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-decoration-none small footer-link"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-decoration-none small footer-link"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-decoration-none small footer-link"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-3 footer-heading">
              Follow Me
            </h5>
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/imppratim/"
                className="text-decoration-none footer-social-link"
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://github.com/imppratim"
                className="text-decoration-none footer-social-link"
              >
                <i className="bi bi-github"></i> GitHub
              </a>
              <a
                href="mailto:imppratim@gmail.com"
                className="text-decoration-none footer-social-link"
              >
                <i className="bi bi-envelope"></i> Email
              </a>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="text-center small footer-copy">
          <p className="mb-0">
            © {currentYear} Partha Pratim Nandi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
