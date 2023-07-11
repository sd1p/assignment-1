import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link className="nav-link" to={"/task0"}>
          Task-0
        </Link>
        <Link className="nav-link" to={"/"}>
          Task-1
        </Link>
        <Link className="nav-link" to={"/task2"}>
          Task-2
        </Link>
        <Link className="nav-link" to={"/task3/0"}>
          Task-3
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
