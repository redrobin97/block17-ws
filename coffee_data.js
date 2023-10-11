// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        names: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        names: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        names: "latte",
        price: 5,
        seasonal: false,
    },
    {
        names: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        names: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        names: "americano",
        price: 7,
        seasonal: false,
    },
    {
        names: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        names: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        names: "cuban espresso",
        price: 10,
        seasonal: true,
    }
];

module.exports = coffeeMenu