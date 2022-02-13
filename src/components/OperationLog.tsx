import React from "react";
import { OperationLogsState } from "../types/operationLogs/State";

type Props = {
  operationLog: OperationLogsState;
};

const OperationLog: React.VFC<Props> = ({ operationLog }) => {
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAd}</td>
    </tr>
  );
};

export default OperationLog;
