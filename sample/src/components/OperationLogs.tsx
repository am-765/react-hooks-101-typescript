import OperationLog from "./OperationLog";
import { useAppContext } from "../contexts/AppContext";

const OperationLogs = () => {
  const { state } = useAppContext();
  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operationLog) => {
            return (
              <OperationLog
                key={operationLog.operatedAd}
                {...{ operationLog }}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
