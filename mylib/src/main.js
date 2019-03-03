import React from "react"

export function createStateHook(defaultValue) {
  function useMyState() {
    const [myState, setMyState] = React.useState(defaultValue)
    return [myState, setMyState]
  }
  return useMyState
}
