import { PiFilmSlate } from "react-icons/pi";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import "animate.css"

const Navbar = () => {
  return (
    <div>
      <div className="navbar-up">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid my-2 ms-5">
            <a className="navbar-brand col-lg-3 head" href="#">
              <p className="my-1 mt-2">
                <PiFilmSlate className="icon mb-1" /> 
                <span> UFA</span> cinema
              </p>
            </a>
            <button
              className="navbar-toggler mx-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample11"
              aria-controls="navbarsExample11"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse d-lg-flex md-5"
              id="navbarsExample11"
            >
              <ul className="navbar-nav col-lg-6 justify-content-lg-center mx-5">
                <li className="nav-item mx-3">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link to={"/movies"} className="nav-link">
                    Movies
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link to={"/contact"} className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link to={"/about"} className="nav-link">
                    About Us
                  </Link>
                </li>
              </ul>
              <div className="d-lg-flex col-lg-3 justify-content-lg-end ms-5">
                <button className="reserve animate__animated animate__tada animate__infinite animate__slower">
                  <Link to={"/reservation"} className="link ">
                    Reserve Now!
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
