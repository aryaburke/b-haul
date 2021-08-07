import React , { useContext } from 'react'
import { DataContext, NEWRES } from '../context';



const ReservationButton = () => {
    /* CONTEXT AND CONTEXT FUNCTIONS */
    const context = useContext(DataContext);
    var {
        reservations,
        newRes
    } = context;

    

    const addReservation = () => {
        //this function adds a reservation to the data
        /*checking for conflicts - this is obviously a place where
            we would benefit from the ability to query the db using sql*/
    

        //check that all values are filled
        if (!newRes.truck_id || newRes.start === undefined || newRes.end === undefined || !newRes.date) {
            throw `Cannot make reservation - must fill out whole form.`
        }

        //make the integer values into dates
            //hardcoding date here
        console.log(newRes.date);
        newRes.start = new Date(2021,7,newRes.date,newRes.start);
        newRes.end = new Date(2021,7,newRes.date,newRes.end);

        //check if they intersect
        for (var key in reservations) {
            var val = reservations[key]
            if (newRes.truck_id === val.truck_id && 
                ((newRes.start < val.end && newRes.start > val.start) ||
                 (newRes.end < val.end && newRes.end > val.start) || (newRes.start === val.start && newRes.end === val.end))) {
                throw `Reservation conflicts with reservation #${val.id}`;
            }
        }
        //finds the lowest available id and uses it for reservation
        var id = 1;
        while (Object.keys(reservations).includes(id.toString())) {
            id++;
        }
        newRes.id = id;
        //sets the state
        reservations[id] = {
            id: newRes.id,
            truck_id: newRes.truck_id,
            start: newRes.start,
            end: newRes.end,
        };

        //clear newRes
        newRes = NEWRES;
    };

    const buttonClick = () => {
        try {
            addReservation();
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <button id="reservation-button" onClick={buttonClick}>Make a reservation!</button>
    )

}

export default ReservationButton;