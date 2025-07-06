function displayPoem(response){
console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instruction") ;
  let apiKey = "200cc43bt60312a3e9528fo8814ed375";
  let prompt = `User instructions:Generate a french poem about ${instructionInput}`;
  let context = "You are a romantic poem expert and love to write short poems. Your mission is to generat a 4 line poem in basic HTML and separate each line with a<br/>. Make sure to follow the user instructions. Do not include a title Sign the poem with 'SheCodes AI' inside a <strong> element;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generatating poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);
axios.get(apiURL).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
