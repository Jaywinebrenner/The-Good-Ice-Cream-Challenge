let bodyWrapper = document.querySelector("#bodyWrapper");
let solutionTypeText = document.querySelector("#solutionType");

let runSolutionOne = () => {
  solutionTypeText.innerHTML = "<h2 class='solution'>" + "Map Loop" + "<h2>";
  bodyWrapper.innerHTML =
    "<ul>" +
    iceCreamFlavors
      .map((iceCream) => {
        return (
          "<li class='list-group-item ice-cream-flavor'>" + iceCream + "</li>"
        );
      })
      .join("") +
    "</ul>";
  }

  let runRemove = () => {
    location.reload();
  }