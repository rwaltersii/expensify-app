import React from "react";

// Importing link <Link> will allow for page navigation for the expense items
import { Link } from "react-router-dom";

// Need the other item from the store (id)
// If the user clicks on the description; navigates to that expense edit page
// with the correct id

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

// Need to export a connect verson the the ExpenseListItem component
export default ExpenseListItem;
