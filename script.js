let theme_button = document.querySelector(".theme_btn");
let bg_circle = document.querySelector(".circle");
var user_Input = document.getElementById("input");
var converted_output = document.querySelector("#output");
var error_msg = document.querySelector(".error_msg");

theme_button.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
  theme_button.classList.toggle("active");
  bg_circle.classList.toggle("active");
});

// Binary To Decimal

function binToDec() {
  var input_value = user_Input.value;
  var input_length = user_Input.value.length;
  let pwr = input_length - 1;
  let i;
  let result = 0;
  for (i = 0; i <= input_length; i++) {
    if (pwr < 0) {
      break;
    }
    result = input_value[i] * 2 ** pwr + result;
    pwr = pwr - 1;
    if (i + 1 == input_length) {
      converted_output.value = result;
    }
  }
}

// Binary Input

user_Input.addEventListener("keydown", function (event) {
  // Allow '0', '1', backspace, and keyboard shortcuts (Ctrl+A, Ctrl+C, Ctrl+V)
  if (
    !(
      event.key === "0" ||
      event.key === "1" ||
      event.key === "Backspace" ||
      (event.ctrlKey &&
        (event.key === "a" || event.key === "c" || event.key === "v"))
    )
  ) {
    event.preventDefault();
    // console.error("Enter Correct Value");
    user_Input.classList.add("error");
    error_msg.classList.add("active");
  }
});

user_Input.addEventListener("blur", function () {
  // Remove any non-binary characters when focus is lost
  user_Input.value = user_Input.value.replace(/[^01]/g, "");

  // Check if there are non-binary characters
  if (user_Input.value.match(/[^01]/)) {
    console.error("Enter Correct Value");
    user_Input.classList.add("error");
    error_msg.classList.add("active");
    user_Input.focus();
  } else {
    // If only binary characters are present, remove the error class
    user_Input.classList.remove("error");
    error_msg.classList.add("active");
  }
});

user_Input.addEventListener("focusout", function () {
  // Remove the error class when the user focuses out and the input is correct
  if (!user_Input.value.match(/[^01]/)) {
    user_Input.classList.remove("error");
  }
});
