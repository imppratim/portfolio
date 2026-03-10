import "../styles/components/Header.css";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm site-header">
      <div className="container-fluid px-4 px-lg-5">
        <a className="navbar-brand fw-bold fs-4 site-brand" href="#">
          <img
            src={`${import.meta.env.BASE_URL}portfolio-icon.png`}
            alt="Portfolio logo"
            className="site-brand-logo"
          />
          PP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link header-nav-link"
                onClick={() => scrollToSection("introduction")}
              >
                Introduction
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link header-nav-link"
                onClick={() => scrollToSection("education")}
              >
                Education
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link header-nav-link"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link header-nav-link"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link header-nav-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
