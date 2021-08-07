import React , { useContext } from 'react'
import Select from "react-select";
import { DataContext } from '../context';

const TruckSelect = () => {
    /*TruckSelect is responsible for the truck selector*/
    const context = useContext(DataContext);
    const {
        newRes,
        trucks
    } = context;

    //handling change, checking if start or end selector
    const handleChange = (e) => {
        if (e) {
            newRes.truck_id = e.value;
        }
    }

    //constructing the truck  options
    var options = [];
    for (const val of Object.values(trucks)) {
        options.push({ value: val.id, label: val.id + " - " + val.model});
    }

    return(
        <Select options={options} isClearable isSearchable onChange={handleChange}/>
    )
}

export default TruckSelect;