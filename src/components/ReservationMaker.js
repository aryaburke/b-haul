import React from 'react';
import TimeSelect from './TimeSelect';

const ReservationMaker = () => { 
    return(
        <div>
            <TimeSelect start={true}/>
            <TimeSelect start={false}/>
        </div>
    )
}

export default ReservationMaker;