import { State } from "../types/State";
import { Actions } from "../types/Actions";

const events = (state: State[], action: Actions) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];

    case "DELETE_EVENT":
      return state.filter((event) => event.id !== action.id);

    case "DELETE_ALL_EVENT":
      return [];

    default:
      return state;
  }
};

export default events;
