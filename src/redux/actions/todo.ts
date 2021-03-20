import { TodoConst } from "../consts";
import { Task } from "../definitions/todo";
import { typedAction } from "../definitions/typed";

export const addTask = (task: Task, taskId?: string) => {
  return typedAction(TodoConst.ADD_TASK, { task, taskId });
};

export type TaskAction = ReturnType<typeof addTask>;
