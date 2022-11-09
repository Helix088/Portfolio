import Nav from "react-bootstrap/Nav";
import {Link, useLocation} from "react-router-dom";

export function NavBar() {
  const location = useLocation();
  return (
    <Nav className="justify-content-center nav-bar" activeKey="/home">
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/"
          className={location.pathname === "/" ? "fs-4 active" : "fs-4"}
        >
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/about"
          className={location.pathname === "/about" ? "fs-4 active" : "fs-4"}
        >
          About Me
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/projects" className={location.pathname === "/projects" ? "fs-4 active" : "fs-4"}>
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contact" className={location.pathname === "/contact" ? "fs-4 active" : "fs-4"}>
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
