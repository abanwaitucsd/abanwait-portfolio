import "./App.css";
import State from "./components/State";
import { STATE_CONSTS } from "./config/constants";

function App() {
  return (
    <>
      <section id="map">
        {STATE_CONSTS.map((stateConst) => (
          <State key={stateConst.name} {...stateConst} />
        ))}
      </section>
    </>
  );
}

export default App;
