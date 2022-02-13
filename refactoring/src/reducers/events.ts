import { eventsActionTypes } from "../actions";
import { EventsState } from "../types/events/State";
import { EventsAction } from "../types/events/Action";

const events = (state: EventsState[] = [], action: EventsAction) => {
  switch (action.type) {
    case eventsActionTypes.CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];

    case eventsActionTypes.DELETE_EVENT:
      return state.filter((event) => event.id !== action.id);

    case eventsActionTypes.DELETE_ALL_EVENT:
      return [];

    default:
      return state;
  }
};

export default events;
