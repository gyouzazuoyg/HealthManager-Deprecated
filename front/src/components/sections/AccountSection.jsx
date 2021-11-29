/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import UserNamePasswordEdit from "../widgets/UserNamePasswordEdit";

function AccountSection(props) {
  return (
    <div className="account-section">
      <h1>Welcome to Health Manager</h1>
      <UserNamePasswordEdit status={props.status} />
    </div>
  );
}

export default AccountSection;
