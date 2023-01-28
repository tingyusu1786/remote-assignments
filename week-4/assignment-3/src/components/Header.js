import React from "react";
import '../index.css';

function Header(props) {
  return (
    <>
      <header>
        <div className="logo">
          <a href="#">Website Title / Logo</a>
        </div>
        <nav className="nav-items">
          <ul>
            <li className="nav-item">
              <a href="#">Item 1</a>
            </li>
            <li className="nav-item">
              <a href="#">Item 2</a>
            </li>
            <li className="nav-item">
              <a href="#">Item 3</a>
            </li>
            <li className="nav-item">
              <a href="#">Item 4</a>
            </li>
            <li className="nav-icon">
              <a href="#">
                <span className="material-symbols-outlined">menu</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="side-menu">
        <div id="close-side">X</div>
        <ul>
          <li className="nav-item">
            <a href="#">Item 1</a>
          </li>
          <li className="nav-item">
            <a href="#">Item 2</a>
          </li>
          <li className="nav-item">
            <a href="#">Item 3</a>
          </li>
          <li className="nav-item">
            <a href="#">Item 4</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;