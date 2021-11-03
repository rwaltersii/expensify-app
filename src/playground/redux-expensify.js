import { createStore, combineReducers } from "redux";
//uuid is an npm library that was loaded to generate a unique id (yarn add uuid@3.1.0)
import uuid from "uuid";

//START******************************************
//Add an expense (ACTION GENERATOR)
const addExpense = ({
  //these are all the default values for addExpense
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  //properties are attached to the defaults for the addExpense object
  type: "ADD-EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});
//END****************************************

//START******************************************
//Remove an expense (ACTION GENERATOR)
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE-EXPENSE",
  id,
});
//END****************************************

//START******************************************
//Edit an expense (ACTION GENERATOR)
const editExpense = (id, updates) => ({
  type: "EDIT-EXPENSE",
  id,
  updates,
});
//END****************************************

//START******************************************
//Set the text filter (ACTION GENERATOR)
const setTextFilter = (text = "") => ({
  type: "TEXT-FILTER",
  text,
});
//END****************************************

//START******************************************
//Set the sortBy to amount (ACTION GENERATOR)
const sortByAmount = () => ({
  type: "SORT-AMOUNT",
});
//END****************************************

//START******************************************
//Set the sortBy to Date (ACTION GENERATOR)
const sortByDate = () => ({
  type: "SORT-DATE",
});
//END****************************************

//START******************************************
//Set the start date filter to a Date (ACTION GENERATOR)
const setStartDate = (num) => ({
  type: "SET-START-DATE",
  startDate: num,
});
//END****************************************

//START******************************************
//Set the end date filter to a Date (ACTION GENERATOR)
const setEndDate = (num) => ({
  type: "SET-END-DATE",
  endDate: num,
});
//END****************************************

//START******************************************
// Expenses Reducer with a default state
// Set the default value for the state to an empty array by creating...
// ... a variable to hold the default states
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  //setting up a switch statement
  switch (action.type) {
    case "ADD-EXPENSE":
      // the ...state is all the existing arrays and the 'action.expense' is the new array
      return [...state, action.expense];
    case "REMOVE-EXPENSE":
      // Use state.filter doesn't change the state, but returns a new array
      return state.filter(({ id }) => id !== action.id);
    case "EDIT-EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          // If the expense id equals the action id return all the expenses PLUS...
          // ... OVERRIDE all the expenses listed in the updates that have changed.
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          //If the id does not match, nothing is changed same expense is returned
          return expense;
        }
      });
    default:
      return state;
  }
};
//END****************************************

//START*******************************************
// Filters Reducer with a default state
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  //setting up a switch statement
  switch (action.type) {
    case "TEXT-FILTER":
      return { ...state, text: action.text };
    case "SORT-AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT-DATE":
      return { ...state, sortBy: "date" };
    case "SET-START-DATE":
      return { ...state, startDate: action.startDate };
    case "SET-END-DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};
//END*******************************************

//START*******************************************
// Timestamps are positive or negitive integer values
// 33400, 10, -203
// counting in milliseconds (+ forward) (- backwards)
// January 1, 1970 is the starting point for all timestamps
// 1 second = 1000 milliseconds
//END*******************************************

//START*******************************************
// Setup a function that will return the filtered expenses
// This function will pass in two values (expenses and filters)
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return (
    expenses
      .filter((expense) => {
        //First check to see if start date is a number- Only if the start date is a number to we want to filter
        const startDateMatch =
          typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch =
          typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description
          .toLowerCase()
          .includes(text.toLowerCase());
        // If all three are matches (true) the filter function will be true & record will be returned
        return startDateMatch && endDateMatch && textMatch;
      })
      //This sets up the sorting part of the returned items (.sort)
      //The a, b is used to determine which item comes before the other
      //It is either set to 1 or -1
      .sort((a, b) => {
        //First check to see if the sortBy is set to 'date'
        //Value of 1 comes before the value of -1
        if (sortBy === "date") {
          return a.createdAt < b.createdAt ? 1 : -1;
        } else {
          return a.amount < b.amount ? 1 : -1;
        }
      })
  );
};
//END*******************************************

//START*******************************************
// Store Creation
const store = createStore(
  combineReducers({
    //this combines and registers both the expenses and filters
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);
//END*******************************************

//START*******************************************
// This will fire when there is a change - just lets you know when something happens
store.subscribe(() => {
  // This will set the variable 'state' to the complete  unfiltered expenses array
  const state = store.getState();
  // This will show the return from the function getVisibleExpenses
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
  // This will show the complete unfiltered array
  //console.log(store.getState());
});
//END*******************************************

//START*******************************************
// Call to add an expense
// Can set it to a variable to get the id (to be used to remove an expense)
const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: -1000 })
);
//END*******************************************

//START*******************************************
// Call to remove an expense
// The expenses are removed by the value of their id
//store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//END*******************************************

//START*******************************************
// Call to edit an expense
// The expenses are edited by the value of their id
// Then the items that need to be edited also should be listed
//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
//END*******************************************

//START*******************************************
// Call to filter an expense by the text
// The expenses are filterd by the value passed in
// Then the items that match the filter should be shown
//store.dispatch(setTextFilter("rent"));
//store.dispatch(setTextFilter(""));
//END*******************************************

//START*******************************************
// Call to sort an expense by the amount
// when called the sortBy property is set to amount (no need to pass in a value)
// sortBy default is 'Date'
store.dispatch(sortByAmount());
//END*******************************************

//START*******************************************
// Call to sort an expense by the date
// when called the sortBy property is set to date (no need to pass in a value)
// sortBy default is 'Date'
//store.dispatch(sortByDate());
//END*******************************************

//START*******************************************
// Call to filter by a start date
//store.dispatch(setStartDate(125));
// Call to set the filter for start date back to undefined
//store.dispatch(setStartDate());
//END*******************************************

//START*******************************************
// Call to filter by a end date
//store.dispatch(setEndDate(1250));
//END*******************************************

//START*******************************************
// This is the expenses array
const demoState = {
  expenses: [
    {
      id: "placeHolder",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  //These are the filters that can be used by the user
  filters: {
    text: "rent",
    sortBy: "amount", //either a date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
//END*******************************************

// Testing the spread operator with an object
// const user = {
//   name: "Robert",
//   age: 51,
// };
// console.log({ ...user, location: "Goldsboro", age: 52 });
