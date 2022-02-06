import { useState } from "react";
import { eventsActionTypes, operationLogsActionTypes } from "../actions";
import { useAppContext } from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

type PreventDefaultType = {
  preventDefault: () => void;
};

const EventForm = () => {
  const { state, dispatch } = useAppContext();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e: PreventDefaultType) => {
    e.preventDefault();

    dispatch({
      type: eventsActionTypes.CREATE_EVENT,
      title,
      body,
    });

    dispatch({
      type: operationLogsActionTypes.ADD_OPERATION_LOG,
      description: "イベントを作成しました",
      operatedAt: timeCurrentIso8601(),
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e: PreventDefaultType) => {
    e.preventDefault();
    const result = window.confirm(
      "すべてのイベントを本当に削除してもいいですか？"
    );
    if (result) {
      dispatch({
        type: eventsActionTypes.DELETE_ALL_EVENT,
      });

      dispatch({
        type: operationLogsActionTypes.ADD_OPERATION_LOG,
        description: "全てのイベントを削除しました",
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  const unCreatable = title === "" || body === "";
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </form>

      <form>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.events.length === 0}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
