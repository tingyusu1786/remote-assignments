// import logo from './logo.svg';
import './App.css';
import WelcomeMsg from './components/WelcomeMsg';
import Header from './components/Header';

function App(prop) {
  // const name = prop.name;
  // const clicked ="Have a good day!";

  return (
    <>
      <Header />
      <WelcomeMsg />
      <main>
        <section className="content">
          <h2 >Section Title</h2>
          <div className="content-boxes">
            <div className="content-box">Content Box 1</div>
            <div className="content-box">Content Box 2</div>
            <div className="content-box">Content Box 3</div>
            <div className="content-box">Content Box 4</div>
          </div>
          <button className="button" id="btn-more" name="button" >
            Call to Action
          </button>
          <div className="content-boxes box-more" id="box-more">
            <div className="content-box">Content Box 5</div>
            <div className="content-box">Content Box 6</div>
            <div className="content-box">Content Box 7</div>
            <div className="content-box">Content Box 8</div>
          </div>
        </section>
      </main>
    </>

  );
}

export default App;
