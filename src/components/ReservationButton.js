import React , { useContext, useState, useEffect } from 'react'
import { DataContext, NEWRES } from '../context';



const ReservationButton = () => {
    /*ReservationButton is the button responsible for checking if a reservation is valid, returning errors if not, and adding it if so*/
    const context = useContext(DataContext);
    const [errorState, setErrorState] = useState('')
    var {
        reservations,
        newRes
    } = context;

    useEffect(() => {
        setErrorState(errorState);
    }, [errorState])

    const addReservation = () => {
        //this function adds a reservation to the data
        /*checking for conflicts - this is obviously a place where
            we would benefit from the ability to query the db using sql*/
    
        //clear errorState
        setErrorState('');

        console.log(newRes)

        //check that all values are filled
        if (!newRes.truck_id || newRes.start === undefined || newRes.end === undefined || !newRes.date) {
            throw `Cannot make reservation - must fill out whole form.`
        }

        //make the integer values into dates
            //hardcoding date here
        console.log(newRes.date);
        var startDate = new Date(2021,7,newRes.date,newRes.start);
        var endDate = new Date(2021,7,newRes.date,newRes.end);

        //check if they intersect
        for (var key in reservations) {
            var val = reservations[key]
            if (newRes.truck_id === val.truck_id && 
                ((startDate < val.end && startDate > val.start) ||
                 (endDate < val.end && endDate > val.start) || 
                 (startDate < val.start && endDate > val.end) ||
                 (startDate > val.start && endDate < val.end) ||
                 (startDate === val.start && endDate === val.end))) {
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
            start: startDate,
            end: endDate,
        };

        //clear newRes
        newRes = NEWRES;
    };

    const buttonClick = () => {
        try {
            addReservation();
        } catch(e) {
            setErrorState(e);
        }
    }

    return(
        <div>
            <button className="reservation-button" onClick={buttonClick}>Make a reservation!</button>
            <div className="error">{errorState}</div>
        </div>
    )

}

export default ReservationButton;