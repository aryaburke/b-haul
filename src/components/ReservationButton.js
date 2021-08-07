import React , { useContext } from 'react'
import Select from "react-select";
import { DataContext } from '../context';



const ReservationButton = () => {
    /* CONTEXT AND CONTEXT FUNCTIONS */
    const context = useContext(DataContext);
    const {
        reservations
    } = context;

    const addReservation = (truck_id, start, end, customer) => {
        //this function adds a reservation to the data
        /*checking for conflicts - this is obviously a place where
            we would benefit from the ability to query the db using sql*/
        for (var val in Object.entries(reservations)) {
            if (truck_id === val.truck_id && (start < val.end || end > val.start)) {
                throw `Reservation conflicts with reservation #${val.id}`;
            }
        }
        //finds the lowest available id and uses it for reservation
        var id = 1;
        while (Object.keys(reservations).includes(id)) {
            id++;
        }
        //add the reservation to a copy of the dictionary
        var newRes = {
            id: id,
            truck_id: truck_id,
            start: start,
            end: end,
            customer: customer,
        };
        //sets the state
        reservations[id] = newRes;
    };

    //! need a button
    return(
        <div></div>
    )

}

export default ReservationButton;