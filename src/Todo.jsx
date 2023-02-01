import { useDispatch } from "react-redux";
import "./Todo.css";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: todo.id,
    });
  };
  return (
    <div className="todo-out">
      <p>{todo.label}</p>
      <i className="bi bi-bucket" onClick={deleteTodo} />
    </div>
  );
};

export default Todo;
