import React, { Component } from "react";

const DataContext = React.createContext();

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
    end: new Date(2021, 7, 10, 11),
    customer: "Paul Newman",
  },
  2: {
    id: 2,
    truck_id: 1,
    start: new Date(2021, 7, 11, 12),
    end: new Date(2021, 7, 11, 20),
    customer: "Tony the Tiger",
  },
};

export default class DataProvider extends Component {
  state = {
    trucks: {},
    reservations: {},
    hasMockData: false,
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

/*function withDataConsumer(Component) {
    //this provides an easy way to add a consumer to a component
    return function ConsumerWrapper(props) {
      return (
        <DataConsumer>
          {value => <Component {...props} context={value} />}
        </DataConsumer>
      );
    };
  }*/

export { DataProvider, DataConsumer, DataContext };
