/**
 * get  name in from an special place called sessionStorage
 */
const saveName = () => {
  let name = document.getElementById("contenderName").value;

  if (name == "") {
    sessionStorage.setItem("name", "Contender 1");
  } else {
    sessionStorage.setItem("name", name);
  }
};

let name = sessionStorage.getItem("contenderName");

/**
 * To Save Level
 */
const saveLevelBeginner = () => {
  sessionStorage.setItem("level", "beginnerRows");
  window.location.href = "./pages/colours.html";
};

const saveLevelIntermediate = () => {
  sessionStorage.setItem("level", "intermediateRows");
  window.location.href = "./pages/colours.html";
};

const saveLevelAdvanced = () => {
  sessionStorage.setItem("level", "advancedRows");
  window.location.href = "./pages/coulours.html";
};

/**
 * objective- code
 */

let selectedLevel = sessionStorage.getItem("level");
let selected = document.getElementById(selectedLevel);

window.onload = (event) => {
  selected.style.display = "flex";
};

/**
 * picking colours
 */

window.addEventListener("load", () => startup());

let colorPicker = document.getElementsByName("colorpicker");
let arrayColorPicker = Array.from(colorPicker);
let objectChosenColours = {};
let arrayChosenColours = [];

/**
 * this function startup gatter colour pickers that starts any color - same array
 */

const startup = () => {
  arrayColorPicker.map((element) => {
    element.value = "#8a2be2";
    element.addEventListener("input", (event) => updateSquare(event, element));
    element.select();
  });
};

/**
 * this function paint squares into the game with the selected colors
 */

const updateSquare = (event, element) => {
  let colorSquare = document.getElementById(`square${element.id}`);
  colorSquare.style.backgroundcolor = event.target.value;
  let color = event.target.value;

  objectChosenColours[element.id] = color;
};

/**
 * converts a JavaScript value (colors chosen colours (box selection) from selected page/colors.html to gamer.html
 * and cconvert to  JSON string. convert colors to text - with Json-stringify then Json parse to use it on the game.
 */

const saveChosenColours = () => {
  sessionStorage.setItem("chosenColours", JSON.stringify(objectChosenColours));
  window.location.href = "./gamer.html";
};

let chosenColours = JSON.parse(sessionStorage.getItem("chosenColours"));

const changeColoursToArray = () => {
  for (const property in chosenColours) {
    arrayChosenColours.push(chosenColours[property]);
  }
};
changeColoursToArray();

/**
 * saving colors in sessionStorage through an static method
 */
