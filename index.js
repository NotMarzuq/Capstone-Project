var screen = document.getElementById("Screen");
var buttons = document.querySelectorAll("button");
//console.log(buttons)
var buttonvalue = "";
for (item of buttons) {
  //console.log(item)
  item.addEventListener("click", (e) => {
    buttontext = e.target.innerText;
    console.log(buttontext);
    if (buttontext === "X") {
      buttontext = "*";
      buttonvalue += buttontext;
      screen.value = buttonvalue;
    } else if (buttontext === "C") {
      buttonvalue = "";
      screen.value = buttonvalue;
    } else if (buttontext === "=") {
      screen.value = eval(buttonvalue);
    } else {
      buttonvalue += buttontext;
      screen.value = buttonvalue;
    }
  });
}
