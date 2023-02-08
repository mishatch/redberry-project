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

  // function which checks if user's name and surname input values are valid
  const validationGeoLetter = function (inputValue, accept, decline) {
    inputValue.addEventListener("input", function () {
      const counter = inputValue.value.replace(/[^ა-ჰ]/g, "").length;
      let regExp = /^[\u10A0-\u10FF]+$/;
      localStorage.setItem("regExpName", !regExp.test(this.value));
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
  validationGeoLetter(username, acceptNameInput, declineNameInput);
  validationGeoLetter(surname, acceptSurnameInput, declineSurnameInput);
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
    } else {
      acceptEmailInput.style.display = "block";
      declineEmailInput.style.display = "none";
      emailInput.style.outline = "1px solid #98E37E";
    }
  });

  // check if mobile number is valid and display it on resume
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
  mobileNumInput.addEventListener("input", function () {
    console.log(mobileNumInput.value);
    if (this.value.length !== 13 || !this.value.startsWith("+995")) {
      declineNumberInput.style.display = "block";
      acceptNumberInput.style.display = "none";
      mobileNumInput.style.outline = "1px solid #EF5050";
    } else {
      declineNumberInput.style.display = "none";
      acceptNumberInput.style.display = "block";
      mobileNumInput.style.outline = "1px solid #98E37E";
    }
  });

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
  const experienceDescriptionLive = document.querySelector(
    ".experience-description-live"
  );
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
    } else {
      describePositionDecline.style.display = "none";
      describePositionAccept.style.display = "block";
      describePosition.style.outline = "1px solid #98E37E";
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
  } else {
    describePositionDecline.style.display = "none";
    describePositionAccept.style.display = "block";
    describePosition.style.outline = "1px solid #98E37E";
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
    } else {
      describeEmployerDecline.style.display = "none";
      describeEmployerAccept.style.display = "block";
      employer.style.outline = "1px solid #98E37E";
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
  } else {
    describeEmployerDecline.style.display = "none";
    describeEmployerAccept.style.display = "block";
    employer.style.outline = "1px solid #98E37E";
  }
  // date
  let startdatetemp;
  startDate.addEventListener("input", function () {
    liveDate.textContent = startDate.value;
    startdatetemp = startDate.value;
    localStorage.setItem("startDate", startdatetemp);
  });
  endDate.addEventListener("input", function () {
    localStorage.setItem("endDate", endDate.value);
    liveDate.textContent = `${startDate.value} - ${endDate.value}`;
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
  } else {
    startDate.style.outline = "1px solid #98E37E";
    endDate.style.outline = "1px solid #98E37E";
  }
  //
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
}
