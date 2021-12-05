/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AccountSection from "../sections/AccountSection";
import LoginNavbar from "../widgets/LoginNavbar";

function LoginPage() {
  return (
    <>
      <LoginNavbar />
      <div className="web-page">
        <AccountSection status="login" />
      </div>
    </>
  );
}

export default LoginPage;
