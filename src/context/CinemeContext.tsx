import axios from 'axios';
import {children, createContext, useEffect, useState} from 'react';


const MovieContext=createContext();

const CinemeContext= ({children}) => {
  const movieApiKey=import.meta.env.VITE_MOVIES_SUPABASE_KEY;
  const movieBaseUrl=import.meta.env.VITE_MOVIES_BASE_URL;
  const seatsApiKey=import.meta.env.VITE_SEATS_SUPABASE_KEY;
  const seatsBaseUrl=import.meta.env.VITE_SEATS_SUPABASE_KEY;

 
  const [movies,setMovies]=useState([]);

  useEffect(() => {
    axios
      .get(movieBaseUrl, {
        headers: {
          apiKey: movieApiKey,
          Authorization: `Bearer ${movieApiKey}`,
        },
      })
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);
  console.log(movies);
 
  return (
    <MovieContext.Provider value={{}}>
      {children}
    </MovieContext.Provider>
  )
}

export default CinemeContext