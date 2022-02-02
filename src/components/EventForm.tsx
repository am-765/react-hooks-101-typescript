import { useState } from "react";
import actionTypes from "../actions";
import { useAppContext } from "../contexts/AppContext";

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
      type: actionTypes.CREATE_EVENT,
      title,
      body,
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
        type: actionTypes.DELETE_ALL_EVENT,
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
          disabled={state?.length === 0}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
