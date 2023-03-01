import React, { useState } from "react";
import "../styles/card.css";

export default function Card(props) {
  const [val, setVal] = useState({ 1: false });

  const chooseOne = (e) => {
    const rememberMe = localStorage.getItem(props.number);
    if (rememberMe === null) {
      localStorage.setItem(props.number, true);
      setVal({ ...val, [props.number]: true });
    } else {
      if (rememberMe === "true") {
        localStorage.setItem(props.number, false);
        setVal({ ...val, [props.number]: false });
      } else {
        localStorage.setItem(props.number, true);
        setVal({ ...val, [props.number]: true });
      }
    }
    console.log(val);
  };

  if (val[props.number] === undefined || val[props.number] === false)
    return (
      <div
        className="card  flex-column "
        onClick={chooseOne}
        style={{ backgroundColor: "#192841" }}
      >
        <div className="card-name">
          <p>{props.data}</p>
          <p className="headd">{props.number}</p>
        </div>
      </div>
    );
  else
    return (
      <div
        className="card card-un  flex-column "
        onClick={chooseOne}
        style={{ backgroundColor: "#000" }}
      >
        <div className="card-name ">
          <p>{props.data}</p>
          <p className="headd">{props.number}</p>
        </div>
      </div>
    );
}
