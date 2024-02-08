//create magic board -rows
const createRows = () => {
  let board = document.getElementById("game");
  let mainCol = document.createElement("div");
  mainCol.className =
    "col-12 d-flex justify-content-center justify-content-lg-start eachRow";

  let squaresDiv = document.createElement("div");
  squaresDiv.className = "d-flex justify-content-evenly align-items-center";

  for (let i = 0; i < 4; i++) {
    let eachSquare = document.createElement("div");
    eachSquare.className = "squareGame";
    squaresDiv.appendChild(eachSquare);
  }

  let circlesDiv = document.createElement("div");
  circlesDiv.className = "d-flex justify-content-evenly align-items-center";

  for (let i = 0; i < 4; i++) {
    let eachCircle = document.createElement("div");
    eachCircle.className = "circle m-1";
    circlesDiv.appendChild(eachCircle);
  }
  mainCol.appendChild(squaresDiv);
  mainCol.appendChild(circlesDiv);
  board.appendChild(mainCol);
};

// -myriad of -- rows depends on the level 4 for beginner 5 for intermediate 6 for advanced//**
let myriadOf = 0;

const myriadOfRows = () => {
  if (selectedLevel === "beginnerRows") {
    for (let i = 0; i < 10; i++) {
      createRows();
    }
    myriadOf = 10;
  } else if (selectedLevel === "intermediateRows") {
    for (let i = 0; i < 8; i++) {
      createRows();
    }
    myriadOf = 8;
  } else {
    for (let i = 0; i < 6; i++) {
      createRows();
    }
    myriadOf = 6;
  }
  return myriadOf;
};

myriadOfRows();

// -rows & squares IDS /
let rows = document.getElementsByClassName("eachRow");
let arrayRows = Array.from(rows);

const addIdToRows = () => {
  for (let i = 0; i < arrayRows.lenght; i++) {
    let element = arrayRows[i];
    element.id = `eachRows{1}`;
  }
};

//variable called j to a value of 0 = Being used as a counter and track the groups squres
//(0 means first group)**
const addIdToSquares = () => {
  let squares = document.getElementsByClassName("squareGame");
  let arraySquares = Array.from(squares);

  for (let j = 0; j < myriadOf; j++) {
    for (let i = 0; i < 4; i++) {
      let index = j * 4 + i;
      let element = arraySquares[index];
      element.id = `row${j}-square${i}`;
    }
  }
};

const addIdToCircles = () => {
  let circles = document.getElementsByClassName("circle");
  let arrayCircles = Array.from(circles);

  for (let j = 0; j < myriadOf; j++) {
    for (let i = 0; i < 4; i++) {
      let index = j * 4 + i;
      let element = arrayCircles[index];
      element.id = `row${j}-circle${i}`;
    }
  }
};

addIdToRows();
addIdToSquares();
addIdToCircles();

/// -chosen level

const chosenLevel = () => {
  let level = document.getElementById("level");
  let p = document.createElement("p");

  if (selectedLevel == "beginnerRows") {
    p.innerHTML = "LEVEL : beginner";
    level.appendChild(p);
  } else if (selectedLevel == "intermediateRows") {
    p.innerHTML = "LEVEL : intermediate";
    level.appendChild(p);
  } else {
    p.innerHTML = "LEVEL : advanced";
    level.appendChild(p);
  }
};
chosenLevel();

//colors -to be choosen
const colourMiniSquares = () => {
  for (i = 0; i < arrayChosenColours.length; i++) {
    let miniSquare = document.getElementById(`${i}`);
    miniSquare.style.backgroundColor = arrayChosenColours[i];
  }
};

colourMiniSquares();

//random array ANY-
let randomAnswerArray = [];

const correctAnswer = () => {
  for (i = 0; i < 4; i++) {
    random = Math.floor(Math.random() * arrayChosenColours.length);
    randomAnswerArray.push(arrayChosenColours[random]);
  }
};

correctAnswer();

//to paint squares with the guessed colours

let chosenColoursInRow = [];

//click mini sqaure add array colour
const addColour = (id) => {
  let colour = arrayChosenColours[id];
  chosenColoursInRow.push(colour);
  //console.log(chosenColoursInRow);
  paintSquares();
};

// paint the squares using the index of the array

let j = 0;
let squareIwantToPaint;

const paintSquares = () => {
  for (let i = 0; i < 4; i++) {
    squareIwantToPaint = document.getElementById(`row${j}-square${i}`);
    let colourChosen = chosenColoursInRow[i];
    squareIwantToPaint.style.backgroundColor = colourChosen;
  }
};

const removeFromArray = () => {
  //console.log(chosenColoursInRow);
  index = chosenColoursInRow.length - 1;
  chosenColoursInRow.pop();

  if (chosenColoursInRow.length <= 4) {
    squareIwantToPaint = document.getElementById(`row${j}-square${index}`);
    squareIwantToPaint.style.backgroundColor = "";
  }
};

//compare replies -colours
let arrayCircles = [];

const compareColours = () => {
  if (chosenColoursInRow.length >= 4) {
    arrayCircles = chosenColoursInRow.map((element, index) => {
      if (element === randomAnswerArray[index]) {
        return "rgb(255,255,0)";
      } else if (randomAnswerArray.includes(element)) {
        return "rgb(255,0,255)";
      } else {
        return "";
      }
    });
    paintCircles();
    check();
  }
};

// draw circles

const paintCircles = () => {
  for (let i = 0; i < 4; i++) {
    let circleIwantToPaint = document.getElementById(`row${j}-circle${i}`);
    let paintAnswer = arrayCircles[i];
    circleIwantToPaint.style.backgroundColor = paintAnswer;
  }
};

const check = (showWinnerPage) => {
  if (j < myriadOf - 1) {
    j++;
    chosenColoursInRow.length = "";
  } else {
    sessionStorage.setItem("result", "loser");
    window.location.href = "./result.html";
  }
};

const winner = (showWinnerPage) => {
  let stringArrayCircles = arrayCircles.toString();
  let correctAnswer =
    "rgb(255, 255, 0),rgb(255, 255, 0),rgb(255, 255, 0),rgb(255, 255, 0)";

  if (stringArrayCircles === correctAnswer) {
    sessionStorage.setItem("result", "winner");
    window.location.href = "./results";
  }
};

document.getElementById("check").addEventListener("click", function (e) {
  check();
  console.log("check");
});

document.getElementById("removeButton").addEventListener("click", function (e) {
  console.log("removeButton");
  removeFromArray();
});
