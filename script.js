"use strict";
const username = document.querySelector(".name-input");
const liveUsername = document.querySelector(".live-name");
const surname = document.querySelector(".surname-input");
const surnameLive = document.querySelector(".live-surname");
const aboutPersonInput = document.querySelector(".about-you-input");
const aboutPersonLive = document.querySelector(
  ".about-person-description-live"
);
const aboutPersonHeading = document.querySelector(".about-person-heading-live");
//
const displayInput = function (inputName, textContentName) {
  inputName.addEventListener("input", function () {
    textContentName.textContent = inputName.value;
  });
};
displayInput(username, liveUsername);
displayInput(surname, surnameLive);
displayInput(aboutPersonInput, aboutPersonLive);
aboutPersonInput.addEventListener("input", function () {
  aboutPersonLive.textContent = aboutPersonInput.value;
  const letterCount = aboutPersonLive.textContent.replace(
    /[^a-zA-Z]/g,
    ""
  ).length;
  console.log(letterCount);
  if (letterCount !== 0) {
    aboutPersonHeading.textContent = "ჩემ შესახებ";
  } else {
    aboutPersonHeading.textContent = "";
  }
});
const loadFile = function (event) {
  const output = document.getElementById("preview");
  output.src = URL.createObjectURL(event.target.files[0]);
  output.style.display = "block";
};
