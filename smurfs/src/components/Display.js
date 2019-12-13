import React from "react";
import { useGetSmurfOnce } from "../store";
import Smurf from "./Smurf";

export default function Display() {
  const { smurfs } = useGetSmurfOnce();
  console.log(smurfs);
  return (
    <div className="smurfs">
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
}
