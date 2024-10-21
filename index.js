function displayPoem(response) {
 new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay:10,
        cursor: "|",
    });
}

    function generatePoem(event) {
     event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "45378823524b7c076fde8t64aafb9ofd";
    let context= "You are a world traveler and have tried every type of food. You love to give detailed recipes. Your mission is to generate a different recipe every time the country is submited in basic HTML and seperate each line with a <br/>. Make sure to follow the user instructions. Inclue a title for each recipe. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the recipe, not at the beginning.";
    let prompt = `User instructions: Generate a famous recipe from the country that is submited about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = '<div class="generating">generating a recipe about the country ${instructionsInput.value}</div>';


     axios.get(apiUrl).then(displayPoem).catch(error => {
        console.error("Error fetching the poem:", error);
        poemElement.innerHTML = "<div class='error'>Failed to generate recipe. Please try again.</div>";
    });
}


let poemFormElement = document.querySelector(`#poem-generator-form`);
poemFormElement.addEventListener("submit", generatePoem);
    