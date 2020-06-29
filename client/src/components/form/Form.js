/////////////////////////////
import React from "react";
import "./form.scss";
const style = {
  padding: "25px 206px",
};

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form style={style} onSubmit={this.handleSubmit}>
        <label>
          Ваше имя:
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <label>
          Ваша фамилия:
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <label>
          Ваш email:
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
            type="text"
          />
        </label>

        <label>
          Ваш телефон:
          <input
            value={this.state.phone}
            name="phone"
            onChange={this.handleChange}
            type="number"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
