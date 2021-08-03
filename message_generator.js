//This message generator whill combine three seperate strings into one message.

let food = ["pizza", "lasagne", "garlic bread", "salad", "bagels", "french toast", "tacos", "hot chips", "fish and chips", "chips and gravy", "french onion soup", "toasted ravioli", "chilli mussels", "oysters", "popcorn", "meatball subs", "cookies", "cupcakes"]
let drink = ["red wine", "beer", "champagne", "cordial", "water", "soda", "lemonade", "milkshakes", "white wine", "coffee", "tea", "iced tea", "kombucha", "orange juice", "apple juice", "mojitos", "chocolate milk"]
let location = ["the cinema", "the skatepark", "the park", "the shopping centre", "the fanciest restaurant in town", "the beach", "the riverside", "a friend's house", "the dog park", "the office", "the rooftop", "the big hill", "the lighthouse", "the beach cave"]

// This function selects random elements and combines into one message
const generator = () => {

    let random_food = food[Math.floor(Math.random() * (food.length - 1))]
    let random_drink = drink[Math.floor(Math.random() * (drink.length - 1))]
    let random_location = location[Math.floor(Math.random() * (location.length - 1))]
    
    console.log(`Let's go eat ${random_food} and drink ${random_drink} at ${random_location}!`)
}

generator()