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

const changeArtButton = document.getElementById("change-art");
const retroArt = document.getElementById("retro-art");

if (changeArtButton && retroArt) {
  changeArtButton.addEventListener("click", function () {
    const shapes = retroArt.querySelectorAll("circle, .hover-shape");

    shapes.forEach(function (shape) {
      const currentColor = shape.getAttribute("fill");

      if (currentColor === "#c46b3c") {
        shape.setAttribute("fill", "#6b8e23");
      } else if (currentColor === "#6b8e23") {
        shape.setAttribute("fill", "#a94f2d");
      } else {
        shape.setAttribute("fill", "#c46b3c");
      }
    });
  });
}
