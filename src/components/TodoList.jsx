import { useTodoContext } from "../providers/TodoProvider";

const TodoList = () => {
  const { todoList, deleteTodo } = useTodoContext();
  const handleDelete = (item) => {
    deleteTodo(item);
  };
  return (
    <ul>
      {todoList.map((item, id) => (
        <li key={id}>
          {item} <button onClick={() => handleDelete(item)}>Del</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
