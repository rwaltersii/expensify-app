//START******************************************
// Expenses Reducer with a default state
// Set the default value for the state to an empty array by creating...
// ... a variable to hold the default states
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
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
