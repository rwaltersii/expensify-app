import React from "react";
import ReactDOM from "react-dom";

//The Provider will provide all the component access to the store
//This defines the store that will be providing to all of the components
//Which means we do not need to manual pass the store around
import { Provider } from "react-redux";

//Imports for the syles
import "normalize.css/normalize.css";
import "./styles/styles.scss";
// This is for the date picker
import "react-dates/lib/css/_datepicker.css";

//Import for the main component
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

//imports with {} means there are additional functions in that file
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";

//imports without {} are the only function in the file
import getVisibleExpenses from "./selectors/expenses";

//This gives access to the store
//it gets the returned value from the function configureStore
//The store name is 'store'- this name is used in the Provider below
const store = configureStore();

//START*******************************************
// Call to add an expense
// Can set it to a variable to get the id (to be used to remove an expense)
store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 4500,
    createdAt: 500,
    note: "This is my Water Bill",
  })
);
store.dispatch(
  addExpense({
    description: "Gas Bill",
    amount: 300,
    createdAt: 1000,
    note: "This is my Gas Bill",
  })
);
store.dispatch(
  addExpense({
    description: "Rent",
    amount: 109500,
    createdAt: 200,
    note: "This is my Rent",
  })
);
//END*******************************************

//START*******************************************
// Call to filter an expense by the text
// The expenses are filterd by the value passed in
// Then the items that match the filter should be shown
//store.dispatch(setTextFilter("Water"));
//END*******************************************

//START*******************************************
//This will call the setTextFilter again in three seconds
//This just demonstrates how the screen will update when something changes
// setTimeout(() => {
//   store.dispatch(setTextFilter("Bill"));
// }, 3000);
//END*******************************************

//START*******************************************
//This will return the filtered results and print them to the console
const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));
//END*******************************************

//Use to pass in the store to the rest of the application
//This is a required setup for the profider
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

//Renders to the screen
ReactDOM.render(jsx, document.getElementById("app"));
