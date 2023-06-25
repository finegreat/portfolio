const svgFiles = [
  "src/img/h21readme-typing-svg.herokuapp.svg",
  "src/img/h22readme-typing-svg.herokuapp.svg",
  "src/img/h23readme-typing-svg.herokuapp.svg",
  "src/img/h24readme-typing-svg.herokuapp.svg",
];

// Get the rotatingSVG element
const rotatingSVG = document.getElementById("rotatingSVG");

// Function to rotate the SVG
function rotateSVG() {
  if (!isMobile()) {
    const currentFile = rotatingSVG.getAttribute("src");
    const currentIndex = svgFiles.indexOf(currentFile);
    const nextIndex = (currentIndex + 1) % svgFiles.length;
    const nextFile = svgFiles[nextIndex];
    rotatingSVG.setAttribute("src", nextFile);
  }
}

// Call the rotateSVG function every 3000ms
setInterval(rotateSVG, 6000);
