import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { addTask } from "../redux/actions/todo";

export default function useTodo() {
  const todo = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  return {
    tasks: Object.keys(todo).map((key) => todo[key]),
    addTask: () => {
      dispatch(addTask({ name: "asd", description: "asd", isDone: false }));
    },
  };
}
