import { Actions } from "./Actions";
import { State } from "./State";

export type Props = {
  event?: State;
  state?: State[];
  dispatch: React.Dispatch<Actions>;
};
