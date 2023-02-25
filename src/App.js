// import Counter from "./component/Counter";
import Home from "./pages/Home";
import About from "./component/About";
import { useState } from "react";
import List from "./component/List";

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <div className="App">
      {isHome ? <Home /> : <About />}
      <button
        onClick={() => {
          setIsHome(!isHome);
        }}
      >
        Change content
      </button>

      <List />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
