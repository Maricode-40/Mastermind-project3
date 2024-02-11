// players name
const winnerName = () => {
  let nameWinner = document.getElementById("nameWinner");
  nameWinner.innerHTML = `${sessionStorage
    .getItem("name")
    .toUpperCase()} MASTER PLAYER!!`;

  let nameLoser = document.getElementById("nameLoser");
  nameLoser.innerHTML = `${sessionStorage
    .getItem("name")
    .toUpperCase()}  DO NOT WORRY & TRY AGAIN!! `;
};

// messages
const showWinnerPage = () => {
  let result = sessionStorage.getItem("result");
  let resultPage = document.getElementById(result);
  resultPage.style.display = "flex";
};

winnerName();
showWinnerPage();
