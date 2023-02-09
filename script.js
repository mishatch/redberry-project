"use strict";

// display user's picture on resume
const pictureOutput = document.getElementById("preview");
const loadFile = function (event) {
  pictureOutput.src = URL.createObjectURL(event.target.files[0]);
  pictureOutput.style.display = "block";
  localStorage.setItem("userPicture", pictureOutput.src);
};
if (localStorage.getItem("userPicture")) {
  pictureOutput.src = localStorage.getItem("userPicture");
  pictureOutput.style.display = "block";
}
let defaultInputStyle;
const defaultInputs = function () {
  defaultInputStyle = 1;
  localStorage.setItem("defaultInput", defaultInputStyle);
};
if (location.pathname === "/redberry-project/personal-info.html") {
  // constant variables for input values
  const username = document.querySelector(".name-input");
  const surname = document.querySelector(".surname-input");
  const aboutPersonInput = document.querySelector(".about-you-input");
  const emailInput = document.querySelector(".email-example");
  const mobileNumInput = document.querySelector(".mobile-number-input");

  // constant variables for right side resume textcontent
  const liveUsername = document.querySelector(".live-name");
  const surnameLive = document.querySelector(".live-surname");
  const aboutPersonLive = document.querySelector(
    ".about-person-description-live"
  );
  const aboutPersonHeading = document.querySelector(
    ".about-person-heading-live"
  );
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

  //variables which checks user's inputs and if user can go on next page
  let isNameValid;
  let isSurnameValid;
  let isNumberValid;
  let isEmailValid;
  const nextPage = document.querySelector(".next-page");
  // function which displays name and surname on resume
  surname.addEventListener("input", function () {
    localStorage.setItem("surname", surname.input);
    surnameLive.textContent = surname.value;
  });
  if (localStorage.getItem("surname")) {
    surname.value = localStorage.getItem("surname");
    surnameLive.textContent = surname.value;
  }
  username.addEventListener("input", function () {
    const counter = username.value.replace(/[^ა-ჰ]/g, "").length;
    let regExp = /^[\u10A0-\u10FF]+$/;
    localStorage.setItem("Username", username.value);
    liveUsername.textContent = username.value;
    localStorage.setItem("regExpName", !regExp.test(this.value));
    if (counter < 2 || !regExp.test(this.value)) {
      declineNameInput.style.display = "block";
      acceptNameInput.style.display = "none";
      username.style.outline = "1px solid #EF5050";
      isNameValid = false;
    } else {
      acceptNameInput.style.display = "block";
      declineNameInput.style.display = "none";
      username.style.outline = "1px solid #98E37E";
      isNameValid = true;
    }
  });
  if (localStorage.getItem("Username")) {
    username.value = localStorage.getItem("Username");
    liveUsername.textContent = username.value;
  }
  const counterName = username.value.replace(/[^ა-ჰ]/g, "").length;
  let regExpName = /^[\u10A0-\u10FF]+$/;
  if (counterName < 2 || !regExpName.test(username.value)) {
    declineNameInput.style.display = "block";
    acceptNameInput.style.display = "none";
    username.style.outline = "1px solid #EF5050";
    isNameValid = false;
  } else {
    acceptNameInput.style.display = "block";
    declineNameInput.style.display = "none";
    username.style.outline = "1px solid #98E37E";
    isNameValid = true;
  }

  // function which checks if user's name and surname input values are valid
  surname.addEventListener("input", function () {
    const counter = surname.value.replace(/[^ა-ჰ]/g, "").length;
    let regExp = /^[\u10A0-\u10FF]+$/;
    localStorage.setItem("surname", surname.value);
    surnameLive.textContent = surname.value;
    if (counter < 2 || !regExp.test(this.value)) {
      declineSurnameInput.style.display = "block";
      acceptSurnameInput.style.display = "none";
      surname.style.outline = "1px solid #EF5050";
      isSurnameValid = false;
    } else {
      acceptSurnameInput.style.display = "block";
      declineSurnameInput.style.display = "none";
      surname.style.outline = "1px solid #98E37E";
      isSurnameValid = true;
    }
  });
  if (localStorage.getItem("surname")) {
    surname.value = localStorage.getItem("surname");
    surnameLive.textContent = surname.value;
  }
  const counterSurname = surname.value.replace(/[^ა-ჰ]/g, "").length;
  let regExpSurname = /^[\u10A0-\u10FF]+$/;
  if (counterSurname < 2 || !regExpSurname.test(surname.value)) {
    declineSurnameInput.style.display = "block";
    acceptSurnameInput.style.display = "none";
    surname.style.outline = "1px solid #EF5050";
    isSurnameValid = false;
  } else {
    acceptSurnameInput.style.display = "block";
    declineSurnameInput.style.display = "none";
    surname.style.outline = "1px solid #98E37E";
    isSurnameValid = true;
  }
  // display email on resume
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

  // function which checks if email is valid
  const validateEmail = function (input) {
    const emailValidation = /^[a-zA-Z0-9._%+-]+@redberry.ge$/;
    return emailValidation.test(input.value);
  };
  emailInput.addEventListener("input", function () {
    if (!validateEmail(this)) {
      declineEmailInput.style.display = "block";
      acceptEmailInput.style.display = "none";
      emailInput.style.outline = "1px solid #EF5050";
      isEmailValid = false;
    } else {
      acceptEmailInput.style.display = "block";
      declineEmailInput.style.display = "none";
      emailInput.style.outline = "1px solid #98E37E";
      isEmailValid = true;
    }
  });
  if (!validateEmail(emailInput)) {
    declineEmailInput.style.display = "block";
    acceptEmailInput.style.display = "none";
    emailInput.style.outline = "1px solid #EF5050";
    isEmailValid = false;
  } else {
    acceptEmailInput.style.display = "block";
    declineEmailInput.style.display = "none";
    emailInput.style.outline = "1px solid #98E37E";
    isEmailValid = true;
  }
  // check if mobile number is valid and display it on resume
  mobileNumInput.addEventListener("input", function () {
    localStorage.setItem("mobileNumber", mobileNumInput.value);
    mobileNumberOutput.textContent = mobileNumInput.value;
    telephoneIcon.style.display = "block";
    if (mobileNumInput.value.length === 0) {
      telephoneIcon.style.display = "none";
    }
  });
  if (localStorage.getItem("mobileNumber")) {
    mobileNumInput.value = localStorage.getItem("mobileNumber");
    mobileNumberOutput.textContent = mobileNumInput.value;
    telephoneIcon.style.display = "block";
  }
  mobileNumInput.addEventListener("input", function () {
    if (this.value.length !== 13 || !this.value.startsWith("+995")) {
      declineNumberInput.style.display = "block";
      acceptNumberInput.style.display = "none";
      mobileNumInput.style.outline = "1px solid #EF5050";
      isNumberValid = false;
    } else {
      declineNumberInput.style.display = "none";
      acceptNumberInput.style.display = "block";
      mobileNumInput.style.outline = "1px solid #98E37E";
      isNumberValid = true;
    }
  });
  if (
    mobileNumInput.value.length !== 13 ||
    !mobileNumInput.value.startsWith("+995")
  ) {
    declineNumberInput.style.display = "block";
    acceptNumberInput.style.display = "none";
    mobileNumInput.style.outline = "1px solid #EF5050";
    isNumberValid = false;
  } else {
    declineNumberInput.style.display = "none";
    acceptNumberInput.style.display = "block";
    mobileNumInput.style.outline = "1px solid #98E37E";
    isNumberValid = true;
  }
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
  displayAboutPerson();
  if (isEmailValid && isNameValid && isNumberValid && isSurnameValid) {
    nextPage.href = "experience.html";
  } else {
    nextPage.href = "#";
  }
} else if (location.pathname === "/redberry-project/experience.html") {
  // resume info variables
  const liveUsername = document.querySelector(".live-name");
  const surnameLive = document.querySelector(".live-surname");
  const aboutPersonLive = document.querySelector(
    ".about-person-description-live"
  );
  const aboutPersonHeading = document.querySelector(
    ".about-person-heading-live"
  );
  const telephoneIcon = document.querySelector(".phone-icon");
  const mobileNumberOutput = document.querySelector(".number");
  const emailOutput = document.querySelector(".email-info");
  const emailIcon = document.querySelector(".email-icon");
  const describePosition = document.querySelector(".position");
  const employer = document.querySelector(".employer-input");
  const describePositionAccept = document.querySelector(
    ".position-accept-icon"
  );
  const describePositionDecline = document.querySelector(
    ".position-decline-icon"
  );
  const liveExperienceHeading = document.querySelector(
    ".experience-heading-live"
  );
  const livePosition = document.querySelector(".position-live");
  const liveEmployer = document.querySelector(".employer-live");
  const liveDate = document.querySelector(".date-live");
  const describeEmployerAccept = document.querySelector(
    ".employer-accept-icon"
  );
  const describeEmployerDecline = document.querySelector(
    ".employer-decline-icon"
  );
  const startDate = document.querySelector(".start-date-input");
  const endDate = document.querySelector(".end-date-input");
  const descriptionInput = document.querySelector(".description-input");
  const descriptionLive = document.querySelector(
    ".experience-description-live"
  );
  //variables which checks user's inputs and if user can go on next page
  let isPositionValid;
  let isEmployerValid;
  let isDateValid;
  //first input validation and live reload
  describePosition.addEventListener("input", function () {
    livePosition.textContent = describePosition.value;
    const letterCount = livePosition.textContent.replace(
      /[^a-zA-Z, ა-ჰ, 0-9]/g,
      ""
    ).length;
    if (letterCount !== 0) {
      liveExperienceHeading.textContent = "გამოცდილება";
      livePosition.textContent = describePosition.value;
    } else {
      liveExperienceHeading.textContent = "";
    }
    localStorage.setItem("Position", describePosition.value);
    if (describePosition.value.length < 2) {
      describePositionDecline.style.display = "block";
      describePositionAccept.style.display = "none";
      describePosition.style.outline = "1px solid #EF5050";
      isPositionValid = false;
    } else {
      describePositionDecline.style.display = "none";
      describePositionAccept.style.display = "block";
      describePosition.style.outline = "1px solid #98E37E";
      isPositionValid = true;
    }
  });
  if (localStorage.getItem("Position")) {
    liveExperienceHeading.textContent = "გამოცდილება";
    describePosition.value = localStorage.getItem("Position");
    livePosition.textContent = localStorage.getItem("Position");
  }
  if (describePosition.value.length < 2) {
    describePositionDecline.style.display = "block";
    describePositionAccept.style.display = "none";
    describePosition.style.outline = "1px solid #EF5050";
    isPositionValid = false;
  } else {
    describePositionDecline.style.display = "none";
    describePositionAccept.style.display = "block";
    describePosition.style.outline = "1px solid #98E37E";
    isPositionValid = true;
  }

  //second input validation and live reload
  employer.addEventListener("input", function () {
    liveEmployer.textContent = employer.value;
    const letterCount = liveEmployer.textContent.replace(
      /[^a-zA-Z, ა-ჰ, 0-9]/g,
      ""
    ).length;
    if (letterCount !== 0) {
      liveEmployer.textContent = employer.value;
      livePosition.textContent = `${localStorage.getItem("Position")},`;
    } else {
      livePosition.textContent = localStorage.getItem("Position");
    }
    localStorage.setItem("Employer", employer.value);
    if (employer.value.length < 2) {
      describeEmployerDecline.style.display = "block";
      describeEmployerAccept.style.display = "none";
      employer.style.outline = "1px solid #EF5050";
      isEmployerValid = false;
    } else {
      describeEmployerDecline.style.display = "none";
      describeEmployerAccept.style.display = "block";
      employer.style.outline = "1px solid #98E37E";
      isEmployerValid = true;
    }
  });
  if (localStorage.getItem("Employer")) {
    employer.value = localStorage.getItem("Employer");
    liveEmployer.textContent = localStorage.getItem("Employer");
    livePosition.textContent = `${localStorage.getItem("Position")},`;
  }
  if (employer.value.length < 2) {
    describeEmployerDecline.style.display = "block";
    describeEmployerAccept.style.display = "none";
    employer.style.outline = "1px solid #EF5050";
    isEmployerValid = false;
  } else {
    describeEmployerDecline.style.display = "none";
    describeEmployerAccept.style.display = "block";
    employer.style.outline = "1px solid #98E37E";
    isEmployerValid = true;
  }
  // date
  let startdatetemp;
  startDate.addEventListener("input", function () {
    liveDate.textContent = startDate.value;
    startdatetemp = startDate.value;
    localStorage.setItem("startDate", startdatetemp);
    if (startDate.value > endDate.value) {
      nextPageLink.href = "javascript:location.reload()";
      startDate.style.outline = "1px solid #EF5050";
      endDate.style.outline = "1px solid #EF5050";
    } else {
      nextPageLink.href = "education.html";
      startDate.style.outline = "1px solid #98E37E";
      endDate.style.outline = "1px solid #98E37E";
    }
    console.log(isDateValid);
  });
  endDate.addEventListener("input", function () {
    localStorage.setItem("endDate", endDate.value);
    liveDate.textContent = `${startDate.value} - ${endDate.value}`;
    if (startDate.value > endDate.value) {
      startDate.style.outline = "1px solid #EF5050";
      endDate.style.outline = "1px solid #EF5050";
      nextPageLink.href = "javascript:location.reload()";
    } else {
      startDate.style.outline = "1px solid #98E37E";
      endDate.style.outline = "1px solid #98E37E";
      nextPageLink.href = "education.html";
    }
  });
  if (localStorage.getItem("startDate")) {
    startDate.value = localStorage.getItem("startDate");
    liveDate.textContent = startDate.value;
  }
  if (localStorage.getItem("endDate")) {
    endDate.value = localStorage.getItem("endDate");
    liveDate.textContent = `${startDate.value} - ${endDate.value}`;
  }
  if (startDate.value > endDate.value) {
    startDate.style.outline = "1px solid #EF5050";
    endDate.style.outline = "1px solid #EF5050";
    isDateValid = false;
  } else {
    startDate.style.outline = "1px solid #98E37E";
    endDate.style.outline = "1px solid #98E37E";
    isDateValid = true;
  }
  descriptionInput.addEventListener("input", function () {
    localStorage.setItem("experienceDescription", descriptionInput.value);
    descriptionLive.textContent = descriptionInput.value;
  });
  if (localStorage.getItem("experienceDescription")) {
    descriptionInput.value = localStorage.getItem("experienceDescription");
    descriptionLive.textContent = descriptionInput.value;
  }
  //display user's information which was inputed from the first page
  liveUsername.textContent = localStorage.getItem("Username");
  surnameLive.textContent = localStorage.getItem("surname");
  if (localStorage.getItem("aboutPerson")) {
    aboutPersonLive.textContent = localStorage.getItem("aboutPerson");
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
  mobileNumberOutput.textContent = localStorage.getItem("mobileNumber");
  telephoneIcon.style.display = "block";
  emailOutput.textContent = localStorage.getItem("userEmail");
  emailIcon.style.display = "block";
  const nextPageLink = document.querySelector(".next-page-link");
  if (isDateValid && isEmployerValid && isPositionValid) {
    nextPageLink.href = "education.html";
  } else {
    nextPageLink.href = "#";
  }
}
