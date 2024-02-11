//to select ...
function saveButton() {
  console.log(colorPicker);
  var colorPicker = document.getElementsByName("colorpicker");
}

document.getElementById("saveButton").addEventListener("click", function (e) {
  saveButton();
});
