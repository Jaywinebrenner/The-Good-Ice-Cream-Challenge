// var bodyWrapper = document.querySelector("#bodyWrapper");

let runSolutionTwo = () => {
   solutionTypeText.innerHTML = "<h2 class='solution'>" + "ForEach Loop" + "<h2>";
  iceCreamFlavors.forEach((iceCream)=> {
    $(".ice-cream-list").append(
      "<li class='list-group-item ice-cream-flavor'>" + iceCream + "</li>",
    );
  })
};