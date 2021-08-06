import React from 'react';

const Table = ({data, tableId}) => {
    var rows = [];
    var header = false;
    for (const [id,t] of Object.entries(data)){
        var r = []
        if (!header) {
            //this creates a header row once at the beginning
            var h = []
            for (const key of Object.keys(t)) {
                h.push(<th scope="col">{key}</th>)
            }
            rows.push(<tr>{h}</tr>)
            header = true
        }
        for (const val of Object.values(t)) {
            var v = val;
            if (v instanceof Date) {
                //the only objects in the data will be dates,
                //so if a date is found we turn it to a string
                v = v.toString();
            }
            r.push(<td>{v}</td>)
        }
        rows.push(<tr>{r}</tr>)
    }


    return(
        <table className="data-table" id={tableId}>
            {rows}    
        </table>
    );
}

export default Table;