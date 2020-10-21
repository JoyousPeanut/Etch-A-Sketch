const gridContainer = document.querySelector("#container");
const clearButton = document.getElementById("clearEtch");
const newGridButton = document.getElementById("New Grid");

function initEtchASketch() {
  let gridSize = 16;

  const gridContainerSize = () => {
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  };

  // Creates the initial Etch Board
  const etch = () => {
    gridContainerSize();
    let content;
    for (let i = 0; i < gridSize ** 2; i++) {
      // Loops over to create grid
      content = document.createElement("div"); // creates div
      content.classList.add("content"); // adds content class (the boxes)
      gridContainer.appendChild(content); // creates Boxes
      content.addEventListener("mouseover", (event) => {
        // Etches and Sketches
        event.target.classList.add("blue-etch");
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
      gridContainerSize();
      etch();
    }
  });

  // Button, needs to reset board
  clearButton.addEventListener("click", (event) => {
    const blueItems = document.getElementsByClassName("blue-etch"); // Gets all elements with ClassName
    let blueItemsArr = [...blueItems]; // Converts HTML object to array
    for (let i = 0; i < blueItemsArr.length; i++) {
      blueItemsArr[i].classList.remove("blue-etch"); // Removes Etch Color
    }
  });
}

initEtchASketch();
