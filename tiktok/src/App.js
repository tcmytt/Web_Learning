import Content from "./Content";
import { useEffect , useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  useEffect(() => console.log("useEffect"))
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <Content />}
    </div>
  );
}

export default App;
