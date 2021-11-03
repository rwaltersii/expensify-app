//The store tracks our changing data over time
//This imports a way to create a store
import { createStore } from "redux";

//Example 1 without destructuring
// const add = (data) => {
//   return data.a + data.b;
// };
//Example 2 with destructuring
// const add = ({ a, b }, c) => {
//   return a + b + c;
// };
// console.log(add({ a: 1, b: 12 }, 100));

//Action generators are functions that return action objects

//Example 1: Not using destructuring
//Payload is the argument- If Payload doesn't exist; it will default as an empty object-
//That takes the place of the const = incrementBy in the const store-
// const incrementCount = (payload = {}) => ({
//   type: "INCREMENT",
//   incrementBy:
//     typeof payload.incrementBy === "number" ? payload.incrementBy : 1,
// });

//Example 2: Using destructuring - much simplier for increment
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

//Example 3: Using destructuring - much simplier for decrement
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

//Example 4: Using destructuring - much simplier for Reset
const resetCount = () => ({
  type: "RESET",
});

//Example 5: Using destructuring - much simplier for Reset
const setCount = ({ count }) => ({
  type: "SET",
  count,
});

//Creating a redux store
//Setting state equal to object 'count' and count equal to one is the default state
//action does not get a default value (Allow access to the action object increment)
//count and action are both arguments
//swith is used versus an if statement
//If the action type equals increment then add 1 to the count...
//...else just return the state as is
//If it equals decrement...it subtracts 1
//If it equals reset...it sets count back to 0
//Setting up the use of incrementBy: This checks the data type for the action incrementBy...
//...if its a number (use that number), if not (use 1)
//Then incrementBy can be used to control the increased amount of count
//Did the same for decrementBy-

// Reducers
// 1. Reducers are pure function - output is only determended by the input
// 2. Never change state or action - read only

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      // const incrementBy =
      //   typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      // const decrementBy =
      //   typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return { count: state.count - action.decrementBy };
    case "SET":
      return { count: action.count };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const store = createStore(countReducer);

//SUBSCRIBE is how to watch for changes in the store
//This function gets call each time the store changes
//*** CODE COMMENTED OUT BELOW ***//
// store.subscribe(() => {
//   console.log(store.getState());
// });

//How to stop subcribing
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//An ACTION is an object that gets sent to the store (Communicates with the store)
//ACTIONs can be assigned states like increment, decrement, reset, ...
//ACTION type names should be in all caps
//Multiple ACTION type names are separated by an underscore FIRST_LAST

//EXAMPLE: I'd like to increment the count
// 1) Create a method with an object inside
// 2) Define an object...Increment
//DISPATCH allows a 'send' of an action object to the store
//The word "type" is required, but after that...add additional
//For example "incrementBy"- Then this can be used with a conditional statement above-
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });
//When the function unsubscribe is called...it will stop the subcribe
//*** CODE COMMENTED OUT BELOW ***//
//unsubscribe();

// This manually calls the store dispatch (Better to use Action Generators as shown below)
// store.dispatch({
//   type: "INCREMENT",
// });

//This is an Action Genterator- IncrementCount is defined at the top- First by 1 then by 5
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));

// //This is an Action Genterator- DecrementCount is defined at the top- First by 1 then by 10
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//   type: "DECREMENT",
// });

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10,
// });

//This is an Action Genterator- resetCount is defined at the top-
store.dispatch(resetCount());

// store.dispatch({
//   type: "RESET",
// });

//This is an Action Genterator- resetCount is defined at the top-
store.dispatch(setCount({ count: 74 }));

// store.dispatch({
//   type: "SET",
//   count: 74,
// });

//getState returns the current state object
//console.log(store.getState());
