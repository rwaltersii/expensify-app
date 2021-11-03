// // This will be a basic presentational component
// import React from "react";

// // Need to connect the ExpenseListFilter to the store
// // So the value will show up in the input field
// import { connect } from "react-redux";

// // The Airbnb react-dates library needs to be installed and then imported (oneNote)
// // The name SingleDatePicker is found on the web site
// // The related css file also needs to be imported
// // props has to be setup for the SingleDatePicker
// import { DateRangePicker } from "react-dates";
// //import "react-dates/lib/css/_datepicker.css";

// // Import the setTextFilter, sortByAmount, and sortByDate (action generator) so they
// // can be used in the dispatch call inside the ExpenseListFilters function
// // Also import the startDate and endDate
// import {
//   setTextFilter,
//   sortByAmount,
//   sortByDate,
//   setStartDate,
//   setEndDate,
// } from "../actions/filters";

// // This is a class based Component name is ExpenseListFilters
// // <input allows user to enter information (known as controled input)
// // The value is equal to whatever the search text is
// // Need to provide an onChange handler so the user can make inputs
// // onChange takes a function - each time the input changes the function runs
// // e.target.value is the input - Need to use dispatch to update the store
// // This also allows user to read AND write to the store
// // The <select/> <option/> is how the user can pick from a drop down
// // this is aslo known as controled input
// // The uppercase is whats shown to the user / the value is used to filter
// // The props.filters.text and props.filters.sortBy is coming from the
// // filters.js files list of filters
// class ExpenseListFilters extends React.Component {
//   // This sets the default state value for calendar
//   state = {
//     calendarFocused: null,
//   };

//   // This function runs when the dates are selected
//   // It dispatches the new dates
//   onDatesChange = ({ startDate, endDate }) => {
//     this.props.setStartDate(startDate);
//     this.props.setEndDate(endDate);
//   };

//   // This gets the new value on lose of focus
//   onFocusChange = (calendarFocused) => {
//     this.setState(() => ({ calendarFocused }));
//   };

//   onTextChange = (e) => {
//     this.props.setTextFilter(e.target.value);
//   };

//   onSortChange = (e) => {
//     if (e.target.value === "date") {
//       this.props.sortByDate(e.target.value);
//     } else {
//       this.props.sortByAmount(e.target.value);
//     }
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.props.filters.text}
//           onChange={this.onTextChange}
//         ></input>
//         <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
//           <option value="date">Date</option>
//           <option value="amount">Amount</option>
//         </select>

//         <DateRangePicker
//           // Setting the start date to show the first day of the month
//           //the 'startDate' is from the filters.js file
//           startDate={this.props.filters.startDate}
//           // Setting the end date to show the last day of the month
//           //the 'endDate' is from the filters.js file
//           endDate={this.props.filters.endDate}
//           // Calls the function as to what happens when a date is selected
//           onDatesChange={this.onDatesChange}
//           // This handler function is called when the user picks a date
//           focusedInput={this.state.calendarFocused}
//           // This handler function is called when the focus is changed
//           onFocusChange={this.onFocusChange}
//           // This will allow the selected dates to be cleared
//           showClearDates={true}
//           // This only shows one month at a time
//           numberOfMonths={1}
//           // This allows user to pick past dates
//           isOutsideRange={() => false}
//         ></DateRangePicker>
//       </div>
//     );
//   }
// }

// // Need to get access to the store then return what is needed
// // The need is all the filters, but not the expenses
// const mapStateToProps = (state) => ({
//   filters: state.filters,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setTextFilter: (text) => dispatch(setTextFilter(text)),
//   sortByDate: () => dispatch(sortByDate()),
//   sortByAmount: () => dispatch(sortByAmount()),
//   setStartDate: (startDate) => dispatch(setStartDate(startDate)),
//   setEndDate: (endDate) => dispatch(setEndDate(endDate)),
// });

// // Need to export a connect verson the the ExpenseListFilters component
// // First takes what we want from the store
// // Second takes the component itself
// export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
