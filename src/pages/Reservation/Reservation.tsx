import { useContext, useState } from "react";
import { MdChair } from "react-icons/md";
import axios from "axios";
import "./Reservation.scss";
import { MovieContext } from "../../context/CinemeContext";

const Reservation = () => {
  const { seats, setSeats } = useContext(MovieContext)!; // Context-dən seats və setSeats alırıq
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedSeatId, setSelectedSeatId] = useState<number | null>(null); // Seçilmiş oturacağın id-si
  const [phoneNumber, setPhoneNumber] = useState<string>(""); // Telefon nömrəsi

  const handleIconClick = (seatId: number) => {
    const seat = seats.find((seat) => seat.id === seatId);
    if (seat && seat.isReserved) {
      alert("This seat is already reserved.");
      return;
    }
    setSelectedSeatId(seatId);
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSave = async () => {
    if (!selectedSeatId || !phoneNumber) {
      alert("Please fill in the phone number.");
      return;
    }

    try {
      const seatsBaseUrl = import.meta.env.VITE_SEATS_BASE_URL as string;
      const seatsApiKey = import.meta.env.VITE_SEATS_SUPABASE_KEY as string;

      // API sorğusu ilə oturacağı yeniləyirik
      const response = await axios.patch(
        `${seatsBaseUrl}?id=eq.${selectedSeatId}`, // Düzgün URL formatı
        { phone_number: phoneNumber, isReserved: true },
        {
          headers: {
            apikey: seatsApiKey,
            Authorization: `Bearer ${seatsApiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Seat updated:", response.data);

      // Yenilənmiş `seats` məlumatını context-ə yazırıq
      const updatedSeats = seats.map((seat) =>
        seat.id === selectedSeatId
          ? { ...seat, isReserved: true, phone_number: phoneNumber }
          : seat
      );
      setSeats(updatedSeats);

      setIsModalOpen(false);
      setPhoneNumber("");
      setSelectedSeatId(null);
    } catch (error: any) {
      console.error("Error updating seat:", error.response?.data || error.message);
      alert("Failed to update seat. Please try again.");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setPhoneNumber("");
    setSelectedSeatId(null);
  };

  return (
    <div className="reservation-container pt-5 pb-5">
      <div className="seats">
        {seats.map((seat) => (
          <div
            className={`seat ${seat.isReserved ? "reserved" : ""}`}
            key={seat.id}
            onClick={() => handleIconClick(seat.id)}
          >
            <MdChair />
            <span>{seat.id}</span> {/* Oturacaq ID-sini göstərir */}
          </div>
        ))}
      </div>

      {isModalOpen && selectedSeatId !== null && (
        <div className="modal">
          <div className="modal-content">
            <h2>Reserve Seat ID: {selectedSeatId}</h2>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handleInputChange}
            />
            <div className="modal-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
