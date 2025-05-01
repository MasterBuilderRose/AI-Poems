function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // api url
 let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "oa48bftb614258d3cf6006ce7beaef15"; 
  let context = "You are a romantic poet. Write a poem that is 4 lines long and has a rhyme scheme of AABB.";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
 
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
