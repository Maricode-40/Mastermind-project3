function saveButton() {
  var colorpicker = document.getElementsByName("colorpicker");
  console.log(colorpicker);
}

document.getElementById("saveButton").addEventListener("click", function (e) {
  saveButton();
});

//picking colors
window.addEventListener("load", () => startup());

let colorPicker = document.getElementsByClassName("colorPicker");
let arrayColorPicker = Array.from(colorPicker);
let objectChosenColours = {};
let arrayChosenColours = [];

// FUNCTION called startup-gatter colour pickers starts any color -same  array

const startup = () => {
  arrayColorPicker.map((element) => {
    element.value = "#FFFF00";
    element.addEventListener("input", (event) => updateSquare(event, element));
    element.select();
  });
};
