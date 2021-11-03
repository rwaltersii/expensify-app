import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

//START*******************************************
// Store Creation
export default () => {
  const store = createStore(
    combineReducers({
      //this combines and registers both the expenses and filters
      expenses: expensesReducer,
      filters: filtersReducer,
    }),
    // This line was copy/pasted from the redux dev tools site (oneNote)
    // The Chrome extension will not work without this line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
//END*******************************************
