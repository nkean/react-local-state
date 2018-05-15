import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Nathan',
        city: 'Minneapolis',
      }
    };

    // makes 'this' in handleChange the same as 'this' in the constructor
    // similar to const self = this
    // this.handleChange = this.handleChange.bind(this);  <-- use if handleChange isn't an arrow function
  }

  handleNameChange = (event) => {
    // console.log('input was changed');
    // console.log('event.target', event.target);
    console.log('event.target.value', event.target.value);

    // this.state.user = event.target.value;
    this.setState({user: { name: event.target.value,
                    city: this.state.user.city }});
  }

  handleCityChange = (event) => {
    console.log('event.target.value', event.target.value);
    this.setState({user: { name: this.state.user.name,
                    city: event.target.value }});
  }

  handleButton = (event) => {
    console.log('Button was clicked: ', this.state.user);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleNameChange} placeholder="User Name" />
        <input onChange={this.handleCityChange} placeholder="City" />
        <button onClick={this.handleButton}>LOG ME</button>
        {this.state.user.name} is from {this.state.user.city}
      </div>
    );
  }
}

export default App;