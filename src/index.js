const container = document.querySelector("#container");
const clearButton = document.getElementById("clearEtch");

// Creates the initial Etch Board
const etch = () => {
  let content;
  for (let i = 0; i < 256; i++) {
    // Loops over to create grid
    content = document.createElement("div"); // creates div
    content.classList.add("content"); // adds content class (the boxes)
    container.appendChild(content); // creates Boxes
    content.addEventListener("mouseover", (event) => {
      // Etches and Sketches
      event.target.classList.add("blue-etch");
    });
  }
};

etch();

// Button, needs to reset board
clearButton.addEventListener("click", (event) => {
  const blueItems = document.getElementsByClassName("blue-etch"); // Gets all elements with ClassName
  let blueItemsArr = [...blueItems]; // Converts HTML object to array
  for (let i = 0; i < blueItemsArr.length; i++) {
    blueItemsArr[i].classList.remove("blue-etch"); // Removes Etch Color
  }
});
