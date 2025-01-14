import { useContext, useState } from "react";
import { MdChair } from "react-icons/md";
import "./Reservation.scss";
import { MovieContext } from "../../context/CinemeContext";

const Reservation = () => {
  const { seats, reserveSeat } = useContext(MovieContext)!;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeatId, setSelectedSeatId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<number | null>(null);

  const validateName = (name: string) => /^[a-zA-Z\s]+$/.test(name.trim());
  const validatePhoneNumber = (phone: number | null) =>
    phone !== null && /^\+994(50|51|55|70|77)\d{7}$/.test(`+${phone}`);

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
      return; 
    }

    if (!phoneNumber || !validatePhoneNumber(phoneNumber)) {
      alert("Nomre yalnis daxil edilib")
      return; 
    }

    await reserveSeat(selectedSeatId, phoneNumber);
    closeModal();
  };

  const handleCancelReservation = async () => {
    if (selectedSeatId !== null) {
      await reserveSeat(selectedSeatId, null);
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
    <div className="reservation-container">
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
