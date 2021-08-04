var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

//YYYY-MM-DD HH:MM
function initialize() {
    //creating tables
    var initquery1 = `CREATE TABLE IF NOT EXISTS Trucks(
        id INTEGER PRIMARY KEY NOT NULL,
        model TEXT
    )`;
    db.run(initquery1);
    var initquery2 = `CREATE TABLE IF NOT EXISTS Reservations(
        id INTEGER PRIMARY KEY NOT NULL,
        truck_id INTEGER,
        start TEXT,
        end TEXT,
        name TEXT,
        FOREIGN KEY truck_id REFERENCES Trucks(id)
    )`
    db.run(initquery2);

    //create mock data to display on site

    //truck data
    db.run("INSERT INTO Trucks VALUES (1, Van)")
    db.run("INSERT INTO Trucks VALUES (2, 18')")
    db.run("INSERT INTO Trucks VALUES (3, 24')")

    //job data

}

/*db.serialize(function() {
  db.run(`CREATE TABLE lorem (info TEXT)`);

  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});*/
