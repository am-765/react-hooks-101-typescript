import React from "react";
import { State } from "../types/State";
import actionTypes from "../actions";
import { useAppContext } from "../contexts/AppContext";

type Props = {
  event: State;
};

const Event: React.VFC<Props> = ({ event }) => {
  const { dispatch } = useAppContext();
  const id = event?.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `イベント(${id})を本当に削除してもいいですか？`
    );
    if (result) {
      dispatch({
        type: actionTypes.DELETE_EVENT,
        id,
      });
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{event?.title}</td>
      <td>{event?.body}</td>
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
