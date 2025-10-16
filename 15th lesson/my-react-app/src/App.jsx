import { useState } from "react";
import "./App.css";
import { InputTitle } from "./inputTitle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <InputTitle />
    </>
  );
}

export default App;
