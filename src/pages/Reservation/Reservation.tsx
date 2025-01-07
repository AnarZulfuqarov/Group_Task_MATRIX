import { useContext, useState } from "react";
import { MdChair } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Reservation.scss";
import { MovieContext } from "../../context/CinemeContext";

const Reservation = () => {
  const { seats, setSeats } = useContext(MovieContext)!;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeatId, setSelectedSeatId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<number | null>(null);

  const validateName = (name: string) => /^[a-zA-Z\s]+$/.test(name.trim());
  const validatePhoneNumber = (phone: number | null) =>
    phone !== null && /^\+994(50|51|55|70|77)\d{7}$/.test(`+${phone}`);

  const updateSeat = async (seatId: number, isReserved: boolean) => {
    try {
      const seatsBaseUrl = import.meta.env.VITE_SEATS_BASE_URL as string;
      const seatsApiKey = import.meta.env.VITE_SEATS_SUPABASE_KEY as string;

      await axios.patch(
        `${seatsBaseUrl}?id=eq.${seatId}`,
        isReserved
          ? { phone_number: phoneNumber, isReserved: true }
          : { phone_number: null, isReserved: false },
        {
          headers: {
            apikey: seatsApiKey,
            Authorization: `Bearer ${seatsApiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      setSeats((prevSeats) =>
        prevSeats.map((seat) =>
          seat.id === seatId
            ? { ...seat, isReserved, phone_number: isReserved ? phoneNumber : null }
            : seat
        )
      );

      toast.success(
        isReserved ? "Success! You reserved the seat." : "Reservation canceled."
      );
    } catch (error: any) {
      console.error("Error updating seat:", error.response?.data || error.message);
      toast.error("Failed to update seat. Please try again.");
    }
  };

  const handleIconClick = (seatId: number) => {
    const seat = seats.find((seat) => seat.id === seatId);
    if (!seat) return;

    setSelectedSeatId(seatId);
    setIsModalOpen(true);

    setName("");
    setPhoneNumber(null);
  };

  const handleSave = async () => {
    if (!selectedSeatId) return;

    if (!name || !validateName(name)) {
      toast.error("Invalid name. Only letters are allowed.");
      return;
    }

    if (!phoneNumber || !validatePhoneNumber(phoneNumber)) {
      toast.error(
        "Invalid phone number. Ensure it follows the +994551234567 format."
      );
      return;
    }

    await updateSeat(selectedSeatId, true);
    closeModal();
  };

  const handleCancelReservation = async () => {
    if (selectedSeatId !== null) {
      await updateSeat(selectedSeatId, false);
      closeModal();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setName("");
    setPhoneNumber(null);
    setSelectedSeatId(null);
  };

  return (
    <div className="reservation-container pt-5 pb-5">
      <div className="seats">
        {seats.map((seat) => (
          <div
            className={`seat ${seat.isReserved ? "reserved" : "available"}`}
            key={seat.id}
            onClick={() => handleIconClick(seat.id)}
          >
            <MdChair />
            <span>{seat.id}</span>
          </div>
        ))}
      </div>

      {isModalOpen && selectedSeatId !== null && (
        <div className="modal">
          <div className="modal-content">
            <h2>
              {seats.find((seat) => seat.id === selectedSeatId)?.isReserved
                ? "Cancel Reservation"
                : `Reserve Seat ID: ${selectedSeatId}`}
            </h2>
            {!seats.find((seat) => seat.id === selectedSeatId)?.isReserved && (
              <>
                <input
                  type="text"
                  placeholder="Name and Surname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="994551234567"
                  value={phoneNumber || ""}
                  onChange={(e) =>
                    setPhoneNumber(
                      e.target.value ? parseInt(e.target.value) : null
                    )
                  }
                />
              </>
            )}
            <div className="modal-buttons">
              {!seats.find((seat) => seat.id === selectedSeatId)?.isReserved ? (
                <button onClick={handleSave}>Reserve Now</button>
              ) : (
                <button onClick={handleCancelReservation}>
                  Cancel Reservation
                </button>
              )}
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
