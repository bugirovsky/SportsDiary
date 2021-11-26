import React, { Component } from "react";
import "./Diary.css";
import axios from "axios";
import Button from "../shared/button/Button";
import AddNotationModal from "../AddNotation/AddNotationModal";
import { Sheduler } from "../Shedule/index";

export default class Diary extends Component {
  state = {
    notations: [],
    Id: null,
    DayNumber: "",
    DateTime: "",
    Breakfast: "",
    Lunch: "",
    Dinner: "",
    isModalActive: false,
  };

  componentDidMount() {
    this.getData();
  }
  getData() {
    try {
      axios.get("http://localhost:4000/diary").then((res) => {
        const notations = res.data.data;
        this.setState({ notations });
        console.log(this.state.notations);
      });
    } catch (e) {
      console.log(e);
    }
  }
  onAddNoticeHandler = (e) => {
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
    console.log("Render Diary");
    return (
      <>
        <AddNotationModal
          isModalActive={this.state.isModalActive}
          setActive={this.setActive.bind(this)}
          updateData={this.getData.bind(this)}
        />
        <div className="container">
          <Sheduler data={this.state.notations} />
          <a href="/addNotation">
            <Button onClick={this.onAddNoticeHandler.bind(this)} />
          </a>
        </div>
      </>
    );
  }
}
