import { operationLogsActionTypes } from "../actions";
import { OperationLogsAction } from "../types/operationLogs/Action";
import { OperationLogsState } from "../types/operationLogs/State";

const operationLogs = (
  state: OperationLogsState[] = [],
  action: OperationLogsAction
) => {
  switch (action.type) {
    case operationLogsActionTypes.ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAd: action.operatedAt,
      };
      return [operationLog, ...state];

    case operationLogsActionTypes.DELETE_ALL_OPERATION_LOGS:
      return [];

    default:
      return state;
  }
};

export default operationLogs;
