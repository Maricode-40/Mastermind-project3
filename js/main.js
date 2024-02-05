// home page button
const button = document.querySelector(".gamerButtons");

button.addEventListener("click", function () {
  window.location.href = "/pages/index.html";
});

//save the name in an special place called sessionStorage -
const saveName = () => {
  let name = document.getElementById("contenderName").value;

  if (name == "") {
    sessionStorage.setItem("name", "Contender 1");
  } else {
    sessionStorage.setItem("name", name);
  }
};

let name = sessionStorage.getItem("contenderName");

// SAVE LEVEL
