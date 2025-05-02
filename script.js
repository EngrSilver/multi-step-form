const allBtn = document.querySelectorAll(".btn");
const allRightSection = document.querySelectorAll(".right-section");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const Userinfoform = document.getElementById("Userinfo");
const UsernameInput = document.getElementById("name");
const nameLabel = document.querySelector(".name-Label");
const UserEmail = document.getElementById("email");
const emailLabel = document.querySelector(".email-Label");
const UserPhone = document.getElementById("phone");
const phoneLabel = document.querySelector(".phone-Label");

// sets default active class on the first button and first section
allRightSection[0].classList.remove("hidden");
allBtn[0].classList.add("currentpage");

// changes the active class on the button when clicked
function addAtiveClass() {
  allBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      allBtn.forEach((b) => b.classList.remove("currentpage"));
      this.classList.add("currentpage");
    });
  });
}
addAtiveClass();

// shows the section when the button is clicked
// and hides the other sections
function showSection() {
  allBtn.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      allRightSection.forEach((section) => {
        section.classList.add("hidden");
      });
      allRightSection[i].classList.remove("hidden");
    });
  });
}
showSection();

// validates the form inputs and shows the next section
let currentSection = 0;
nextBtn.addEventListener("click", () => {
  console.log(UserPhone.value);
  console.log(currentSection);
  //   const name = UsernameInput.value;
  //   const nameRegex = /^[a-zA-Z]{2,}(?: [a-zA-Z]{1,})*$/;

  //   if (!nameRegex.test(name)) {
  //     nameLabel.classList.remove("hidden");
  //     setTimeout(() => {
  //       nameLabel.classList.add("hidden");
  //     }, 3000);
  //   }

  //   const email = UserEmail.value;
  //   const emailRegex = /^[^\@]+@[^\s@]+\.[^\s@]+$/;

  //   if (!emailRegex.test(email)) {
  //     emailLabel.classList.remove("hidden");
  //     setTimeout(() => {
  //       emailLabel.classList.add("hidden");
  //     }, 3000);
  //   }

  //   const phone = UserPhone.value;
  //   const phoneRegex =
  //     /^(?:\+234|234|0)(70[1-9]|80[2-9]|81[0-9]|90[1-9]|91[0-9]|701|702|703|704|705|706|707|708|709)\d{7}$/;

  //   if (!phoneRegex.test(phone)) {
  //     phoneLabel.classList.remove("hidden");
  //     setTimeout(() => {
  //       phoneLabel.classList.add("hidden");
  //     }, 3000);
  //   }

  //   if (nameRegex.test(name) & emailRegex.test(email) & phoneRegex.test(phone)) {
  allRightSection.forEach((section) => {
    section.classList.add("hidden");
  });
  allBtn.forEach((btn) => {
    btn.classList.remove("currentpage");
  });

  currentSection = (currentSection + 1) % allRightSection.length;

  allBtn[currentSection].classList.add("currentpage");
  allRightSection[currentSection].classList.remove("hidden");
  if (currentSection > 0) {
    prevBtn.classList.remove("hidden");
  }
  if (currentSection === 0) {
    prevBtn.classList.add("hidden");
  }
  if (currentSection > 2) {
    nextBtn.textContent = "submit";
  } else {
    nextBtn.textContent = "Next Step";
    // }
  }
});

// goes back to the previous section when the previous button is clicked
prevBtn.addEventListener("click", () => {
  allRightSection.forEach((section) => {
    section.classList.add("hidden");
  });
  allBtn.forEach((btn) => {
    btn.classList.remove("currentpage");
  });

  currentSection = (currentSection - 1) % allRightSection.length;

  allBtn[currentSection].classList.add("currentpage");
  allRightSection[currentSection].classList.remove("hidden");

  if (currentSection === 0) {
    prevBtn.classList.add("hidden");
  }
  if (currentSection < 2) {
    nextBtn.textContent = "Next Step";
  }
});
