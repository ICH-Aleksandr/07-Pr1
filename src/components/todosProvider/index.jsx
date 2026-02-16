import styles from "./styles.module.css";
import { TodosProvider } from "../../context/todosContext";
import AddTodoForm from "../addTodoForm";
import TodoList from "../todoList";

function TodosProviderComponent() {
  return (
    <TodosProvider>
      <div>
        <h2>Список дел</h2>
        <AddTodoForm />
        <TodoList />
      </div>
    </TodosProvider>
  );
}

export default TodosProviderComponent;
