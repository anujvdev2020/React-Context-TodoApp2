import { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider";
const TodoForm = () => {
  const { addTodo, todoList, getNumberOfTodoItems } = useTodoContext();
  const [item, setItem] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo(item);
    setItem("");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Number of Todo Items:{getNumberOfTodoItems()}</h2>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
