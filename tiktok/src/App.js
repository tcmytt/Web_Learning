import {useState} from 'react'

function App() {
  const [state, setState] = useState(1);


  let handleIncrease =() => {
    // Không áp dụng liên tục dù gọi 3 lần
    setState(state + 1)
    setState(state + 1)
    setState(state + 1)

    // Áp dụng liên tục gọi cả 3 lần
    setState(prevState => prevState +1 )
    setState(prevState => prevState +1 )
    setState(prevState => prevState +1 )

  }

  let handleUpdate = () =>{
    setState(pre =>{
      // logic

      return {
        //...
      }
    })
  }

  return (
    <div style = {{padding : 20 }} className="App">
      <h1  >{state} </h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
