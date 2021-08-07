import React from 'react';
import TimeSelect from './TimeSelect';
import TruckSelect from './TruckSelect';
import DateSelect from './DateSelect';
import ReservationButton from './ReservationButton';

const ReservationMaker = () => { 
    /*ReservationMaker is a component that's the whole right side of
    the reservations screen: date, time, truck selectors, button */
    return(
        <div>
            <h2 className="title">Make a reservation!</h2>
            <div className="details">Truck:</div>
            <TruckSelect/>
            <div className="details">Day:</div>
            <DateSelect/>
            <div className="details">Start time:</div>
            <TimeSelect start={true}/>
            <div className="details">End time:</div>
            <TimeSelect start={false}/>
            <ReservationButton/>
        </div>
    )
}

export default ReservationMaker;