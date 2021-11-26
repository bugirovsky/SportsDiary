import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Calendar';

export default class Calendars extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    let calendar = <Calendar
    className="react-calendar__month-view__weekdays"
    onChange={this.onChange}
    value={this.state.date}
  />
    return (
      <div className="container">
          {calendar}
      </div>
    );
  }
}