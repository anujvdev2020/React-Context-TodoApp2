import { useContext, createContext, useState } from "react";

const TodoContext = createContext();

const initialTodoListState = ["Learn React"];
const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialTodoListState);
  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };
  const deleteTodo = (item) => {
    const temp = todoList.filter((it) => it != item);
    setTodoList(temp);
  };
  const getNumberOfTodoItems = () => todoList.length;

  const contextValue = {
    todoList,
    addTodo,
    getNumberOfTodoItems,
    deleteTodo
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
