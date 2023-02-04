"use strict";
const loadFile = function (event) {
  const output = document.getElementById("preview");
  output.src = URL.createObjectURL(event.target.files[0]);
};
