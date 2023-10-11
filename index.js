const coffeeMenu = require('./coffee_data.js');


//prompt 2
//I will print an array of all the drinks using a for loop to log each name
//initalize the array
const coffeeNamesArr=[];
//for loop
for(i=0; i<coffeeMenu.length;i++){
    coffeeNamesArr.push(coffeeMenu[i].names); //push names into new array
}
console.log(coffeeNamesArr); // log new array


//prompt 3
//same steps, inialize variable then a for loop
const lessThanFive = [];
for(i=0; i<coffeeMenu.length; i++){
    if( coffeeMenu[i].price<=5){  //new conditonal statement to identify coffees cheaper than 5$
        lessThanFive.push(coffeeMenu[i].names);  //push names into new array
    }
}
console.log(lessThanFive); //log new array


//prompt 4
//same steps, initalize array, for loop, conditional statement, push to said array, log array
const evenPrice = [];
for(i=0; i<coffeeMenu.length;i++){
    if (coffeeMenu[i].price%2 === 0){ //conditonal statement to identify even prices
        evenPrice.push(coffeeMenu[i].names);
    }
}
console.log(evenPrice);

//prompt 5
//to sum all the prices I first created an array using just prices
const prices= [];
for(i=0; i<coffeeMenu.length;i++){
    prices.push(coffeeMenu[i].price);
}
//here I used reduce method to add each value in my prices array 
const sumPrices= prices.reduce((accum, currentVal) => {
    return accum + currentVal;}, 0);
//now log result
console.log(sumPrices);

//prompt 6 and 7
//to get seasonal drinks separate I iniated a new array and pushed seasonal values inside
const seasonalDrinks= [];
for(i=0; i<coffeeMenu.length;i++){
    if(coffeeMenu[i].seasonal ===true){
        seasonalDrinks.push(coffeeMenu[i].names);
        console.log(coffeeMenu[i].names + " with imported beans"); //here I logged the name of the drinks with the extra words requested.
    }
}
console.log(seasonalDrinks);

//UPON FURTHER EVALUATION OF THE MATERIAL I BELIEVE I SHOULD HAVE APPROACED THIS USING THE FILTER METHOD IN PLACE OF MOST LOOPS
//FOR EXAMPLE
//to get seasonal drinks I can simply filter the objects by the value of the seasonal key

const seasonalEX = coffeeMenu.filter(coffeeMenu=>coffeeMenu.seasonal===true);
console.log(seasonalEX);





