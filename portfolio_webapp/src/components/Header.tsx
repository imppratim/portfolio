type Props = {};

const Header = (props: Props) => {
  return (
    <div className="headerContainer">
      <header className="d-flex justify-content-center align-interms-center p-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link" aria-current="page">
              Introduction
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
