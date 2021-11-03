// This form component will be used on both AddExpensePage and EditExpensePage
import React from "react";

// The moment.js library needs to be installed and then imported (oneNote)
// momentjs.com
import moment from "moment";

// The Airbnb react-dates library needs to be installed and then imported (oneNote)
// The name SingleDatePicker is found on the web site
// The related css file also needs to be imported in the app.js file
// props has to be setup for the SingleDatePicker
import { SingleDatePicker } from "react-dates";

//const date = new Date(); This is the javascript way of working with dates
const now = moment();
//console.log(now.format("MMM Do, YYYY"));

// Create a class ExpenseForm (this is a class based component)
// Create a form tag with some inputs
// autoFocus puts the cusor on the input field
// placeholder is what is shown when nothing is entered into the field
// type is the data type
// <textarea></textarea> is like a text field for adding comments
// Set the value for the description equal to the current state value
// Add an onChange so all the changes to be more than read only(description)
// Moment.js is a third party library for time/date components
// Airbnb react-dates is a third party library has a data picker
export default class ExpenseForm extends React.Component {
  // Need to setup a state to keep track of the changes
  // This has to be done for ALL items being tracked
  // Amount is set to an empty string to control the values being entered by the user
  // Having these items set to empty string is fine for adding a new expense, but not
  // for updating an existing expense
  // Only use the default values if not expense information was passed down
  // This is what the constructor is used for
  // Each one has to be checked for information HAS DATA ? USE IT : USE THIS
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      //This sets the createdAt date to the current date (nothing passed into moment)
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      //This sets the focus of the date to OFF
      calendarFocused: false,
      //This is the message displayed to the user if description or amount is missing
      error: "",
    };
  }

  // This function will collect the change to the description area
  // e stands for event
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  // This function will collect the change to the Add Notes area
  // e stands for event
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  // This function will collect the change to the Amount area
  // e stands for event
  // Inside the if statement is using "Regular Expressions"
  // This code for regular exprssions allows for any number and only two decimal places
  // and a number has to come first (not a dot)
  // !amount allows the user to remove the amount in the text field and leave blank
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  // This function will collect the change to the Date area
  // Adding the if statement prevents the user from clearning the date field
  // The field will always show a date
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  // This function will collect the change to the Date area
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  // This function will submit the form information
  // The e.preventDefault() will stop the page from reloading with default values
  // There has to be something in both the Description and Amount to submit the form
  // Because this form will be used for both adding an expense and editing an expense
  // it will be wired up in a different location (AddExpensePage.js)
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // Set error state to a message
      this.setState(() => ({
        error: "Please provide a Description and Amount",
      }));
    } else {
      // Clear the error
      this.setState(() => ({ error: "" }));
      // This will pass all the properties to the onSubmit function
      this.props.onSubmit({
        description: this.state.description,
        // parseFloat puts the amount in the proper format
        amount: parseFloat(this.state.amount, 10) * 100,
        // valueOf gets the timestamp because this is currently a moment.js object
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <div>
        {/* Comment */}
        {/*Conditional rendering with the error message */}
        {/*If there is a error message (true) it will show on the screen */}
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            //the 'state.description' is from the state object above
            value={this.state.description}
            onChange={this.onDescriptionChange}
          ></input>
          <input
            // The amount has to have a type set to 'text' so you can control the input
            // only numbers and only two decimal places
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          ></input>
          <SingleDatePicker
            // Setting the date to show the current date on page load
            //the 'state.createdAt' is from the state object above
            date={this.state.createdAt}
            // This function will be called with user picks a date
            onDateChange={this.onDateChange}
            // Starts off as not focused in the state object above
            focused={this.state.calanderFocused}
            // This handler function is called when the user picks a date
            onFocusChange={this.onFocusChange}
            // This will only show 1 month on the screen
            numberOfMonths={1}
            // This allows all the days available for picking
            isOutsideRange={() => false}
          ></SingleDatePicker>
          <textarea
            placeholder="Add a Note"
            //the 'state.note' is from the state object above
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
