import { useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";
import Events from "./Events";
import reducer from "../reducers";
import { State } from "../types/State";

const initialState: State[] = [];

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container-fluid">
      <EventForm {...{ state, dispatch }} />
      <Events {...{ state, dispatch }} />
    </div>
  );
};

export default App;
