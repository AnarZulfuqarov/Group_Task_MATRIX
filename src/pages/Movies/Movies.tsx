import { FaStar } from "react-icons/fa";
import "./Movies.scss";
const Movies = () => {
  return (
    <div className="container">
      <div className="row movies pb-5 pt-5">
        <div className="col-sm-6 col-md-4 col-lg-3 p-0  movie_card">
          <div className="image">
            <img src="https://via.placeholder.com/300" alt="movie" />
          </div>
          <div className="title">
            <h1>Movie Title</h1>
            <p>desc</p>
            <div className="raiting">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span>price</span>
            <div className="text-center">
              <button className="btn btn-danger">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
