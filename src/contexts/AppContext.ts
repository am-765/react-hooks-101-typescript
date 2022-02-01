import createCtx from "../contexts";

type appContextType = string;

export const [useAppContext, SetAppContextProvider] =
  createCtx<appContextType>();
