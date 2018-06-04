let rhinoInfo = document.getElementById("rhino-info");
let tigerInfo = document.getElementById("tiger-info");
let dolphinInfo = document.getElementById("dolphin-info");

let rhinoButton = document.getElementById("rhino-button");
let tigerButton = document.getElementById("tiger-button");
let dolphinButton = document.getElementById("dolphin-button");

rhinoInfo.style.display = "none";
tigerInfo.style.display = "none";
dolphinInfo.style.display = "none";

rhinoButton.addEventListener("click", event => {
  tigerInfo.style.display = "none";
  dolphinInfo.style.display = "none";
  if (rhinoInfo.style.display === "none") {
    rhinoInfo.style.display = "";
  } else {
    rhinoInfo.style.display = "none";
  }
});

tigerButton.addEventListener("click", event => {
  rhinoInfo.style.display = "none";
  dolphinInfo.style.display = "none";
  if (tigerInfo.style.display === "none") {
    tigerInfo.style.display = "";
  } else {
    tigerInfo.style.display = "none";
  }
});

dolphinButton.addEventListener("click", event => {
  tigerInfo.style.display = "none";
  rhinoInfo.style.display = "none";
  if (dolphinInfo.style.display === "none") {
    dolphinInfo.style.display = "";
  } else {
    dolphinInfo.style.display = "none";
  }
});
