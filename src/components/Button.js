import React from "react";
import cartLogo from "../assets/cart-logo.png";
import "./button.scss";

export default function Button() {
  const doSomething = () => {
    console.log("joining drop");
  };

  return (
    <div>
      <button className="button" onClick={doSomething}>
        Join Drop
        <img src={cartLogo} alt="cart logo" />
      </button>
    </div>
  );
}
