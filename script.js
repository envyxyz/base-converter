let theme_button = document.querySelector(".theme_btn");
let bg_circle = document.querySelector(".circle");
var user_Input = document.getElementById("input");
var converted_output = document.querySelector("#output");
var option_in = document.querySelector("#selector_in");
var option_out = document.querySelector("#selector_out");
let invert_integer = 1;

theme_button.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
  theme_button.classList.toggle("active");
  bg_circle.classList.toggle("active");
});

// Binary To Decimal

function conversion() {
  if (option_in.value == "Binary") {
    binaryToDecimal();
  } else if (option_in.value == "Decimal") {
    console.log("NIGGA WANTS TO CONVERT FROM DECIMAL TO BINARY");
  }
}

function binaryToDecimal() {
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
  user_Input.addEventListener("keydown", function (event) {
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
      user_Input.classList.add("error");
    }
  });

  user_Input.addEventListener("blur", function () {
    user_Input.value = user_Input.value.replace(/[^01]/g, "");

    if (user_Input.value.match(/[^01]/)) {
      console.error("Enter Correct Value");
      user_Input.classList.add("error");
      user_Input.focus();
    } else {
      user_Input.classList.remove("error");
    }
  });

  user_Input.addEventListener("focusout", function () {
    if (!user_Input.value.match(/[^01]/)) {
      user_Input.classList.remove("error");
    }
  });
}

function invert() {
  invert_integer++;
  if (invert_integer % 2 == 0) {
    option_in.value = "Decimal";
    option_out.value = "Binary";
  } else {
    option_in.value = "Binary";
    option_out.value = "Decimal";
  }
  converted_output.value = "";
  user_Input.value = "";

  console.log(invert_integer);
}
