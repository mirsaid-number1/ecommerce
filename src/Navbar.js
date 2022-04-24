import React from "react";

function Navbar() {
  return (
    <>
      <div className="up_nav">
        <div className="selectors">
          <select name="language" id="language">
            <option value="RU">RU</option>
            <option value="UZ">UZ</option>
            <option value="EN">EN</option>
          </select>
          <select name="currency" id="currency">
            <option value="RUBL">RUBL</option>
            <option value="SO'M">SO'M</option>
            <option value="POUND">POUND</option>
          </select>
        </div>
        <div className="other_items">
          <span className="first_item">
            <img src="./assets/personal.png" alt="personal" />
            My Profile
          </span>
          <span className="second_item">
            <img src="./assets/trolley.png" alt="trolley" />
          </span>
          <span className="third_item">Item</span>
          <span className="forth_item">
            $00.000
            <img src="./assets/search-icon.png" alt="search" />
          </span>
        </div>
      </div>
      <nav className="navbar">
        <div className="nav">
          <div className="logo">
            <img src="./assets/logo.png" alt="Logo" className="logo_org" />
          </div>
          <div className="second_part">
            <span className="home">Home</span>
            <span className="bags">Bags</span>
            <span className="sneakers">Sneakers</span>
            <span className="belt">Belt</span>
            <span className="contact">Contact</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
