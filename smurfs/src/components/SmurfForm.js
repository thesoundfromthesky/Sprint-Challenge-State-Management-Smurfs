import React, { useState } from "react";
import { usePostSmurf } from "../store";

export default function SmurfForm() {
  const initialState = { name: "", age: "", height: "" };
  const [smurfForm, setSmurfForm] = useState(initialState);
  const { name, age, height } = smurfForm;

  const dispatch = usePostSmurf();

  const handleSubmit = ev => {
    ev.preventDefault();
    dispatch(smurfForm);
    setSmurfForm(initialState);
  };

  const handleChange = ev => {
    const { target } = ev;
    setSmurfForm(prev => ({ ...prev, [target.name]: target.value }));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          placeholder="enter name"
          onChange={handleChange}
          value={name}
        />
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          name="age"
          placeholder="enter age"
          onChange={handleChange}
          value={age}
        />
        <label htmlFor="height">Height: </label>
        <input
          id="height"
          name="height"
          placeholder="enter height"
          onChange={handleChange}
          value={height}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
