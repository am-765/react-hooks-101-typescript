import React from "react";
import createCtx from "../contexts";
import { State } from "../types/State";
import { Actions } from "../types/Actions";

type appContextType = {
  state: { events: State[] };
  dispatch: React.Dispatch<Actions>;
};

export const [useAppContext, SetAppContextProvider] =
  createCtx<appContextType>();
