//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const first = "Bryan";
const last = "Roberts";
const d = new Date();

ReactDOM.render(
  <div>
    <p>Created by {first + " " + last}</p>
    <p>Copyright {d.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
