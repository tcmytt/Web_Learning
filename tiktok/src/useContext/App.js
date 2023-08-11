import "./App.css"
import Context from "./Content";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";



function App() {
  const context = useContext(ThemeContext);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <Context />
    </div>
  );
}

export default App;
