import React from "react";


export default function Header() {
    return (
      <header className="primary-color">
        <div className="header-container">
          <img src={require('../assets/logo.png')} alt="Logo" class="d-inline-block align-text-top logo" />
          <h3 className="logo-text">Tag Sangam</h3>
        </div>
      </header>
    )
  }