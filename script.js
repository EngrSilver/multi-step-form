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
  allBtn.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      allBtn.forEach((b) => b.classList.remove("currentpage"));
      this.classList.add("currentpage");
      nextBtn.style.backgroundColor = "blue";
      rightSection5.classList.add("hidden");
      if (i === 3) {
        nextBtn.style.backgroundColor = "green";
        nextBtn.textContent = "Confirm";
      }
    });
  });
}
addAtiveClass();

// shows the section when the button is clicked
// and hides the other sections
function showSection() {
  allBtn.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      nextBtn.classList.remove("hidden");
      prevBtn.classList.remove("hidden");
      if (i === 0) {
        prevBtn.classList.add("hidden");
      }
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
const rightSection5 = document.querySelector(".right-section5");
const rightSection1 = document.querySelector(".right-section1");
const leftSection = document.querySelector(".left-section");

nextBtn.addEventListener("click", () => {
  const name = UsernameInput.value;
  const nameRegex = /^[a-zA-Z]{2,}(?: [a-zA-Z]{1,})*$/;

  if (!nameRegex.test(name)) {
    nameLabel.classList.remove("hidden");
    setTimeout(() => {
      nameLabel.classList.add("hidden");
    }, 3088800);
  }

  const email = UserEmail.value;
  const emailRegex = /^[^\@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailLabel.classList.remove("hidden");
    setTimeout(() => {
      emailLabel.classList.add("hidden");
    }, 30576787600);
  }

  const phone = UserPhone.value;
  const phoneRegex =
    /^(?:\+234|234|0)(70[1-9]|80[2-9]|81[0-9]|90[1-9]|91[0-9]|701|702|703|704|705|706|707|708|709)\d{7}$/;

  if (!phoneRegex.test(phone)) {
    phoneLabel.classList.remove("hidden");
    setTimeout(() => {
      phoneLabel.classList.add("hidden");
    }, 365646000);
  }

  if (nameRegex.test(name) & emailRegex.test(email) & phoneRegex.test(phone)) {
    allRightSection.forEach((section, i) => {
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
      rightSection5.classList.add("hidden");
    }
    if (currentSection > 2) {
      nextBtn.style.backgroundColor = "green";
      nextBtn.textContent = "Confirm";
    }
    if (currentSection === 3) {
      nextBtn.addEventListener("click", () => {
        leftSection.classList.add("hidden");
        nextBtn.classList.add("hidden");
        prevBtn.classList.add("hidden");
        allRightSection[currentSection].classList.add("hidden");
        setTimeout(() => {
          rightSection5.classList.remove("hidden");
          rightSection5.style.display = "flex";
        }, 500);
        setTimeout(() => {
          rightSection5.classList.add("hidden");
          rightSection1.classList.remove("hidden");
          location.reload();
        }, 709709709700);
      });
      nextBtn.classList.remove("hidden");
      prevBtn.classList.remove("hidden");
    } else {
      nextBtn.textContent = "Next Step";
      nextBtn.style.backgroundColor = "blue";
    }
    console.log(currentSection);
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
  if (currentSection <= 2) {
    nextBtn.textContent = "Next Step";
    nextBtn.style.backgroundColor = "blue";
  }
});
// =======================Second Page==============================//

const AllPlans = document.querySelectorAll(".plan");
let price;
let planName;
const duration = document.querySelectorAll(".plan-duration");
let val = "";

const switcher = document.querySelector(".switcher");
const chosedPlan = document.querySelector(".chosed-plan");

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
    chosedPlan.textContent = `${planName} ${val}`;
  } else if (bulb.classList.contains("monyear")) {
    bulb.classList.remove("monyear");
    yearly.classList.remove("textofmonyear");
    monthly.classList.add("textofmonyear");
    duration.forEach((dura) => {
      dura.textContent = "mon";
    });
    val = "Monthly";
    chosedPlan.textContent = `${planName} ${val}`;
  }
  return val;
}
toggleAndSetDuration();
switcher.addEventListener("click", () => {
  val = toggleAndSetDuration();
});

AllPlans.forEach((plan) => {
  plan.addEventListener("click", function () {
    AllPlans.forEach((p) => p.classList.remove("selectedPlan"));
    this.classList.add("selectedPlan");
    price = this.getAttribute("data-price");
    planName = this.getAttribute("data-plan");

    console.log(val);

    const chosedPlanPrice = document.querySelector(".chosed-plan-price");
    chosedPlanPrice.textContent = `Price: $${price}`;
    chosedPlan.textContent = `${planName} ${val}`;
  });
});

// =====================================================//

// =======================Third Page==============================//
const allSection = document.querySelectorAll(".section");
const allFormCheckbox = document.querySelectorAll(".form-checkbox");
// const chosenAddDescAll = document.querySelectorAll(".chosen-add-desc");
const chosenAddAll = document.querySelectorAll(".chosen-add");
const allChosenSubscriptionPriceRate = document.querySelectorAll(
  ".chosen-subscription-price-rate"
);
const allAdPrice = document.querySelectorAll(".ad-price ");

let selectedAdds = [];
let selectedAddsPrice = [];
const allChosenSubscription = document.querySelectorAll(".chosen-Subscription");
const [firstSubscription, secondSubscription] = allChosenSubscription;
//
allSection.forEach((section, i) =>
  section.addEventListener("click", function () {
    if (this.classList.contains("selectedAdds")) {
      allFormCheckbox[i].checked = false;
      this.classList.remove("selectedAdds");
    } else {
      this.classList.add("selectedAdds");
      allFormCheckbox[i].checked = true;
      selectedAdds.push(chosenAddAll[i].textContent);
      selectedAddsPrice.push(allAdPrice[i].textContent);
    }

    const checkedCount = Array.from(allSection).filter((section) => {
      return section.classList.contains("selectedAdds");
    }).length;
    const notChecked = Array.from(allSection).filter((section) => {
      return !section.classList.contains("selectedAdds");
    });

    if (checkedCount === 2) {
      allSection.forEach((section) => {
        if (!section.classList.contains("selectedAdds")) {
          section.style.pointerEvents = "none";
        }
      });
    } else {
      allSection.forEach((section) => {
        section.style.pointerEvents = "auto";
      });
    }
    // =================================================

    if (selectedAdds.length > 2) {
      selectedAdds.shift();
    }
    if (firstSubscription) {
      firstSubscription.textContent = selectedAdds[0] || "";
    }
    if (secondSubscription) {
      secondSubscription.textContent = selectedAdds[1] || "";
    }
    if (selectedAddsPrice.length > 2) {
      selectedAddsPrice.shift();
    }
    const [firstAddPrice, secondAddPrice] = allChosenSubscriptionPriceRate;
    if (firstAddPrice) {
      firstAddPrice.textContent = selectedAddsPrice[0] || "";
    }
    if (secondAddPrice) {
      secondAddPrice.textContent = selectedAddsPrice[1] || "";
    }

    console.log(selectedAddsPrice);
    console.log(allChosenSubscriptionPriceRate);
    console.log(allAdPrice);
    console.log(selectedAdds);
    console.log(firstSubscription);
    console.log(secondSubscription);
    //==================================================================

    function parseAmount(str) {
      const m = str.match(/[-+]?\d+(\.\d+)?/);
      return m ? parseFloat(m[0]) : 0;
    }
    const allIncluded = document.querySelectorAll(".included");
    const total = Array.from(allIncluded).reduce((sum, el) => {
      return sum + parseAmount(el.textContent);
    }, 0);
    const totalCont = document.querySelector(".total-cont");
    totalCont.textContent = `$${total}`;
    console.log(total);

    // console.log(notChecked);
    // console.log(`${checkedCount}`);
  })
);
