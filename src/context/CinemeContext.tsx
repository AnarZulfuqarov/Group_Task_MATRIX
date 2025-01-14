import axios from 'axios';
import { createContext, useEffect, useState, ReactNode } from 'react';

interface Movie {
  id: number;
  title: string;
  desc: string;
  price: number;
  rating: number;
  img: string;
}

interface Seat {
  id: number;
  isReserved: boolean;
  phone_number: number | null;
}

interface MovieContextType {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  seats: Seat[];
  setSeats: React.Dispatch<React.SetStateAction<Seat[]>>;
  reserveSeat: (seatId: number, phoneNumber: number | null) => Promise<void>;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface CinemaContextProps {
  children: ReactNode;
}

const CinemeContext: React.FC<CinemaContextProps> = ({ children }) => {
  const movieApiKey = import.meta.env.VITE_MOVIES_SUPABASE_KEY as string;
  const movieBaseUrl = import.meta.env.VITE_MOVIES_BASE_URL as string;
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
        .get(seatsBaseUrl)
        .then((response) => {
          setSeats(response.data);
        })
        .catch((error) => {
          console.error('Error fetching seats:', error);
        });
    };
    fetchSeats();
  }, []);

  const reserveSeat = async (seatId: number, phoneNumber: number | null) => {
    const isReserved = phoneNumber !== null;

    try {
      const response = await axios.patch(
        `${seatsBaseUrl}/${seatId}`,
        {
          isReserved,
          phone_number: phoneNumber,
        }
      );

      setSeats((prevSeats) =>
        prevSeats.map((seat) =>
          seat.id === seatId
            ? { ...seat, isReserved, phone_number: phoneNumber }
            : seat
        )
      );
    } catch (error: any) {
      console.error('Error updating seat:', error.response?.data || error.message);
    }
  };

  return (
    <MovieContext.Provider value={{ movies, setMovies, seats, setSeats, reserveSeat }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext };
export default CinemeContext;
