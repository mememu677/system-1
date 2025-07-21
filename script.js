let alters = ["OnGyeol", "SeonYul"];
let current = 0;

function applyAlterStyle() {
  const body = document.body;
  const alter = alters[current];
  const alterSpan = document.getElementById("current-alter");
  const castleLink = document.getElementById("castle-link");

  if (alter === "SeonYul") {
    body.classList.remove("ongyeol");
    body.classList.add("seonyul");
    alterSpan.textContent = "SeonYul";
    castleLink.style.display = "inline-block";
  } else {
    body.classList.remove("seonyul");
    body.classList.add("ongyeol");
    alterSpan.textContent = "OnGyeol";
    castleLink.style.display = "none";
  }
}
window.onload = applyAlterStyle;

function switchAlter() {
  current = (current + 1) % alters.length;
  applyAlterStyle();
}
