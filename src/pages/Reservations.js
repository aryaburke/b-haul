import React from "react";
import Calendar from "../components/Calendar";
import ReservationMaker from "../components/ReservationMaker";

const Reservations = () => {
  return (
    <div className="reservations-container">
      <div className="calendar-container">
        <Calendar/>
      </div>
      <div className="reservation-maker-container">
        <ReservationMaker/>
      </div>
      
    </div>
);
};
  
export default Reservations;