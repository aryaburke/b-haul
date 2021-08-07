import React, { Component } from "react";

/*context.js is responsible for the context and data structures used in
this project. although a relational database would have been preferred
and was attempted in /scripts/OLD_db.js the library does not work locally, and so a more primitive datatype of js dictionaries was used here*/


const DataContext = React.createContext();

//empty reservation data
var NEWRES = {
  id: undefined,
  truck_id: undefined,
  start: undefined,
  end: undefined,
  date: undefined
}

//mock data to initialize data with, example of data structure
var MOCKTRUCKS = {
  1: { id: 1, model: "Van" },
  2: { id: 2, model: "18ft" },
  3: { id: 3, model: "24ft" },
};
var MOCKRESERVATIONS = {
  1: {
    id: 1,
    truck_id: 3,
    start: new Date(2021, 7, 10, 10),
    end: new Date(2021, 7, 10, 11)
  },
  2: {
    id: 2,
    truck_id: 1,
    start: new Date(2021, 7, 11, 12),
    end: new Date(2021, 7, 11, 20)
  },
};

export default class DataProvider extends Component {
  state = {
    trucks: {},
    reservations: {},
    hasMockData: false,
    newRes: NEWRES
  };

  componentDidMount = async () => {
    //adds the mock data once upon the first mount
    this.addMockData();
  };

  addMockData = () => {
    //adds mock data to the data if it has not been added before
    if (this.state.hasMockData === false) {
      this.setState({
        trucks: MOCKTRUCKS,
        reservations: MOCKRESERVATIONS,
        hasMockData: true,
      });
    }
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          addTruck: this.addTruck,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

const DataConsumer = DataContext.Consumer;

function withDataConsumer(Component) {
    //this provides an easy way to add a consumer to a component
    return function ConsumerWrapper(props) {
      return (
        <DataConsumer>
          {value => <Component {...props} context={value} />}
        </DataConsumer>
      );
    };
  }

export { DataProvider, DataConsumer, DataContext, withDataConsumer, NEWRES };
