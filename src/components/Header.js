import React from "react";

//This import is imporing client side routing
import { NavLink } from "react-router-dom";

//This is setup to show the header and links on every page
//NavLink allows the use of activeClassName (which means you can have a custom sytle...
//only when the page is active -)
//Need to set exact to true so it will stop once it has an exact match to the page name-
//The edit link is not shown in the header function because it will be used differently...
//...and the page will never be shown just by itself without an id-
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home Page
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

export default Header;
