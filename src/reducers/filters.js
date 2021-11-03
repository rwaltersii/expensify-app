// The moment.js library needs to be installed and then imported (oneNote)
// momentjs.com (DATE PICKER)
import moment from "moment";

//START*******************************************
// Filters Reducer with a default state
// The startDate and endDate defaults to the current month
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};
export default (state = filtersReducerDefaultState, action) => {
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
