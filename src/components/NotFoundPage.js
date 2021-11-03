import React from "react";
//This import is imporing client side routing
import { Link } from "react-router-dom";

//This adds a page for all pages not found in the list of pages-
//Use Link <Link></Link> and a reference "to" to provide a way for the user to return...
//...to the dashboard page "/" without having to refresh the page-
//Using an anchor tag would refresh the whole page- <a></a> = anchor tag
const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Home Page</Link>
  </div>
);

export default NotFoundPage;
