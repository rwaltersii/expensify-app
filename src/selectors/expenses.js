//NOTES ABOUT TIMESTAMPS*******************************************
// Timestamps are positive or negitive integer values
// 33400, 10, -203
// counting in milliseconds (+ forward) (- backwards)
// January 1, 1970 is the starting point for all timestamps
// 1 second = 1000 milliseconds
//NOTES ABOUT TIMESTAMPS*******************************************

// The moment.js library needs to be installed and then imported (oneNote)
// momentjs.com
import moment from "moment";

//START*******************************************
// Setup a function that will return the filtered expenses
// This function will pass in two values (expenses and filters)
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return (
    expenses
      .filter((expense) => {
        // Create a variable for the time the createAt
        // It allows the comparisons between moment instances
        const createdAtMoment = moment(expense.createdAt);

        //Check to see if there is a start date (If true the expense will be kept)
        // (If false the expense will go away)
        const startDateMatch = startDate
          ? startDate.isSameOrBefore(createdAtMoment, "day")
          : true;

        //Check to see if there is a start date (If true the expense will be kept)
        // (If false the expense will go away)
        const endDateMatch = endDate
          ? endDate.isSameOrAfter(createdAtMoment, "day")
          : true;

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
        } else if (sortBy === "amount") {
          return a.amount < b.amount ? 1 : -1;
        }
      })
  );
};
//END*******************************************
