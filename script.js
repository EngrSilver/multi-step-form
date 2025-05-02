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
// =======================Second Page==============================//

const AllPlans = document.querySelectorAll(".plan");
let price;
let planName;
const duration = document.querySelectorAll(".plan-duration");
let val = "";

const switcher = document.querySelector(".switcher");
function toggleAndSetDuration() {
  const monthly = document.querySelector(".monthly");
  const bulb = document.querySelector(".bulb");
  const yearly = document.querySelector(".yearly");

  if (!bulb.classList.contains("monyear")) {
    bulb.classList.add("monyear");
    yearly.classList.add("textofmonyear");
    monthly.classList.remove("textofmonyear");
    duration.forEach((dura) => {
      dura.textContent = "yr";
    });
    val = "Year";
  } else if (bulb.classList.contains("monyear")) {
    bulb.classList.remove("monyear");
    yearly.classList.remove("textofmonyear");
    monthly.classList.add("textofmonyear");
    duration.forEach((dura) => {
      dura.textContent = "mon";
    });
    val = "Monthly";
  }
  return val;
}

switcher.addEventListener("click", () => {
  toggleAndSetDuration();
});
AllPlans.forEach((plan) => {
  plan.addEventListener("click", function () {
    AllPlans.forEach((p) => p.classList.remove("selectedPlan"));
    this.classList.add("selectedPlan");
    price = this.getAttribute("data-price");
    planName = this.getAttribute("data-plan");

    const chosedPlan = document.querySelector(".chosed-plan");
    const chosedPlanPrice = document.querySelector(".chosed-plan-price");
    chosedPlan.textContent = `${planName} ${val}`;
    chosedPlanPrice.textContent = `Price: $${price}`;
  });
});

// changes the plan from monthly to yearly and vice versa
// const planChangeBtn = document.querySelector(".plan-change-btn");
// const planChangeText = document.querySelector(".plan-change-text");

// planChangeBtn.addEventListener("click", () => {
//   AllPlans.forEach((plan) => {
//     plan.classList.toggle("yearly-plan");
//   });
//   const chosedPlan = document.querySelector(".chosed-plan");
//   const chosedPlanPrice = document.querySelector(".chosed-plan-price");

//   if (planChangeText.textContent === "Monthly") {
//     planChangeText.textContent = "Yearly";
//     chosedPlanPrice.textContent = `Price: $${price * 10}`;
//     chosedPlan.textContent = `${planName} (yearly)`;
//   } else {
//     planChangeText.textContent = "Monthly";
//     chosedPlanPrice.textContent = `Price: $${price}`;
//     chosedPlan.textContent = `${planName} (monthly)`;
//   }
// });

// =======================Third Page==============================//

// =======================Fourth Page==============================//
