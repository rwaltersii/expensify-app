import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

//This is one of the individual pages defined as a function-
//Then they are used in the routes variable-
// Adding the <ExpenseListFilters /> etc. component allows it to appear on the screen
const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
