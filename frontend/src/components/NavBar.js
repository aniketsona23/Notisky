import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <h2>Notisuky</h2>
      <div className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/new-note">
          <li>New Note</li>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
