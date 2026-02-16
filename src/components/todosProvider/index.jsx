import styles from "./styles.module.css";
import { TodosProvider } from "../../context/todosContext";
import AddTodoForm from "../addTodoForm";
import TodoList from "../todoList";

function TodosProviderComponent() {
  return (
    <TodosProvider>
      <div className={styles.container}>
        <h2 className={styles.title}>Список дел</h2>
        <AddTodoForm />
        <TodoList />
      </div>
    </TodosProvider>
  );
}

export default TodosProviderComponent;
