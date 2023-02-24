import logo from "./logo.svg";
import "./App.css";
// import {Greet} from './components/Greet';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

function App() {
  return (
    <div className="App">
      <FunctionClick  />
      <ClassClick />

      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet lname="Nai" fname="Akki">
        <p>This is children prop</p>
      </Greet>
      <Greet lname="Maru" fname="Keval">
        <button>Action</button>
      </Greet> */}
      {/* <Greet lname="Laheri" fname="Shruti" /> */}
      {/* <Welcome fname="akki" lname="nai"/> */}
      {/* <Welcome fname="shruti" lname="laheri"/> */}
      {/* <Welcome fname="keval" lname="maru"/> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
