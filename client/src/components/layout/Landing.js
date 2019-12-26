import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>MERN Stack Boilerplate</h1>
          <p>A boilerplate for building web apps with MERN stack</p>
          <div>
            <Button className="buttons" variant="primary" href="/register">
              Register
            </Button>
            <Button className="buttons" variant="light" href="/login">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
