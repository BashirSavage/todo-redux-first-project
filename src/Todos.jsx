import Todo from "./Todo";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((item) => (
        <Todo todo={item} />
      ))}
    </div>
  );
};

export default Todos;
