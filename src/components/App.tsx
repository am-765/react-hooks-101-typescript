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
    <SetAppContextProvider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </SetAppContextProvider>
  );
};

export default App;
