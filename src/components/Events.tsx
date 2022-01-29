import React from "react";
import Event from "./Event";
import { Props } from "../types/Props";

const Events: React.VFC<Props> = ({ state, dispatch }) => {
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
            <Event {...{ event, dispatch }} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
