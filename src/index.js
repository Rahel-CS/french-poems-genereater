function displayPoem(response){
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}   
function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions") ;
  let apiKey = "200cc43bt60312a3e9528fo8814ed375";
  let prompt = `User instructions:Generate a french poem about ${instructionsInput}`;
  let context = "You are a romantic poem expert and love to write short poems. Your mission is to generat a 4 line poem  and separate each line with a<br/>. Make sure to follow the user instructions. Do not include a title Sign the poem with 'SheCodes AI' inside a <strong> element";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
   
  let poemElement =document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> generating a french poem about ${instructionsInput.value}</div>" `
  axios.get(apiURL).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);
