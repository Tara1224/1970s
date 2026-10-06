window.addEventListener("DOMContentLoaded", init, false);

function init() {
  var button = document.getElementById("infoButton");

  button.addEventListener("click", toggleInfo, false);

  const buttons = document.querySelectorAll(".toggle-button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const target = button.dataset.target;
      const feature = document.querySelector("." + target);

      feature.classList.toggle("on");
    });
  });
}

function toggleInfo() {
  var designText = document.getElementById("designText");

  if (designText.style.display === "none") {
    designText.style.display = "block";
  } else {
    designText.style.display = "none";
  }
}
