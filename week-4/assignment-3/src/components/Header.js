import React from "react";
import '../index.css';

class Header extends React.Component {

  state = {
    position: {right: 'calc(-50vw - 5px)'},
  }

  openSide = () => {
    this.setState({position: {right: '0'}})
  }

  closeSide = () => {
    this.setState({position: {right: 'calc(-50vw - 5px)'}})
  }

  render() {
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
              <li className="nav-icon" onClick={this.openSide}>
                <a href="#">
                  <span className="material-symbols-outlined">menu</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="side-menu" style={this.state.position}>
          <div id="close-side" onClick={this.closeSide}>X</div>
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
}

export default Header;