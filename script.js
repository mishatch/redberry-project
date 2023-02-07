"use strict";

// constant variables for input values
const username = document.querySelector(".name-input");
const surname = document.querySelector(".surname-input");
const aboutPersonInput = document.querySelector(".about-you-input");
const pictureOutput = document.getElementById("preview");
const emailInput = document.querySelector(".email-example");
const mobileNumInput = document.querySelector(".mobile-number-input");

// constant variables for right side resume textcontent
const liveUsername = document.querySelector(".live-name");
const surnameLive = document.querySelector(".live-surname");
const aboutPersonLive = document.querySelector(
  ".about-person-description-live"
);
const aboutPersonHeading = document.querySelector(".about-person-heading-live");
const emailOutput = document.querySelector(".email-info");
const mobileNumberOutput = document.querySelector(".number");
// constant variables for icons
const declineNameInput = document.querySelector(".decline-name-icon");
const acceptNameInput = document.querySelector(".valid-icon-name");
const acceptSurnameInput = document.querySelector(".valid-icon-surname");
const declineSurnameInput = document.querySelector(".decline-surname-icon");
const emailIcon = document.querySelector(".email-icon");
const acceptEmailInput = document.querySelector(".valid-icon-email");
const declineEmailInput = document.querySelector(".decline-email-icon");
const acceptNumberInput = document.querySelector(".valid-icon-number");
const declineNumberInput = document.querySelector(".decline-number-icon");
const telephoneIcon = document.querySelector(".phone-icon");

// function which displays name and surname on resume
const displayInput = function (inputName, textContentName, a) {
  inputName.addEventListener("input", function () {
    localStorage.setItem(a, inputName.value);
    textContentName.textContent = inputName.value;
  });
  if (localStorage.getItem(a)) {
    inputName.value = localStorage.getItem(a);
    textContentName.textContent = inputName.value;
  }
};

// function which displays email on resume
emailInput.addEventListener("input", function () {
  localStorage.setItem("userEmail", emailInput.value);
  emailOutput.textContent = emailInput.value;
  emailIcon.style.display = "block";
  if (Number(emailInput.value.length) === 0) {
    emailIcon.style.display = "none";
  }
});
if (localStorage.getItem("userEmail")) {
  emailInput.value = localStorage.getItem("userEmail");
  emailOutput.textContent = emailInput.value;
  emailIcon.style.display = "block";
}

// email validation
const validateEmail = function (input) {
  const emailValidation = /^[a-zA-Z0-9._%+-]+@redberry.ge$/;
  return emailValidation.test(input.value);
};
emailInput.addEventListener("input", function () {
  if (!validateEmail(this)) {
    declineEmailInput.style.display = "block";
    acceptEmailInput.style.display = "none";
    emailInput.style.outline = "1px solid #EF5050";
  } else {
    acceptEmailInput.style.display = "block";
    declineEmailInput.style.display = "none";
    emailInput.style.outline = "1px solid #98E37E";
  }
});

//
mobileNumInput.addEventListener("input", function () {
  localStorage.setItem("mobileNumber", mobileNumInput.value);
  mobileNumberOutput.textContent = mobileNumInput.value;
  telephoneIcon.style.display = "block";
  if (Number(mobileNumInput.value.length) === 0) {
    telephoneIcon.style.display = "none";
  }
});
if (localStorage.getItem("mobileNumber")) {
  mobileNumInput.value = localStorage.getItem("mobileNumber");
  mobileNumberOutput.textContent = mobileNumInput.value;
  telephoneIcon.style.display = "block";
}
console.log(declineNumberInput);
mobileNumInput.addEventListener("input", function () {
  if (this.value.length !== 12 && !this.value.startsWith("+995")) {
    declineNumberInput.style.display = "block";
    acceptNumberInput.style.display = "none";
    mobileNumInput.style.outline = "1px solid #EF5050";
  } else {
    declineNumberInput.style.display = "none";
    acceptNumberInput.style.display = "block";
    mobileNumInput.style.outline = "1px solid #98E37E";
  }
});
//function which displays user's picture on the resume
const loadFile = function (event) {
  pictureOutput.src = URL.createObjectURL(event.target.files[0]);
  pictureOutput.style.display = "block";
  localStorage.setItem("userPicture", pictureOutput.src);
};
if (localStorage.getItem("userPicture")) {
  pictureOutput.src = localStorage.getItem("userPicture");
  pictureOutput.style.display = "block";
}
// function which checks if user's input values are valid
const validationGeoLetter = function (inputValue, accept, decline) {
  inputValue.addEventListener("input", function () {
    const counter = inputValue.value.replace(/[^ა-ჰ]/g, "").length;
    let regExp = /^[\u10A0-\u10FF]+$/;
    if (counter < 2 || !regExp.test(this.value)) {
      decline.style.display = "block";
      accept.style.display = "none";
      inputValue.style.outline = "1px solid #EF5050";
    } else {
      accept.style.display = "block";
      decline.style.display = "none";
      inputValue.style.outline = "1px solid #98E37E";
    }
  });
};
// function which displays info about user.
const displayAboutPerson = function () {
  aboutPersonInput.addEventListener("input", function () {
    aboutPersonLive.textContent = aboutPersonInput.value;
    const letterCount = aboutPersonLive.textContent.replace(
      /[^a-zA-Z, ა-ჰ, 0-9]/g,
      ""
    ).length;
    if (letterCount !== 0) {
      aboutPersonHeading.textContent = "ჩემ შესახებ";
    } else {
      aboutPersonHeading.textContent = "";
    }
    localStorage.setItem("aboutPerson", aboutPersonInput.value);
  });
  aboutPersonLive.textContent = aboutPersonInput.value;
  if (localStorage.getItem("aboutPerson")) {
    aboutPersonInput.value = localStorage.getItem("aboutPerson");
    aboutPersonLive.textContent = aboutPersonInput.value;
    const letterCount = aboutPersonLive.textContent.replace(
      /[^a-zA-Z, ა-ჰ, 0-9]/g,
      ""
    ).length;
    if (letterCount !== 0) {
      aboutPersonHeading.textContent = "ჩემ შესახებ";
    } else {
      aboutPersonHeading.textContent = "";
    }
  }
};

displayInput(username, liveUsername, "Username");
displayInput(surname, surnameLive, "surname");
displayAboutPerson();
validationGeoLetter(username, acceptNameInput, declineNameInput);
validationGeoLetter(surname, acceptSurnameInput, declineSurnameInput);
