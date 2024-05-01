console.clear();

const nameDiv = document.querySelector(".name");
const difficulty = document.querySelector(".difficulty");
const serviings = document.querySelector(".servings");
const imageDiv = document.getElementById("image");
const ingredientsDiv = document.getElementById("ingredients");
const instructionsDiv = document.getElementById("instructions");
const toggleIngredients = document.querySelector(".toggleIngredients");
const toggleInstructions = document.querySelector(".toggleInstructions");

const mexicanEggs = {
  name: "Mexican Eggs",
  ingredients: {
    eggs: "2-4 eggs (as desired)",
    tomato: "2 large tomatoes, diced",
    serranoPepper: "1-2 serrano peppers, finely chopped",
    garlic: "2 cloves garlic, minced",
    onion: "1 small onion, chopped",
    oliveOil: "2 tablespoons olive oil",
    salt: "Salt to taste",
    pepper: "Black pepper to taste",
    optional: "Cilantro for garnish (optional)"
  },
  instructions: [
    "Heat olive oil in a skillet over medium heat.",
    "Add chopped onion and cook until translucent.",
    "Add minced garlic, serrano pepper, and diced tomato. Cook until tomatoes break down and create a sauce.",
    "Create wells in the sauce for the eggs.",
    "Carefully crack the eggs into the wells. Cover the skillet and let the eggs cook to your desired consistency.",
    "Season with salt and black pepper to taste.",
    "Garnish with cilantro if desired.",
    "Serve hot, directly from the skillet."
  ],
  servings: "2-4 people",
  difficulty: "Easy",
  img:
    "https://cookingasprocrastination.files.wordpress.com/2012/05/img_1621.jpg"
};

let show = false;
let Instrshow = false;

nameDiv.innerText = mexicanEggs.name;
difficulty.innerText = `Difficulty: ${mexicanEggs.difficulty}`;
serviings.innerText = ` Serving Size : ${mexicanEggs.servings}`;
imageDiv.src = mexicanEggs.img;

//use Object.entries to convert ingreditns into [key, value] pairs
Object.entries(mexicanEggs.ingredients).forEach(([ingredient, details]) => {
  const li = document.createElement("li");
  li.innerText = details;
  ingredientsDiv.appendChild(li);
});

instructionsDiv.innerText = mexicanEggs.instructions;

function toggleInstruct() {
  Instrshow = !Instrshow;

  if (Instrshow) {
    instructionsDiv.classList.add("hide");
  } else {
    instructionsDiv.classList.remove("hide");
  }
}

toggleInstructions.addEventListener("click", toggleInstruct);

function toggle() {
  show = !show;
  if (show) {
    ingredientsDiv.classList.add("hide");
  } else {
    ingredientsDiv.classList.remove("hide");
  }
}

toggleIngredients.addEventListener("click", toggle);
