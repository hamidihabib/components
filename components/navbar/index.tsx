import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>Logo</h3>
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Components</li>
          <li>Dashboard</li>
        </ul>
      </div>
      <div className="space"/>
      <div className="sign-in"><span>Sign In</span></div>
    </nav>
  );
}
