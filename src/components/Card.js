import React from "react";
import linkLogo from "../assets/link-logo.png";
import Button from "./Button";
import "./cards.scss";

export default function Card(props) {
  const { name, date, link } = props;
  return (
    <div className="card">
      <div className="cardTop">
        <div className="cardTop__dropDate">
          <h3>{date}</h3>
          <p>Drop Date</p>
        </div>
        <div className="cardTop__player">
          <h2 className="name">{name}</h2>
          <div className="link">
            <img src={linkLogo} alt="link logo" />
            <a href="linkitylink.com">{link}</a>
          </div>
        </div>
      </div>
      <Button />
    </div>
  );
}
