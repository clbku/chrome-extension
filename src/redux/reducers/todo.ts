import { TaskAction } from "../actions/todo";
import { TodoConst } from "../consts";
import { TodoState } from "../definitions/todo";

const initState: TodoState = {};

export function todoReducer(
  state: TodoState = initState,
  action: TaskAction
): TodoState {
  switch (action.type) {
    case TodoConst.ADD_TASK: {
      console.log(action.payload);
      if (action.payload.taskId) {
        if (!state[action.payload.taskId])
          return {
            ...state,
            ...{ [action.payload.taskId]: action.payload.task },
          };
        return state;
      }
      console.log("b");
      const countUserTask = Object.keys(state).filter((id) =>
        id.includes("user-")
      ).length;
      return {
        ...state,
        ...{ [`user-${countUserTask}`]: action.payload.task },
      };
    }

    default: {
      return state;
    }
  }
}
