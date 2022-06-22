import React from "react";
import cartLogo from "../assets/cart-logo.png";
import linkLogo from "../assets/link-logo.png";
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
            <a href="blah">{link}</a>
          </div>
        </div>
      </div>
      <div className="cardBottom">
        <p>join drop</p>
        <img src={cartLogo} alt="cart logo" />
      </div>
    </div>
  );
}
