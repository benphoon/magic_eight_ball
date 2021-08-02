//This message generator whill combine three seperate strings into one message.

let food = ["Pizza", "Lasagne", "Garlic Bread", "Salad", "Bagels", "French Toast", "Tacos", "Hot Chips", "Fish and Chips", "Chips and Gravy", "French Onion Soup", "Toasted Ravioli", "Chilli Mussels", "Oysters", "Popcorn", "Meatball Subs"]
let drink = ["Red Wine", "Beer", "Champagne", "Cordial", "Water", "Soda", "Lemonade", "Milkshakes", "White Wine", "Coffee", "Tea", "Iced Tea", "Kombucha"]
let location = ["the cinema", "the skatepark", "the park", "outside the shopping centre", "the fanciest restaurant in town", "the beach", "the riverside", "a friend's house"]

// These select the random elements from the arrays
let random_food = Math.floor(Math.random() * food.length)
let random_drink = Math.floor(Math.random() * drink.length)
let random_location = Math.floor(Math.random() * location.length)

// This function combines random elements into one message
const generator = (random_food, random_drink, random_location) => {
    console.log(`Let's go eat ${random_food} and drink ${random_drink} at ${random_location}!`)
}