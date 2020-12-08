import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Tilak", age: 24 },
      { name: "Shrijan", age: 25 },
      { name: "Jagrit", age: 26 },
    ],
  };
  switchNameHandler = () => {
    // console.log("you clicked me ..");
    this.setState({
      persons: [
        { name: "Tilak Poudel", age: 24 },
        { name: "Shrijan", age: 25 },
        { name: "Jagrit", age: 25 },
      ],
      otherState : "some other state",
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi ,react </h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          {" "}
          <b> I love investing</b>
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
