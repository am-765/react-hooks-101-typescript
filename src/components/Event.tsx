import React from "react";
import { EventsState } from "../types/events/State";
import { eventsActionTypes, operationLogsActionTypes } from "../actions";
import { useAppContext } from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

type Props = {
  event: EventsState;
};

const Event: React.VFC<Props> = ({ event }) => {
  const { dispatch } = useAppContext();
  const id = event?.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `イベント(id=${id})を本当に削除してもいいですか？`
    );
    if (result) {
      dispatch({
        type: eventsActionTypes.DELETE_EVENT,
        id,
      });

      dispatch({
        type: operationLogsActionTypes.ADD_OPERATION_LOG,
        description: `イベント(id=${id})を削除しました`,
        operatedAt: timeCurrentIso8601(),
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
