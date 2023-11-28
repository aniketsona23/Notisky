import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <h2>Notisuky</h2>
      <div className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>New Note</li>
      </div>
    </div>
  );
};

export default NavBar;
