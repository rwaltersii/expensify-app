import React from "react";

//This import is imporing client side routing
import { BrowserRouter, Route, Switch } from "react-router-dom";

//This imports all the component used in this file
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

//<Route></Route> are the individual pages- Use exact to use the exact name-
//Page names are the path followed by a name '/create' for example-
//The conponents shown on the page are defined by component and reference...
//...a function with the same name
//<Switch/> will run through all the pages and when a match is found...it stops looking-
//Placing the <Header></Header> outside the <Switch></Switch> forces the header to show on all pages-
//The name followed by colon :id allows for dynamic names after the main page name-
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
        <Route path="/create" component={AddExpensePage}></Route>
        {/* Having the id allows navigation to a specific expense */}
        <Route path="/edit/:id" component={EditExpensePage}></Route>
        <Route path="/help" component={HelpPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
