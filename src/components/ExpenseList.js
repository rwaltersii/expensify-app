import React from "react";

//This connects the component to the store
import { connect } from "react-redux";

//This will import the component ExpenseListItem
import ExpenseListItem from "./ExpenseListItem";

//This will import the filtered expenses list
import selectExpenses from "../selectors/expenses";

//This is a regualar, unconnected component
//Map allows you to bring in an array of something
//and get back an array of something else
//key is the unique id of all the items in the list
// The export added to the function below is for testing purposes only
// The default export is still at the bottom of the code
// Condition was added to ask for the expense list length
// If the length is 0 a message of "No Expenses" is shown
// If there are items...display those items to the screen
export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No Expenses</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

//Create a new const for the Higher Order Component (HOC)
//This gives access to information from the store
//Maps the component state to the store props function
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

//This connects this component to the redux store - pulls everything together
//mapStateToProps defines things we want to get from the store
//ExpenseList is the connected component
export default connect(mapStateToProps)(ExpenseList);

//When you connect a component to the redux store, its reactive
//When the store values change; the new values get re-rendered to the screen
