import { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddForm.css";

const AddForm = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleClick = () => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      },
    });
    setNewTodo("");
  };

  return (
    <div className="header">
      <input
        className="todo"
        value={newTodo}
        onChange={handleChange}
        type="text"
        placeholder="here your todo..."
      />
      <button onClick={handleClick}>Save Todo</button>
    </div>
  );
};

export default AddForm;
