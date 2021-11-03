import React from "react";

//Need to import the connect function to connect to the redux store
import { connect } from "react-redux";

//Import the ExpenseForm
import ExpenseForm from "./ExpenseForm";

//Need to import the addExpense function to add the data to the redux store
import { addExpense } from "../actions/expenses";

//*** START OF ORIGNIAL */
// COMMENTED OUT THE ORIGNIAL BEFORE TESTING STARTED
//This is one of the individual pages defined as a function-
//Then they are used in the AddRouter.js file-
// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm
//       //onSubmit is a prop with the expenses (Description, Amount, Date, Note)
//       //then is needs to be dispatched to the store with the action generator
//       //addExpense function then passing in the expense
//       onSubmit={(expense) => {
//         props.dispatch(addExpense(expense));
//         //after despatching the data use history.push method to navigate to the home page
//         //the single '/' is the address to the dashboard page (found in AppRouter.js)
//         props.history.push("/");
//       }}
//     ></ExpenseForm>
//   </div>
// );
//*** END OF ORIGINAL */

//*** START OF NEW - CHANGES WERE MADE TO EASE OF TESTING ONLY */
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
//*** END OF NEW - CHANGES WERE MADE TO EASE OF TESTING ONLY */

// This was added for making testing this component easier
// It was not here before starting to test
// Can be left out without testing
const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
});

// This give access to props.dispatch
// Added the (undefined, mapDispatchToProps) for testing purposes only
// Can be left out without testing
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
