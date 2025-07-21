let alters = ["온결", "선율"];
let current = 0;

function switchAlter() {
  current = (current + 1) % alters.length;
  const alterText = alters[current];
  document.getElementById("current-alter").textContent = alterText;

  const castleLink = document.getElementById("castle-link");
  if (alterText === "선율") {
    castleLink.style.display = "inline-block";
  } else {
    castleLink.style.display = "none";
  }
}
