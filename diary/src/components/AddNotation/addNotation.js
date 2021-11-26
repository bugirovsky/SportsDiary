import React, { Component } from "react";
import axios from "axios";
import "./addNotation.css";
import "../shared//button/Button";
import { fieldValidator } from "../../validators/field.validator";
export default class AddNotation extends Component {

  state = {
    DayNumber: "",
    DateTime: "",
    Breakfast: "",
    Lunch: "",
    Dinner: "",
    errorMessages: {
      DayNumber: "",
      Breakfast: "",
      Lunch: "",
      Dinner: "",
    },
  };

  handleChangeDayNumber = (event) => {
    this.setState({ DayNumber: event.target.value });
  };
  handleChangeDateTime = (event) => {
    this.setState({ DateTime: event.target.value });
  };
  handleChangeBreakfast = (event) => {
    this.setState({ Breakfast: event.target.value });
  };
  handleChangeLunch = (event) => {
    this.setState({ Lunch: event.target.value });
  };
  handleChangeDinner = (event) => {
    this.setState({ Dinner: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const validator = this.isValid();
    if (validator.isValid) {
      axios.post(`http://localhost:4000/addNotation`, {
        DayNumber: this.state.DayNumber,
        DateTime: this.state.DateTime,
        Breakfast: this.state.Breakfast,
        Lunch: this.state.Lunch,
        Dinner: this.state.Dinner,
      });

      this.setState({ DayNumber: "" });
      this.setState({ DateTime: "" });
      this.setState({ Breakfast: "" });
      this.setState({ Lunch: "" });
      this.setState({ Dinner: "" });
      console.log( this.props.updateData())
      this.props.updateData();
      this.props.setActive();
    } else {
      let errorMessages = this.state.errorMessages;

      validator.errors.forEach((el) => {
        errorMessages[Object.keys(el)[0]] = el[Object.keys(el)[0]];
      });

      this.setState((state) => ({
        ...state,
        errorMessages: {
          ...this.state.errorMessages,
          ...errorMessages,
        },
      }));
    }
  };
  isValid() {
    let isValid = true;
    let errors = [];
    console.log("is Valid");
    Object.keys(this.state)
      .filter((el) => el !== "errorMessages" && el !== "DateTime")
      .forEach((el) => {
        const resposne = fieldValidator(this.state[el]);
        if (!resposne.isValid) {
          isValid = resposne.isValid;
        }
        errors = [...errors, { [el]: resposne.errorMessage }];
      });
    return { isValid, errors };
  }

  render() {
    console.log("render notation content");
    return (
      <div className="container">
        <form id="addNotationForm" onSubmit={this.handleSubmit}>
           <label>День:</label>
           <br />
          <input
            value={this.state.DayNumber}
            className="field"
            onChange={this.handleChangeDayNumber}
          ></input>
          <p className="message">{this.state.errorMessages.DayNumber}</p>
          <label>Дата и время:</label>
          <br />
          <input
            type="datetime-local"
            value={this.state.DateTime}
            className="field"
            onChange={this.handleChangeDateTime}
          ></input>

          <label>Завтрак:</label>
          <br />
          <input
            value={this.state.Breakfast}
            className="field"
            onChange={this.handleChangeBreakfast}
          ></input>
          <p className="message">{this.state.errorMessages.Breakfast}</p>
          <label>Обед:</label>
          <br />
          <input
            value={this.state.Lunch}
            className="field"
            onChange={this.handleChangeLunch}
          ></input>
          <p className="message">{this.state.errorMessages.Lunch}</p>
          <label>Ужин:</label>
          <br />

          <input
            value={this.state.Dinner}
            className="field"
            onChange={this.handleChangeDinner}
          ></input>
          <p className="message">{this.state.errorMessages.Dinner}</p>

          <input className="btn" type="submit" value="Добавить" />
        </form>
      </div>
    );
  }
}
