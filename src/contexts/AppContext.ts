import React from "react";
import createCtx from "../contexts";
import { EventsState } from "../types/events/State";
import { EventsAction } from "../types/events/Action";

type AppContextType = {
  state: { events: EventsState[] };
  dispatch: React.Dispatch<EventsAction>;
};

export const [useAppContext, SetAppContextProvider] =
  createCtx<AppContextType>();
