import React from "react";
import Calendar from "../components/Calendar";
import ReservationMaker from "../components/ReservationMaker";

const Reservations = () => {
  return (
    <div className="calendar-container">
      <Calendar/>
      <ReservationMaker/>
    </div>
);
};
  
export default Reservations;