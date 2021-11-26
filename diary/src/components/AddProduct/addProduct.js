import React, { Component } from "react";
import axios from "axios";
import "./addProduct.css";
import { fieldValidator } from "../../validators/field.validator";

export default class AddProduct extends Component {
  state = {
    NameProduct: "",
    Category: "",
    Protein: "",
    Fats: "",
    Carbohydrates: "",
    Calorie: "",

    errorMessages: {
      NameProduct: "",
      Category: "",
      Protein: "",
      Fats: "",
      Carbohydrates: "",
      Calorie: "",
    },
  };

  handleChangeName = (event) => {
    this.setState({ NameProduct: event.target.value });
  };
  handleChangeCategory = (event) => {
    this.setState({ Category: event.target.value });
  };
  handleChangeProtein = (event) => {
    this.setState({ Protein: event.target.value });
  };
  handleChangeFats = (event) => {
    this.setState({ Fats: event.target.value });
  };
  handleChangeCarbohydrates = (event) => {
    this.setState({ Carbohydrates: event.target.value });
  };
  handleChangeCalorie = (event) => {
    this.setState({ Calorie: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const validator = this.isValid();
    
    if (validator.isValid) {
      axios.post(`http://localhost:4000/addProduct`, {
        NameProduct: this.state.NameProduct,
        Category: this.state.Category,
        Protein: this.state.Protein,
        Fats: this.state.Fats,
        Carbohydrates: this.state.Carbohydrates,
        Calorie: this.state.Calorie,
      });

      this.setState({ NameProduct: "" });
      this.setState({ Category: "" });
      this.setState({ Protein: "" });
      this.setState({ Fats: "" });
      this.setState({ Carbohydrates: "" });
      this.setState({ Calorie: "" });

      this.props.setActive();
      this.props.updateData();
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
      .filter((el) => el !== "errorMessages")
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
    return (
      <div className="container">
        <form id="addProductForm" onSubmit={this.handleSubmit}>
          <label>Продукт:</label>
          <br />
          <input
            value={this.state.NameProduct}
            name="name"
            className="field"
            onChange={this.handleChangeName}
          />
          <p className="message">{this.state.errorMessages.NameProduct}</p>
          <br />
          <br />

          <label>Категория:</label>
          <br />
          <input
            value={this.state.Category}
            name="name"
            className="field"
            onChange={this.handleChangeCategory}
          />
          <p className="message">{this.state.errorMessages.Category}</p>
          <br />
          <br />

          <label>Жиры:</label>
          <br />
          <input
            value={this.state.Fats}
            name="name"
            className="field"
            onChange={this.handleChangeFats}
          />
          <p className="message">{this.state.errorMessages.Fats}</p>
          <br />
          <br />

          <label>Белки:</label>
          <br />
          <input
            value={this.state.Protein}
            name="name"
            className="field"
            onChange={this.handleChangeProtein}
          />
          <p className="message">{this.state.errorMessages.Protein}</p>
          <br />
          <br />

          <label>Углеводы:</label>
          <br />
          <input
            value={this.state.Carbohydrates}
            name="name"
            className="field"
            onChange={this.handleChangeCarbohydrates}
          />
          <p className="message">{this.state.errorMessages.Carbohydrates}</p>
          <br />
          <br />

          <label>Калорийность:</label>
          <br />
          <input
            value={this.state.Calorie}
            name="name"
            className="field"
            onChange={this.handleChangeCalorie}
          />
          <p className="message">{this.state.errorMessages.Calorie}</p>
          <br />
          <br />
          <input className="btn btn-yellow" type="submit" value="Добавить" />
        </form>
      </div>
    );
  }
}
