function generatePoem(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page



    new Typewriter("#poem", {
      strings: "Letter to Myself: Releasing the What Ifs",
      autoStart: true,
      delay: 1,
      cursor:""
    });
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem)