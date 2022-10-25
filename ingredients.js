const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
let text = "";

while (ingredients[i]) {
  text += ingredients[i];
  text = text + "\n"
  i++;
}
console.log(text)

// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; ++i){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\n")

for (i = ingredients.length - 1;i >=0 ; --i){
  console.log(ingredients[i]);
}