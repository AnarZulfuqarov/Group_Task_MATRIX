import { MdChair, MdFamilyRestroom } from "react-icons/md";
import "./Home.scss";
import { IoFastFood } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { RiBaseStationLine } from "react-icons/ri";
import { BiSolidParty } from "react-icons/bi";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "animate.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="home pt-5">
      <div className="carousel mx-4 py-3">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="background"></div>
              <img
                src="https://fugitives.com/wp-content/uploads/2022/12/Avatar-Ending-Explained-2009-Fantasy-Thriller-Film.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-flex flex-column text-start">
                <div className="up mb-5 animate__animated animate__fadeInLeft animate__delay-1s">
                  <h1 className="mb-4">
                    AVATAR <span>(2009)</span>
                  </h1>
                  <h3 className="mb-4 d-none d-md-none d-lg-block">
                    IMDB:{" "}
                    <span>
                      7.9
                      <FaStar className="star mb-2" />
                    </span>
                  </h3>
                  <h3 className="mb-4 d-none d-md-none d-lg-block">
                    Genre:{" "}
                    <span>
                      Recommended Movies, Adventure, <br /> Fantasy, Action,
                      Science-Fiction
                    </span>
                  </h3>
                  <h3 className="mb-4 d-none d-md-none d-lg-block">
                    Director: <span>James Cameron</span>
                  </h3>
                  <h3 className="d-none d-md-none d-lg-block">
                    Movie Summary:{" "}
                    <span>
                      Jake Sully joins the Avatar program <br /> to study the
                      Na'vi people on the planet Pandora. <br /> There he meets
                      Princess Neytiri and decides to <br /> protect the planet
                      against the exploiters.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="background"></div>
              <img
                src="https://c4.wallpaperflare.com/wallpaper/631/218/373/4k-interstellar-matthew-mcconaughey-astronaut-wallpaper-preview.jpg"
                className="d-block w-100 image-2"
                alt="..."
              />
              <div className="carousel-caption d-flex flex-column text-start">
                <div className="up mb-5 animate__animated animate__fadeInLeft animate__delay-1s">
                  <h1 className="mb-4">
                    INTERSTELLAR <span>(2014)</span>
                  </h1>
                  <h3 className="mb-4 d-none d-md-none d-lg-block">
                    IMDB:{" "}
                    <span>
                      8.6
                      <FaStar className="star mb-2" />
                    </span>
                  </h3>
                  <h3 className="mb-4 d-none d-md-none d-lg-block">
                    Genre:{" "}
                    <span>
                      Recommended Movies, Adventure, <br /> Drama,
                      Science-Fiction
                    </span>
                  </h3>
                  <h3 className="mb-4 d-none d-md-none d-lg-block">
                    Director: <span> Christopher Nolan </span>
                  </h3>
                  <h3 className="d-none d-md-none d-lg-block">
                    Movie Summary:{" "}
                    <span>
                      While Cooper tries to provide a secure <br /> life for his
                      family through farming, he misses his old <br /> science
                      career. While he lives a peaceful life with his <br />{" "}
                      intelligent daughter Murph and her family, he encounters{" "}
                      <br /> an offer that will affect the fate of humanity.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="background"></div>
              <img
                src="https://assets-prd.ignimgs.com/2022/06/30/matrix-revolutionsdone-1656609097310.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-flex flex-column text-start">
                <div className="up mb-5 animate__animated animate__fadeInLeft animate__delay-1s">
                  <h1 className="mb-4">
                    MATRIX <span>(1999)</span>
                  </h1>
                  <h3 className="mb-4 d-none d-md-none d-lg-block">
                    IMDB:{" "}
                    <span>
                      8.7
                      <FaStar className="star mb-2" />
                    </span>
                  </h3>
                  <h3 className="mb-4 d-none d-md-none d-lg-block">
                    Genre: <span>Cult Movies, Action, Science-Fiction,</span>
                  </h3>
                  <h3 className="mb-4 d-none d-md-none d-lg-block">
                    Director: <span> Lana Wachowski , Lilly Wachowski</span>
                  </h3>
                  <h3 className="d-none d-md-none d-lg-block">
                    Movie Summary:{" "}
                    <span>
                      Neo desperately searches to learn the truth about the
                      Matrix that controls his life. He believes that the
                      legendary Morpheus knows this secret. One night, he meets
                      Trinity, who will take him to another world, and begins to
                      unravel the mysteries of the Matrix.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="service mt-5 pb-5">
        <h2 className="text-center mb-5">Services We Offer During The Movie</h2>
        <div
          className="row mx-5 g-4 py-3 row-cols-1 row-cols-lg-3 text-center pt-5"
          data-aos="fade-right"
          data-aos-duration="2100"
        >
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
              <MdChair />
            </div>
            <h3 className="fs-2 text-body-emphasis">
              Premium Seating and Comfort
            </h3>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
              <IoFastFood />
            </div>
            <h3 className="fs-2 text-body-emphasis">
              Food and Beverage Services
            </h3>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
              <AiFillAudio />
            </div>
            <h3 className="fs-2 text-body-emphasis">
              Enhanced Audio and Visual Features
            </h3>
          </div>
        </div>
        <div
          className="row mx-5 g-4 py-5 row-cols-1 row-cols-lg-3 text-center"
          data-aos="fade-left"
          data-aos-duration="2100"
        >
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
              <RiBaseStationLine />
            </div>
            <h3 className="fs-2 text-body-emphasis">
              Streaming and Online Accessibility
            </h3>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
              <MdFamilyRestroom />
            </div>
            <h3 className="fs-2 text-body-emphasis">
              Family and Child-Friendly Options
            </h3>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
              <BiSolidParty />
            </div>
            <h3 className="fs-2 text-body-emphasis">Exclusive Events</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
