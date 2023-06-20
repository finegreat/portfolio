// edit contain 1

const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const project = document.querySelector("#project");
const personal = document.querySelector("#personal");

// edit contain 2
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const projectContent = document.querySelector("#project-content");
const personalContent = document.querySelector("#personal-content");

document.addEventListener("mousemove", function (e) {
  var spotlight = document.querySelector(".spotlight");
  spotlight.style.left = e.clientX + "px";
  spotlight.style.top = e.clientY + "px";
  spotlight.style.opacity = 1;
});

document.addEventListener("mouseleave", function () {
  var spotlight = document.querySelector(".spotlight");
  spotlight.style.opacity = 0;
});

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
  const currentFile = rotatingSVG.getAttribute("src");
  const currentIndex = svgFiles.indexOf(currentFile);
  const nextIndex = (currentIndex + 1) % svgFiles.length;
  const nextFile = svgFiles[nextIndex];
  rotatingSVG.setAttribute("src", nextFile);
}

// Call the rotateSVG function every 3000ms
setInterval(rotateSVG, 3000);

function loadAboutSection() {
  const aboutBox = new WinBox({
    title: "About Me",
    width: "400px",
    height: "675px",
    top: 80,
    right: 50,
    bottom: 50,
    left: 25,
    // x: "center",
    // y: "center",
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
}

function loadPersonalSection() {
  const personalBox = new WinBox({
    title: "Personal Profile",
    width: "600px",
    height: "400px",
    top: 350,
    right: 25,
    bottom: 25,
    left: 800,
    // x: "center",
    // y: "center",
    mount: personalContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
}

window.addEventListener("load", loadAboutSection);
window.addEventListener("load", loadPersonalSection);

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    width: "400px",
    height: "675px",
    top: 85,
    right: 50,
    bottom: 50,
    left: 30,
    // x: "center",
    // y: "center",
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    width: "400px",
    height: "650px",
    top: 75,
    right: 25,
    bottom: 250,
    left: 900,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

// edit contain 3
project.addEventListener("click", () => {
  const ProjectBox = new WinBox({
    title: "My Projects",
    width: "400px",
    height: "500px",
    top: 90,
    right: 50,
    bottom: 25,
    left: 50,
    mount: projectContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

personal.addEventListener("click", () => {
  const personalBox = new WinBox({
    title: "Personal Profile",
    width: "600px",
    height: "400px",
    top: 350,
    right: 25,
    bottom: 25,
    left: 800,
    mount: personalContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

const images = document.querySelectorAll(".fade-in");
let currentImageIndex = 0;

function fadeInImages() {
  if (currentImageIndex < images.length) {
    images[currentImageIndex].classList.add("active");
    currentImageIndex++;
  } else {
    clearInterval(interval);
  }
}

const interval = setInterval(fadeInImages, 100);
