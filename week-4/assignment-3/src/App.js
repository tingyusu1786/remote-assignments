import './App.css';
import WelcomeMsg from './components/WelcomeMsg';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App(prop) {
  return (
    <>
      <Header />
      <WelcomeMsg />
      <MainContent />
    </>
  );
}

export default App;
