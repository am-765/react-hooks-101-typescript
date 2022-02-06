import React from "react";
import createCtx from "../contexts";
import { EventsState } from "../types/events/State";
import { EventsAction } from "../types/events/Action";
import { OperationLogsAction } from "../types/operationLogs/Action";

type AppContextType = {
  state: { events: EventsState[] };
  dispatch: React.Dispatch<EventsAction | OperationLogsAction>;
};

export const [useAppContext, SetAppContextProvider] =
  createCtx<AppContextType>();
