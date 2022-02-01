import { useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";
import Events from "./Events";
import { SetAppContextProvider } from "../contexts/AppContext";
import reducer from "../reducers";
import { State } from "../types/State";

const initialState: State[] = [];

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SetAppContextProvider value={"Hello, I am a Provider."}>
      <div className="container-fluid">
        <EventForm {...{ state, dispatch }} />
        <Events {...{ state, dispatch }} />
      </div>
    </SetAppContextProvider>
  );
};

export default App;
