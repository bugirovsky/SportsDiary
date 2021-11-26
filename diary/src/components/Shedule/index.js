import React from "react";
import {} from "./style.css";

export function Sheduler({ data }) {
  console.log("data", data);
  let size = 4;
  let itter = 0;
  return (
    <div className="column-wrapper">
      {data.map((el, _in) => {
        if (_in > itter) {
          itter += size;
          return (
            <div className="row-wrapper">
              {data.slice(_in, _in + size).map((el) => {
                return (
                  <div className="wrapper">
                    <div className="header">День: {el.DayNumber}</div>
                    <div className="body">
                      <p className="note">Завтрак: {el.Breakfast}</p>
                      <p className="note">Обед: {el.Lunch}</p>
                      <p className="note">Ужин: {el.Dinner}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
