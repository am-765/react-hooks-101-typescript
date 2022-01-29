type CreateAction = {
  type: "CREATE_EVENT";
  title: string;
  body: string;
};

type DeleteAction = {
  type: "DELETE_EVENT";
  id?: number;
};

type DeleteAllAction = {
  type: "DELETE_ALL_EVENT";
};

export type Actions = CreateAction | DeleteAction | DeleteAllAction;
