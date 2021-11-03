//
// Object Destructuring
//

// const person = {
//   name: "Robert",
//   age: 51,
//   location: {
//     city: "Goldsboro",
//     temp: 61,
//   },
// };

//const name = person.name;
//const age = person.age;
//Returns Robert is 51

// const { name, age } = person;
// console.log(`${name} is ${age}`);
//Returns Robert is 51

//console.log(`${person.name} is ${person.age}`);
//Returns Robert is 51

//Checks to make sure both city and temp are pressent in the object
// if (person.location.city && person.location.temp) {
//   console.log(`It is ${person.location.temp} in ${person.location.city}`);
// }
//Returns It is 61 in Goldsboro (if city and temp are pressent)

//Can remove the need for person.location in from of each item
// const { city, temp } = person.location;
// if (city && temp) {
//   console.log(`It is ${temp} in ${city}`);
// }
//Returns It is 61 in Goldsboro (if city and temp are pressent)

//Can rename items in the object temp: temperature
//Once renamed...the renamed word has to be used
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}`);
// }
//Returns It is 61 in Goldsboro (if city and temp are pressent)

//Adding an equal sign behind an item will result in a "Default" value
//Note had to comment out the name in the object
// const { name = "No Name", age } = person;
// console.log(`${name} is ${age}`);
//Returns No Name is 51

//Can rename the item and provide a default at the same time
// const { name: firstName = "No Name", age } = person;
// console.log(`${firstName} is ${age}`);
//Returns No Name is 51

//Exercise
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

//
// Array Destructuring
//

//const address = ["408 Rosewood Road", "Goldsboro", "North Carolina", "27530"];
//console.log(`You are in ${address[1]} ${address[2]}`);
//This returns You are in Goldsboro North Carolina

//These names are matched up by position not the name
//Do not have to use all the items in the list (only the ones used)
//Do have to use a place holder if the items at the beginning are not used...
//...for example [, city, state] this leaves off street and zip
// const [street, city, state, zip] = address;
// console.log(`You are in ${city} ${state}`);
//This returns You are in Goldsboro North Carolina

//Setting the city equal to something acts like a default value for that item
// const address1 = [];
// const [, city = "South Carolina", state, zip] = address1;
// console.log(`You are in ${city}`);

//Exercise
const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [menuItem, , priceMed] = item;
console.log(`A medium ${menuItem} cost ${priceMed}`);
