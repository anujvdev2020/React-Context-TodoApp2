import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoProvider from "./providers/TodoProvider";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
};
export default App;
// https://www.youtube.com/watch?v=piZppPZeeso
