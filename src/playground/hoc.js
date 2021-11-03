// Higher Order Component (HOC)
// A component (HOC) that renders another component (regular)
// Main purpose is to reuse code
// Known as Render Hijacking & Prop Manipulation & Abstract State

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
  </div>
);

//This function will return the higher order component
//Example 1
// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       {/*The next line checks the isAdmin to show or not show*/}
//       {props.isAdmin && <p>This is private info. Please don't share!</p>}
//       <WrappedComponent {...props}></WrappedComponent>
//     </div>
//   );
// };

//This function will return the Higher Order Component
//Example 2
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {/*The next line checks the isAdmin to show or not show*/}
      {/*This is called a turnary opperator*/}
      {props.isAuthenticated ? (
        <WrappedComponent {...props}></WrappedComponent>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

//Create a components that calls these function
//Example 1
//const AdminInfo = withAdminWarning(Info);

//Example 2
const AuthInfo = requireAuthentication(Info);

//isAdmin is used to either show the admin warning or not
//True is shows / False is does not
//Example 1
// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="These are the details!" />,
//   document.getElementById("app")
// );

//Example 2
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="These are the details!" />,
  document.getElementById("app")
);
