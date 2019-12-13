import React from "react";
import "./App.css";
import Display from "./Display";
import SmurfForm from "./SmurfForm";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="title">Smurf Town Record</h1>
        <SmurfForm />
        <Display />
      </div>
    </div>
  );
}

export default App;
