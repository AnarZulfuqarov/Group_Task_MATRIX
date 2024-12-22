import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Movies.scss";

const Movies = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", desc: "A mind-bending thriller", price: 15, rating: 5 },
    { id: 2, title: "Avatar", desc: "A visual masterpiece", price: 20, rating: 4 },
    { id: 3, title: "The Dark Knight", desc: "A gripping action movie", price: 18, rating: 5 },
    { id: 4, title: "Titanic", desc: "A timeless love story", price: 10, rating: 3 },
  ]);

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
              <img src="https://via.placeholder.com/300" alt="movie" />
            </div>
            <div className="title">
              <h1>{movie.title}</h1>
              <p>{movie.desc}</p>
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
