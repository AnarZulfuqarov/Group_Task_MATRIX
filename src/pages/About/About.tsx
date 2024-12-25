import "./About.scss";
const About = () => {
  return (
   <div className="row">
     <div className="about-us col-12">
      <div className="bg-image"></div>
      <img
        className="about-img"
        src="https://www.reliant.co.uk/blog/wp-content/uploads/2023/12/movies.jpg"
        alt=""
      />
      <p className="about-desc">
        Welcome to UFA Cinema – Your Ultimate Movie Rental Destination!
        <br />
        <br />
        At UFA Cinema, we are passionate about bringing the magic of cinema
        straight to you. Whether you're a fan of the latest blockbusters,
        timeless classics, or hidden gems, our platform offers a wide variety of
        movies to suit every taste and occasion.
        <br />
        Why Choose UFA Cinema?
        <br />
        <br />
        Diverse Selection: From drama to action, comedy to romance, and
        everything in between, we’ve got it all! <br /> Convenience: Browse, select,
        and rent your favorite movies in just a few clicks. <br /> Accessibility: Enjoy
        seamless access to our platform from any device – be it your phone,
        tablet, or computer. <br /> High Quality: Experience movies in top-notch
        quality for the ultimate viewing experience. At UFA Cinema, we believe
        in creating moments of joy and entertainment for our customers. Our
        mission is to make movie rentals easy, enjoyable, and affordable for
        everyone.
        <br />
        Sit back, relax, and let UFA Cinema be your go-to destination for
        incredible movie experiences.
      </p>
    </div>
   </div>
  );
};

export default About;
