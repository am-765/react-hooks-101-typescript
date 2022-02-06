type AddAction = {
  type: "ADD_OPERATION_LOG";
  description: string;
  operatedAt: string;
};

type DeleteAllAction = {
  type: "DELETE_ALL_OPERATION_LOGS";
};

export type OperationLogsAction = AddAction | DeleteAllAction;
