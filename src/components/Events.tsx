import Event from "./Event";
import { useAppContext } from "../contexts/AppContext";

const Events = () => {
  const { state } = useAppContext();
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state?.map((event) => (
            <Event {...{ event }} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
