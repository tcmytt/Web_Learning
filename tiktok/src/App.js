import Home from "./Pages/Home";
import Info from "./Pages/Info";
import News from "./Pages/News";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

// import "./App.css"
// import Heading from './components/Heading'
// import Paragraph from './components/Paragraph'
// import GlobalStyles from "./components/GlobalStyles"

// function App (){
//   return (
//     <GlobalStyles>
//     <div style = {{ padding : '0 32px' }}>
//       <h1 className = "heading" >CSS</h1>
//       <Heading></Heading>
//       <Paragraph></Paragraph>
//     </div>
//     </GlobalStyles>
//   )
// }




// useImperativeHandle()
// import { useRef, useEffect } from "react"
// import Video from './Video'

// function App() {
//   const videoRef = useRef()

//   useEffect(() => {
//     console.log(videoRef.current)
//   })

//   const handlePlay = () => {
//     videoRef.current.play();
//   };

//   const handlePause = () => {
//     videoRef.current.pause();
//   };


//   return (
//     <div >       
//       <Video ref={videoRef} ></Video>
//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Pause</button>
//     </div>
//   );
// }







// Context + reducer
// import { useStore, actions } from "./store";

// function App() {
//   const [state, dispatch] = useStore();
//   const {todoInput, todos} = state

//   const handleAdd = () => {
//     dispatch(actions.addTodo(todoInput))
//   }

//   console.log(todoInput)

//   return (
//     <div>
//         <input
//             value={todoInput}
//             placeholder="Enter todo... "
//             onChange={e => {
//                 dispatch(actions.setTodoInput(e.target.value))
//             }}
//         >
//         </input>
//         <button onClick={handleAdd}>ADD</button>
//         {todos.map((todo, index) => {{
//           <li key = {{index}}> {todo} </li>
//         }})}
//     </div>
//   );
// }



export default App;