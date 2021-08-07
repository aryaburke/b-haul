import React , { useContext } from 'react'
import Select from "react-select";
import { DataContext } from '../context';

const DateSelect = () => {
    const context = useContext(DataContext);
    const {
        newRes
    } = context;

    //handling change, checking if start or end selector
    const handleChange = (e) => {
        if (e) {
            newRes.date = e.value;
        }
    }

    //constructing the truck  options
    var options = [];
    //just hardcoding in the date range here
    for (var i = 8; i <= 14; i++) {
        options.push({ value: i, label: "August " + i});
    }

    return(
        <Select options={options} isClearable isSearchable onChange={handleChange}/>
    )
}

export default DateSelect;