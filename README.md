# b-haul: A Simple U-haul-like Interface

Built using React.js, JavaScript, Node.js, and FullCalendar.
## To Use

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Notes

A few notes on the creation of this tool:
* To refresh the calendar once a reservation has been made, it's necessary to switch to the data page and then back to reservations. This is not ideal, but I tried a bunch of different things to re-render the FullCalendar when it updated, and I was unable to find the solution in a reasonable amount of time. This is a place where I would ask for help! The component should automatically update, since it uses the useContext hook, but I also tried implementing useEffect, useState, and forcing re-rendering with the FullCalendar render function.
* Originally, my plan was to use the Node.js SQLite3 library to handle the data. This would have been ideal, but after developing a module using it, testing in the console, I discovered that the library doesn't function when run locally on the browser side. Because of time constraints I developed the database layer using JavaScript dictionaries, which is less than ideal, but function for the scale of the app. These are found in `src/context.js`. The module using SQLite3 remains to peek into its development process and illustrate my SQL knowledge, and can be found at `scripts/OLD_db.js`.