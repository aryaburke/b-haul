var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');
var trucks = {};
var reservations = {};

/*this file is not used in the actual code because the sqlite3 node library
cannot be run locally in the browser. however, it was late in the process of
development when i discovered this, so i left it in to show the working
sql functions i was developing.*/


//YYYY-MM-DD HH:MM
function initialize() {
    //creating tables and their schemas if they don't already exist
    db.serialize(function(){
        db.run(`CREATE TABLE IF NOT EXISTS Trucks(
            id INTEGER PRIMARY KEY NOT NULL,
            model TEXT
        )`);
        db.run(`CREATE TABLE IF NOT EXISTS Reservations(
            id INTEGER PRIMARY KEY NOT NULL,
            truck_id INTEGER,
            start TEXT,
            end TEXT,
            name TEXT,
            FOREIGN KEY (truck_id) REFERENCES Trucks(id)
        )`);
    });
}

function clear() {
    //this function clears all tables from the database
    db.run("DROP TABLE Trucks; DROP TABLE Reservations");
}

function add(table, val) {
    //this is used to add entries to one of the tables. it also does checking to see if the proper data is given
    //val is a list of the values in column order
    //would be much more robust with serialization
    var stmt;
    var err;
    if (table === "Trucks") {
        if (val.length === 2) {
            stmt = db.prepare("INSERT INTO Trucks VALUES (?,?)");
            stmt.run(val[0],val[1]);
            stmt.finalize();
        } else {
            err = `Table ${table} requires 2 values, ${val.length} were provided`;
            throw err;
        }
    } else if (table === "Reservations") {
        if (val.length === 5) {
            stmt = db.prepare("INSERT INTO Reservations (?,?,?,?,?)")
            stmt.run(val[0],val[1],val[2],val[3],val[4]);
            stmt.finalize();
        } else {
            err = `Table ${table} requires 5 values, ${val.length} were provided`;
            throw err;
        }
    } else {
        err = `Table ${table} does not exist.`;
        throw err;
    }
}

function del(table, id) {
    //this function deletes an entry from a table given the table and the id
    var stmt;
    var err;
    if (table === "Trucks" || table === "Reservations") {
        stmt = `DELETE FROM ${table} WHERE id = ${id}`
        db.run(stmt);
    } else {
        err = `Table ${table} does not exist.`;
        throw err;
    }
}

function syncTable(table, dict) {
    //this returns a table as a dictionary where the keys are the id and the value is a dictionary of rowName:data
    db.all(`SELECT * FROM ${table}`, function(err,rows) {
        rows.forEach(function (row) {
            dict[row.id] = row;
            if (err) {
                console.log(err);
            }
        });
        console.log(`${table} data updated`)
    });
}

function sync() {
    //this function syncs the module data with the db's data
    syncTable("Trucks", trucks);
    syncTable("Reservations", reservations);
}

/*function askTrucks() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(() => {resolve(module.exports.trucks)},500);
    });
    return promise;
}

async function getTrucks() {
    return await askTrucks().then(x => {return x});
}*/



function populate() {
    //this function is used to populate the database file with mock data
    //truck data
    var table = "Trucks";
    var data = [
        [1, "Van"],
        [2, "18 ft"],
        [3, "24 ft"],
    ]
    data.forEach(function (val) { 
        add(table, val);
    });
}

async function test() {
    //!test function
    clear();
    initialize();
    populate();
    sync();
    //setTimeout(() => {console.log(module.exports.trucks)},500)
    db.close();
}

test();

export {initialize, add, del, sync, trucks, reservations};

