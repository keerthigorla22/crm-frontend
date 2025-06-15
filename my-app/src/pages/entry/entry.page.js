import React, { useState } from 'react';
import './entry.style.css';
import { Container } from 'react-bootstrap';
import { LoginForm } from '../../components/login/login.comp';
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login"); // "login" or "reset"

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    console.log("Login submitted:", email, password);
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="entry-page bg-info">
      <Container className="p-5 bg-light rounded shadow">
        {formLoad === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            email={email}
            pass={password}
            formSwitcher={formSwitcher}
          />
        )}

        {formLoad === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            email={email}
            formSwitcher={formSwitcher}
          />
        )}

        {/* Switcher Link */}
        <div className="text-center mt-3">
          {formLoad === "login" ? (
            <a href="#" onClick={() => formSwitcher("reset")}>
              Forgot Password?
            </a>
          ) : (
            <a href="#" onClick={() => formSwitcher("login")}>
              Back to Login
            </a>
          )}
        </div>
      </Container>
    </div>
  );
};
