export interface Action<Data> {
  type: string;
  data: Data;
}

export interface ReducerAction {
  type: string;
  data: any;
}
