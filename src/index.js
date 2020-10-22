const gridContainer = document.querySelector("#container");
const clearButton = document.getElementById("clearEtch");
const newGridButton = document.getElementById("New Grid");
const rainbow = document.getElementById("rainbow");
const greyscale = document.getElementById("greyscale");
const custom = document.getElementById("custom");
const picker = document.getElementById("favcolor");

function initEtchASketch() {
  let gridSize = 16;
  // Colour Buttons
  let brush = "rainbow";

  rainbow.addEventListener("click", () => {
    brush = "rainbow";
  });

  greyscale.addEventListener("click", (event) => {
    brush = "greyscale";
  });

  picker.addEventListener("click", (event) => {
    brush = "custom";
  });

  // Ensures creating a new grid doesn't keep  the old one
  const clearPreviousGrid = () => {
    gridContainer.innerHTML = "";
  };

  const createGridDisplay = () => {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  };

  // Creates the initial Etch Board
  const etch = () => {
    clearPreviousGrid();
    createGridDisplay();
    let content;
    for (let i = 0; i < gridSize ** 2; i++) {
      // Loops over to create grid
      content = document.createElement("div"); // creates div
      content.classList.add("content"); // adds content class (the boxes)
      gridContainer.appendChild(content); // creates Boxes
      content.addEventListener("mouseover", (event) => {
        // Etches and Sketches
        if (brush === "rainbow") {
          let rgb = {
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255)
          };
          event.target.style.backgroundColor = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
        } else if (brush === "greyscale") {
          let rgb = Math.floor(Math.random() * 256);
          event.target.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
        } else if (brush === "custom") {
          event.target.style.backgroundColor = `${picker.value}`;
        }

        // event.target.classList.add("blue-etch");
      });
    }
  };

  etch();

  // Let user pick Grid Size
  newGridButton.addEventListener("click", function gridSizeValue(event) {
    gridSize = window.prompt(
      "How many squares on each side of the grid? Minimum of two, maximum of 100"
    );
    if (gridSize > 100 || gridSize < 2) {
      alert("Invalid! Please enter a number between 2 and 100");
    } else {
      etch();
    }
  });

  clearButton.addEventListener("click", etch);
}

initEtchASketch();

// Set Colour
