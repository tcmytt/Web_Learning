import { useRef, useEffect } from "react"
import Video from './Video'

function App() {
  const videoRef = useRef()

  useEffect(() => {
    console.log(videoRef.current)
  })

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };


  return (
    <div >       
      <Video ref={videoRef} ></Video>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;

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

// export default App;