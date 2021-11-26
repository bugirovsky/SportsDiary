import React, { Component } from "react";
import "./Product.css";
import axios from "axios";
import EditProduct from "../EditProduct/EditProduct";
import AddProductModal from "../AddProduct/AddProductModal";
export default class Product extends Component {
  state = {
    products: [],
    Id: null,
    NameProduct: "",
    Category: "",
    Protein: "",
    Fats: "",
    Carbohydrates: "",
    Calorie: "",
    activeEdit: false,
    isModalActive: false,
  };

  componentDidMount() {
    this.getData();
  }
  getData() {
    try {
      axios.get("http://localhost:4000/product").then((res) => {
        const products = res.data.data;
        this.setState({ products });
        console.log(this.state.products);
      });
    } catch (e) {
      console.log(e);
    }
  }

  deleteProduct = (Id) => {
    axios
      .delete(`http://localhost:4000/product?Id=${Id}`)
      .then(() => console.log(this.state.products));
  };

  onEdit = (
    Id,
    NameProduct,
    Category,
    Protein,
    Fats,
    Carbohydrates,
    Calorie
  ) => {
    this.setState({ activeEdit: true });
    this.setState({ Id });
    this.setState({ NameProduct });
    this.setState({ Category });
    this.setState({ Protein });
    this.setState({ Fats });
    this.setState({ Carbohydrates });
    this.setState({ Calorie });
  };
  onAddProductHandler = (e) => {
    e.preventDefault();
    this.setActive();
  };
  setActive() {
    this.setState((state) => ({
      ...state,
      isModalActive: !this.state.isModalActive,
    }));
  }
  render() {
    return (
      <>
        <AddProductModal
          isModalActive={this.state.isModalActive}
          setActive={this.setActive.bind(this)}
          updateData={this.getData.bind(this)}
        />
        <div className="container">
          <a href="/addProduct">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onAddProductHandler}
            >
              Добавить Продукт
            </button>
          </a>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Продукт</th>
                <th scope="col">Категория</th>
                <th scope="col">Белки</th>
                <th scope="col">Жиры</th>
                <th scope="col">Углеводы</th>
                <th scope="col">Калорийность</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product) => (
                <tr key={`__${product.Id}`}>
                  <td>{product.NameProduct}</td>
                  <td>{product.Category}</td>
                  <td>{product.Protein} г</td>
                  <td>{product.Fats} г</td>
                  <td>{product.Carbohydrates} г</td>
                  <td>{product.Calorie} Ккал</td>

                  <td>
                    <button
                      type="button"
                      className="btn"
                      onClick={() =>
                        this.onEdit(
                          product.Id,
                          product.NameProduct,
                          product.Category,
                          product.Protein,
                          product.Fats,
                          product.Carbohydrates,
                          product.Calorie
                        )
                      }
                    >
                      Редактировать
                    </button>
                  </td>

                  <td>
                    <a href="">
                      <button
                        type="button"
                        className="btn"
                        onClick={() => this.deleteProduct(product.Id)}
                      >
                        Удалить
                      </button>
                    </a>
                  </td>
                </tr>
              ))}
              {!this.state.activeEdit ? (
                ""
              ) : (
                <EditProduct
                  NameProduct={this.state.NameProduct}
                  Category={this.state.Category}
                  Protein={this.state.Protein}
                  Fats={this.state.Fats}
                  Carbohydrates={this.state.Carbohydrates}
                  Calorie={this.state.Calorie}
                  Id={this.state.Id}
                />
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
