let initValue = 0;

const App = () => {
  const [counters, setCounters] = React.useState([
    initValue,
    initValue,
    initValue,
  ]);

  const Counter = (props) => {
    return (
      <div className="counter">
        <button
          onClick={() => {
            setCounters([
              ...counters.slice(0, props.index),
              counters[props.index] + 1,
              ...counters.slice(props.index + 1),
            ]);
          }}
        >
          + 1
        </button>
        <span>{counters[props.index]}</span>
      </div>
    );
  };

  const AllAddOne = () => {
    return (
      <button
        className="all-addone"
        onClick={() =>
          setCounters((prevCounters) => prevCounters.map((i) => i + 1))
        }
      >
        All + 1
      </button>
    );
  };

  const AddCounter = () => {
    return (
      <button
        className="add-counter"
        onClick={() => setCounters([...counters, initValue])}
      >
        Add a Counter
      </button>
    );
  };

  return (
    <div>
      <AllAddOne />
      {counters.map((i, index) => (
        <Counter key={"counter-" + index} index={index} />
      ))}
      <AddCounter />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);