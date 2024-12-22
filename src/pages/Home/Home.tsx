import { MdChair, MdFamilyRestroom } from "react-icons/md";
import "./Home.scss";
import { IoFastFood } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { RiBaseStationLine } from "react-icons/ri";
import { BiSolidParty } from "react-icons/bi";

const Home = () => {
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
              <div className="carousel-caption d-flex flex-column">
                <div className="up">
                  <h1>AVATAR</h1>
                </div>
                <div className="down">
                  <p>fidan</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="background"></div>
              <img
                src="https://fugitives.com/wp-content/uploads/2022/12/Avatar-Ending-Explained-2009-Fantasy-Thriller-Film.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="background"></div>
              <img
                src="https://fugitives.com/wp-content/uploads/2022/12/Avatar-Ending-Explained-2009-Fantasy-Thriller-Film.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
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
        <div className="row mx-5 g-4 py-3 row-cols-1 row-cols-lg-3 text-center pt-5">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
            <MdChair />
            </div>
            <h3 className="fs-2 text-body-emphasis">Premium Seating and Comfort</h3>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
            <IoFastFood />
            </div>
            <h3 className="fs-2 text-body-emphasis">Food and Beverage Services</h3>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
            <AiFillAudio />
            </div>
            <h3 className="fs-2 text-body-emphasis">Enhanced Audio and Visual Features</h3>
          </div>
        </div>
        <div className="row mx-5 g-4 py-5 row-cols-1 row-cols-lg-3 text-center">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
            <RiBaseStationLine />

            </div>
            <h3 className="fs-2 text-body-emphasis">Streaming and Online Accessibility</h3>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
            <MdFamilyRestroom />
            </div>
            <h3 className="fs-2 text-body-emphasis">Family and Child-Friendly Options</h3>
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
