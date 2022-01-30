import React from "react";
import { Props } from "../types/Props";
import actionTypes from "../actions";

const Event: React.VFC<Props> = ({ event, dispatch }) => {
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
    <tr key={id}>
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
