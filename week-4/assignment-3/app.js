// replace "class" with "function" for better practice

function Header(props) {

  const [state, setState] = React.useState({right: 'calc(-50vw - 5px)'});

  const openSide = () => {
    setState({right: '0'});
  }

  const closeSide = () => {
    setState({right: 'calc(-50vw - 5px)'});
  }

  return (
    <>
      <header>
        <div className="logo">
          <a href="#">Website Title / Logo</a>
        </div>
        <nav className="nav-items">
          <ul>
            <li className="nav-item">
              <a href="#">
                Item 1
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                Item 2
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                Item 3
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                Item 4
              </a>
            </li>
          </ul>
          <ul>
            <li className="nav-icon" onClick={ openSide }>
              <a href="#">
                <span className="material-symbols-outlined">menu</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="side-menu" style={ state }>
        <div id="close-side" onClick={ closeSide }>X</div>
        <ul>
          <li className="nav-item">
            <a href="#">
              Item 1
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              Item 2
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              Item 3
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              Item 4
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

function MainContent() {

  const [style, setStyle] = React.useState({display: 'none'});

  const toggleMore = () => {
    setStyle({display: 'grid'});
  }

  const arrayRange = (start, stop) =>
    Array.from(
      { length: (stop - start + 1) },
      (value, index) => start + index
    );

  const contentBox = (numStart, numEnd) => {
    let boxNum = arrayRange(numStart, numEnd);
    return boxNum.map(i =>
      <div className="content-box">
        Content Box {i}
      </div>
    );
  }
  
  return (
    <main>
      <section className="content">

        <h2 >Section Title</h2>
        <div className="content-boxes">
          { contentBox(1, 4) }
        </div>

        <button className="button" id="btn-more" name="button" onClick={ toggleMore }>
          Call to Action
        </button>

        <div className="content-boxes" style={ style } >
          { contentBox(5, 8) }
        </div>

      </section>
    </main>
  );
}


function WelcomeMsg() {

  const [msg, setMsg] = React.useState("Welcome message");

  const changeMsg = () => setMsg("Have a good time!");
  
  return (
    <section className="welcome" onClick={ changeMsg }>
      <h1 className="welcome-msg">{ msg }</h1>
    </section>
  );
}

function App() {
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