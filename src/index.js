import React from "react"
import ReactDOM from "react-dom"

// IMPORT HOOK FACTORY FUNCTION FROM A LIBRARY DOES NOT WORK:
// ERROR: "Hooks can only be called inside the body of a function component."
import { createStateHook } from "mylib"

// WHILE DEFINING IT DIRECTLY IN THE PROJECT DOES WORK
// function createStateHook(defaultValue) {
//   function useMyState() {
//     const [myState, setMyState] = React.useState(defaultValue)
//     return [myState, setMyState]
//   }
//   return useMyState
// }

const useMyState = createStateHook("World")

function App() {
  const [myState] = useMyState()
  return (
    <div className="App">
      <h1>Hello {myState}</h1>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
