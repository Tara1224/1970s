window.addEventListener("DOMContentLoaded", init, false);

function init() {
  var button = document.getElementsByTagName("button")[0];

  button.addEventListener("click", toggleInfo, false);
}

function toggleInfo() {
  var designText = document.getElementById("designText");

  if (designText.style.display === "none") {
    designText.style.display = "block";
  } else {
    designText.style.display = "none";
  }
}
