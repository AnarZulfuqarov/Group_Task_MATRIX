import axios from 'axios';
import { createContext, useEffect, useState, ReactNode } from 'react';

// Define the types for movies and seats
interface Movie {
  id: number; // Adjust based on your API response
  title: string; // Example fields; replace with actual API response fields
 desc:string,
 price:number,
 rating:number,
 img:string
}

interface Seat {
  id: number; // Adjust based on your API response
  number: string; // Example fields; replace with actual API response fields
 desc:string,
}

// Define the context type
interface MovieContextType {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  seats: Seat[];
  setSeats: React.Dispatch<React.SetStateAction<Seat[]>>;
}

// Create the context with a default value
const MovieContext = createContext<MovieContextType | undefined>(undefined);

// Define the props for the provider component
interface CinemaContextProps {
  children: ReactNode;
}

const CinemeContext: React.FC<CinemaContextProps> = ({ children }) => {
  const movieApiKey = import.meta.env.VITE_MOVIES_SUPABASE_KEY as string;
  const movieBaseUrl = import.meta.env.VITE_MOVIES_BASE_URL as string;
  const seatsApiKey = import.meta.env.VITE_SEATS_SUPABASE_KEY as string;
  const seatsBaseUrl = import.meta.env.VITE_SEATS_BASE_URL as string;

  const [movies, setMovies] = useState<Movie[]>([]);
  const [seats, setSeats] = useState<Seat[]>([]);

  useEffect(() => {
    const fetchMovies = () => {
      axios
        .get(movieBaseUrl, {
          headers: {
            apiKey: movieApiKey,
            Authorization: `Bearer ${movieApiKey}`,
          },
        })
        .then((response) => {
          setMovies(response?.data);
        })
        .catch((error) => {
          console.error('Error fetching movies:', error);
        });
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchSeats = () => {
      axios
        .get(seatsBaseUrl, {
          headers: {
            apiKey: seatsApiKey,
            Authorization: `Bearer ${seatsApiKey}`,
          },
        })
        .then((response) => {
          setSeats(response.data);
        })
        .catch((error) => {
          console.error('Error fetching seats:', error);
        });
    };
    fetchSeats();
  }, []);


  return (
    <MovieContext.Provider value={{ movies, setMovies, seats, setSeats }}>
      {children}
    </MovieContext.Provider>
  );
};
export {MovieContext}

export default  CinemeContext ;
