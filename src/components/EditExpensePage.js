import React from "react";

// Need to connect the ExpenseListItem to the store
import { connect } from "react-redux";

//Import the ExpenseForm component
import ExpenseForm from "./ExpenseForm";

//Need to import the addExpense function to add the data to the redux store
// Import the removeExpense (action generator) so it can be used in the dispatch call
// inside the ExpenseListFilters function
import { editExpense, removeExpense } from "../actions/expenses";

//** START - THIS WAS THE ORIGINAL FILE BEFORE STARTING TESTING */
//This is one of the individual pages defined as a function-
//Then they are used in the AddRouter.js file-
//props gains access to the properties of this function
//The {props.match.params.id} featches the value of id found in the AppRouter "/edit/:id"
// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(props.expense.id, expense));
//           //after despatching the data use history.push method to navigate to the home page
//           //the single '/' is the address to the dashboard page (found in AppRouter.js)
//           props.history.push("/");
//         }}
//       ></ExpenseForm>
//       {/* The remove button removes the expense and passes the id to the function removeExpense */}
//       <button
//         onClick={() => {
//           props.dispatch(removeExpense({ id: props.expense.id }));
//           props.history.push("/");
//         }}
//       >
//         Remove
//       </button>
//     </div>
//   );
// };

// // Need to give the component the current expense object
// // The find will look through the expenses and find a match to the id
// const mapStateToProps = (state, props) => {
//   return {
//     expense: state.expenses.find(
//       (expense) => expense.id === props.match.params.id
//     ),
//   };
// };

// export default connect(mapStateToProps)(EditExpensePage);
//** END - THIS WAS THE ORIGINAL FILE BEFORE STARTING TESTING */

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
