import React from "react";

function Button({ title, varient = "contained", color = "primary" }) {
  const className = "";
  if (varient === "contained") {
    className += "bg-" + color + " text-white";
  } else if (varient === "outliened") {
    className += "border-" + color + " text-" + color;
  }

  return <button className={className}>{title}</button>;
}

export default Button;
