let initValue = -1;

const Counter = (props) => {
  const [num, setNum] = React.useState(props.initNum);

  React.useEffect(() => setNum(num => (num+1)), [props.toAddone]);

  return (
    <div className="counter">
      <button onClick={() => setNum(num + 1)}>+ 1</button>
      <span>{num}</span>
    </div>
  );
}

const App = () => {
  const [counters, setCounters] = React.useState([initValue,initValue,initValue]);
  const [addone, setAddone] = React.useState(0);

  const AllAddOne = () => {
    return(
      <button className="all-addone" onClick={()=> setAddone(curAdd => curAdd + 1)}>All + 1</button>
    );
  }

  const AddCounter = () => {
    return (
      <button className="add-counter" onClick={() => setCounters([...counters, initValue])}>Add a Counter</button>
    );
  }

  return (
    <div className="counters">
      <AllAddOne />
      {counters.map((i, index) => <Counter key={"counter" + index} initNum={counters[index]} toAddone={addone}/>)}
      <AddCounter />
    </div>
  );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);