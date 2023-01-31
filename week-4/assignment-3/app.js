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

  itemList = (num) => {
    let numArr = Array.from(
      {length: num},
      (value, index) => index +1);
    return (
      <ul>
        {numArr.map(i =>
          <li className="nav-item">
            <a href="#">
              Item {i}
            </a>
          </li>
        )}
      </ul>
      )
  }

  render(props) {
    return (
      <>
        <header>
          <div className="logo">
            <a href="#">Website Title / Logo</a>
          </div>
          <nav className="nav-items">
            {this.itemList(this.props.itemNum)}
            <ul>
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
          {this.itemList(this.props.itemNum)}
        </div>
      </>
    );
  }
}

class MainContent extends React.Component {

  state = {
    style: {display: 'none'},
    showed: false
  }

  toggleMore = () => {
    this.setState(prevState => {
      if (prevState.showed) {
        return {
          style: {display: 'none'},
          showed: false
        }
      } else {
        return {
          style: {display: 'grid'},
          showed: true
        }
      }
    });
  }

  arrayRange = (start, stop) =>
    Array.from(
      { length: (stop - start + 1) },
      (value, index) => start + index
    );

  contentBox = (numStart, numEnd) => {
    let boxNum = this.arrayRange(numStart, numEnd);
    return boxNum.map(i =>
      <div className="content-box">
        Content Box {i}
      </div>
    );
  }

  render() {
    return (
      <main>
        <section className="content">

          <h2 >Section Title</h2>
          <div className="content-boxes">
            {this.contentBox(1, 4)}
          </div>

          <button className="button" id="btn-more" name="button" onClick={ this.toggleMore }>
            Call to Action
          </button>

          <div className="content-boxes" style={this.state.style} >
            {this.contentBox(5, 8)}
          </div>

        </section>
      </main>
    );
  }
}

class WelcomeMsg extends React.Component {

  state = {
    msg: "Welcome message",
  }

  changeMsg = () => {
    this.setState({
      msg: "Have a good time!"
    });
  }

  render() {
    return (
      <section className="welcome" onClick={ this.changeMsg }>
        <h1 className="welcome-msg">{ this.state.msg }</h1>
      </section>
    );
  }
}

function App(prop) {
  return (
    <>
      <Header itemNum={4} />
      <WelcomeMsg />
      <MainContent />
    </>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);