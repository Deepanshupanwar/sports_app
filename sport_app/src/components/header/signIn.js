import React from 'react';
import { Link } from 'react-router-dom';

const SignInButton = () => {
  return (
    <div>
      <Link to="/login">
      <button className="sign-in-button">
        Sign In
      </button>
      </Link>
    </div>
  );
}

export default SignInButton;