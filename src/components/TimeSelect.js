import React , { useContext } from 'react'
import Select from "react-select";
import { DataContext } from '../context';

const TimeSelect = (start) => {
    /*timeSelect is responsible for the start and end selectors*/
    const context = useContext(DataContext);
    const {
        newRes
    } = context;

    //handling change, checking if start or end selector
    const handleChange = (e) => {
        if (e) {
            //start is passed as an object with the actual boolean as a property
            if (start.start) {
                newRes.start = e.value;
            } else {
                newRes.end = e.value;
            }
        }
    }

    //constructing the time  options
    var options = [];
    for (let i = 0; i < 24; i++) {
        options.push({ value: i, label: i + ":00"});
    }

    return(
        <Select options={options} isClearable isSearchable onChange={handleChange}/>
    )
}

export default TimeSelect;