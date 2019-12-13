import React from "react";

export default function Smurf({ smurf }) {
  const { name, age, height } = smurf;
  return (
    <div className="smurf">
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Height: {height}</div>
    </div>
  );
}
