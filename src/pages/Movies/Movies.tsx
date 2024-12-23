import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import "./Movies.scss";
import { MovieContext } from "../../context/CinemeContext";

const Movies: React.FC = () => {
  const { movies, setMovies } = useContext(MovieContext);

  const sortMoviesAZ = () => {
    const sorted = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sorted);
  };

  const sortMoviesZA = () => {
    const sorted = [...movies].sort((a, b) => b.title.localeCompare(a.title));
    setMovies(sorted);
  };

  const sortMoviesLowToHigh = () => {
    const sorted = [...movies].sort((a, b) => a.price - b.price);
    setMovies(sorted);
  };

  const sortMoviesHighToLow = () => {
    const sorted = [...movies].sort((a, b) => b.price - a.price);
    setMovies(sorted);
  };

  return (
    <div className="container">
      <div className="row pt-5">
        <div className="listBtnDropdown">
          <div className="btnDropdown _first">
            <button className="btnNav">
              Az-Za
              <span className="chevron">
                <i className="fa fa-chevron-down" />
              </span>
            </button>
            <div className="dropdown">
              <div className="dropdown-content">
                <ul>
                  <li className="az" onClick={sortMoviesAZ}>
                    <i className="fa fa-arrow-right" />
                    A-Z
                  </li>
                  <li className="za" onClick={sortMoviesZA}>
                    <i className="fa fa-arrow-right " />
                    Z-A
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="btnDropdown _last">
            <button className="btnNav">
              Price
              <span className="chevron">
                <i className="fa fa-chevron-down" />
              </span>
            </button>
            <div className="dropdown">
              <div className="dropdown-content">
                <ul>
                  <li className="high-to-low" onClick={sortMoviesHighToLow}>
                    <i className="fa fa-arrow-right " />
                    Expensive to Cheap
                  </li>
                  <li className="low-to-high" onClick={sortMoviesLowToHigh}>
                    <i className="fa fa-arrow-right " />
                    Cheap to Expensive
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row movies pb-5 pt-5">
        {movies.map((movie) => (
          <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 p-0 movie_card">
            <div className="image">
              <img src={movie.img} alt="movie" />
            </div>
            <div className="title">
              <h1>{movie.title.slice(0,10)}...</h1>
              <p>{movie.desc.slice(0,20)}...</p>
              <div className="raiting">
                {Array.from({ length: movie.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span>${movie.price}</span>
              <div className="text-center">
                <button className="btn btn-danger">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
