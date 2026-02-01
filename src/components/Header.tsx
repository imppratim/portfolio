const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm"
      style={{
        backgroundColor: "#0a0a0a",
        borderBottom: "1px solid #222222",
      }}
    >
      <div className="container-fluid px-4 px-lg-5">
        <a
          className="navbar-brand fw-bold fs-4"
          href="#"
          style={{ color: "#00d4ff" }}
        >
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
                className="nav-link btn btn-link text-white"
                onClick={() => scrollToSection("introduction")}
              >
                Introduction
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-white"
                onClick={() => scrollToSection("education")}
              >
                Education
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-white"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-white"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-white"
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
