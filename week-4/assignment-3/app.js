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

      render() {
        return (
          <main>
            <section className="content">

              <h2 >Section Title</h2>
              <div className="content-boxes">
                <div className="content-box">Content Box 1</div>
                <div className="content-box">Content Box 2</div>
                <div className="content-box">Content Box 3</div>
                <div className="content-box">Content Box 4</div>
              </div>

              <button className="button" id="btn-more" name="button" onClick={ this.toggleMore }>
                Call to Action
              </button>

              <div className="content-boxes" style={this.state.style} >
                <div className="content-box">Content Box 5</div>
                <div className="content-box">Content Box 6</div>
                <div className="content-box">Content Box 7</div>
                <div className="content-box">Content Box 8</div>
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
          <Header />
          <WelcomeMsg />
          <MainContent />
        </>
      );
    }

    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(<App />);