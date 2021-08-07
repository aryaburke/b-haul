import React, { useContext } from "react";
import Table from "../components/Table";
import { DataContext } from '../context';

const Data = () => {
  /*data is the "Our Data" page*/
  const context = useContext(DataContext);
    const {
        trucks,
        reservations
    } = context;
  
  return (
    <div className="tables-container">
      <div className="table-title">Trucks</div>
      <Table data={trucks} tableId="trucks-table"/>
      <div className="table-title">Reservations</div>
      <Table data={reservations} tableId="reservations-table"/>
    </div>
);
};
  
export default Data;