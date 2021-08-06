import React, { useContext } from "react";
import Table from "../components/Table";
import { DataContext } from '../context';

const Data = () => {
  const context = useContext(DataContext);
    const {
        trucks,
        reservations
    } = context;
  
  return (
    <div>
      <Table data={trucks} tableId="trucks-table"/>
    </div>
);
};
  
export default Data;