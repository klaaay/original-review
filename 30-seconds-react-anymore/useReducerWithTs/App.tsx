import React, { useReducer } from 'react';

type Increment = {
  readonly type: "Increment";
  readonly incrementStep: number;
}

type Decrement = {
  readonly type: "Decrement";
  readonly decrementStep: number;
}

type Double = {
  readonly type: "Double"
}

type State = {
  count: number
}

type Props = {
  incrementStep?: number;
  decrementStep?: number;
}

type Actions = Increment | Decrement | Double;

function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.incrementStep }
    case "Decrement": {
      return { count: state.count - action.decrementStep }
    }
    case "Double": {
      return { count: state.count * 2 }
    }
    default:
      // nerverReached(action)
      return state;
  }

}

// function nerverReached(never: never) { }

const App: React.FC<Props> = ({
  incrementStep = 1,
  decrementStep = 1
}) => {

  const [state, dispatch] = useReducer<React.Reducer<State, Actions>>(reducer, { count: 0 })

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
