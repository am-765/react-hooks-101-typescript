import { useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";
import Events from "./Events";
import { SetAppContextProvider } from "../contexts/AppContext";
import reducer from "../reducers/";
import { EventsState } from "../types/events/State";
import { OperationLogsState } from "../types/operationLogs/State";
import OperationLogs from "./OperationLogs";

type InitialState = {
  events: EventsState[];
  operationLogs: OperationLogsState[];
};

const App = () => {
  const initialState: InitialState = {
    events: [],
    operationLogs: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SetAppContextProvider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </SetAppContextProvider>
  );
};

export default App;
