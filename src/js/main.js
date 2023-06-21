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

function isMobile() {
  return window.innerWidth <= 600;
}

function loadAboutSection() {
  if (!isMobile()) {
    const aboutBox = new WinBox({
      title: "About Me",
      width: isMobile() ? "100%" : "400px",
      height: isMobile() ? "100%" : "600px",
      top: 80,
      right: 50,
      bottom: 50,
      left: 25,
      x: isMobile() ? 0 : 25,
      y: isMobile() ? 0 : 80,
      mount: aboutContent,
      onfocus: function () {
        this.setBackground("#00aa00");
      },
      onblur: function () {
        this.setBackground("#777");
      },
    });
  }
}

function loadPersonalSection() {
  if (!isMobile()) {
    const personalBox = new WinBox({
      title: "Personal Profile",
      width: "600px",
      height: "100%",
      top: 350,
      right: 25,
      bottom: 25,
      left: 800,
      // x: 25,
      y: 300,
      mount: personalContent,
      onfocus: function () {
        this.setBackground("#00aa00");
      },
      onblur: function () {
        this.setBackground("#777");
      },
    });
  }
}

window.addEventListener("load", loadAboutSection);
window.addEventListener("load", loadPersonalSection);

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    width: isMobile() ? "100%" : "400px",
    height: isMobile() ? "100%" : "675px",
    top: isMobile() ? 30 : 85,
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
    width: isMobile() ? "100%" : "400px",
    height: isMobile() ? "100%" : "650px",
    top: isMobile() ? 30 : 75,
    right: 25,
    bottom: isMobile() ? 10 : 250,
    left: isMobile() ? 10 : 900,
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
    width: isMobile() ? "100%" : "400px",
    height: isMobile() ? "100%" : "500px",
    top: isMobile() ? 30 : 90,
    right: 50,
    bottom: 25,
    left: isMobile() ? 10 : 50,
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
    width: isMobile() ? "75%" : "600px",
    height: isMobile() ? "90%" : "600px",
    top: isMobile() ? 30 : 350,
    right: isMobile() ? 0 : 25,
    bottom: isMobile() ? 0 : 25,
    left: isMobile() ? 10 : 800,
    mount: personalContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

const game = document.querySelector("#game");
const gameContent = document.querySelector("#game-content");

game.addEventListener("click", () => {
  const gameBox = new WinBox({
    title: "JSRL - LC",
    url: "https://finegreat.github.io/JSRL/",
    width: "85%",
    height: "90%",
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
