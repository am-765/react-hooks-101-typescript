import React from "react";
import { State, Actions } from "../reducers";

type Props = {
  event: State;
  dispatch: React.Dispatch<Actions>;
};

const Event: React.VFC<Props> = ({ event, dispatch }) => {
  const id = event.id;
  const handleClickDeleteButton = () => {
    dispatch({
      type: "DELETE_EVENT",
      id,
    });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
