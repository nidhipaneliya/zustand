import './App.css';
import {useStore,useCountryStore,useEutoStore} from './state.js/index';

function App() {
  const dollars = useStore((state) =>state.dollars)
  const broke = useStore((state)=> state.broke)
  const country = useCountryStore((state) => state.country);
  const euros = useEutoStore((state) => state.euros);


      const setBroke = useStore((state) => state.setBroke);
      const increseDollars = useStore((state) => state.increseDollars);
      const decreaseDollars = useStore((state) => state.decreaseDollars);
      const increaseEuros = useEutoStore((state) => state.increaseEuros);
      const decreaseEuros = useEutoStore((state) => state.decreaseEuros);

  return (
    <div className="App">
    <p> You currently have: {dollars} </p>
    <p> {broke? "You are broke" : "You are not broke" } </p>
    <p> You currently live in {country} </p>

    <button
    onClick={() => {
      setBroke(!broke);
    }}
  >
    {" "}
    Change
  </button>
  <button
    onClick={() => {
      increseDollars();
    }}
  >
    +
  </button>
  <button
    onClick={() => {
      decreaseDollars();
    }}
  >
    {" "}
    -
  </button>

  <p> Euros: {euros}</p>
  <button
    onClick={() => {
      increaseEuros();
    }}
  >
    Add Euro{" "}
  </button>
  <button
    onClick={() => {
      decreaseEuros();
    }}
  >
    {" "}
    Remove Euro{" "}
  </button>

  </div>
  );
}

export default App;
