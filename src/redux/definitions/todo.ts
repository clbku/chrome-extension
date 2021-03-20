import { Moment } from "moment";

export interface Task {
  name: string;
  description: string;
  from?: Moment;
  to?: Moment;
  isDone: boolean;
}

export interface TodoState {
  [key: string]: Task;
}
