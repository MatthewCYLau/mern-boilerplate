import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <h1>
        <i className="fas fa-exclamation-triangle" /> Page Not Found
      </h1>
      <p>Sorry, this page does not exist</p>
    </Fragment>
  );
};

export default NotFound;
