export type State = { id: number; title: string; body: string };

type CreateAction = {
  type: "CREATE_EVENT";
  title: string;
  body: string;
};

type DeleteAction = {
  type: "DELETE_EVENT";
  id: number;
};

type DeleteAllAction = {
  type: "DELETE_ALL_EVENT";
};

export type Actions = CreateAction | DeleteAction | DeleteAllAction;

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
