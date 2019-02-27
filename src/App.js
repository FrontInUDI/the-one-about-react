import React, { Component } from 'react';
import axios from 'axios';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
import Select from './components/Select/Select';
import Button from './components/Button/Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: '',
    country: '',
    countries: []
  }

  componentDidMount = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all?fields=name')
      .then(response => {
        this.setState({
          countries: response.data
        });
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick = () => {
    alert(`Form submitted!\nName: ${this.state.name} \nCountry: ${this.state.country}`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <form className="form">
          <Label name="Name" />
          <Input
            value={this.state.name}
            name="name"
            change={this.handleChange} />
          <Label name="Country" />
          <Select
            name="country"
            options={this.state.countries}
            change={this.handleChange} />
          <Button
            primary
            text="click"
            click={this.handleClick} />
        </form>
      </div>
    );
  }
}

export default App;
