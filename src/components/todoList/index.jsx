import styles from "./styles.module.css";
import { useContext } from "react";
import { TodosContext } from "../../context/todosContext";

function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useContext(TodosContext);

  return (
    <div className={styles.list}>
      {todos.length === 0 ? (
        <p className={styles.emptyMessage}>Нет задач. Добавьте новую!</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} className={styles.todo}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              id={`checkbox-${todo.id}`}
            />
            <label
              htmlFor={`checkbox-${todo.id}`}
              className={`${styles.label} ${todo.completed ? styles.labelDone : ""}`}
            >
              {todo.todo}
            </label>
            <button
              className={styles.deleteButton}
              onClick={() => deleteTodo(todo.id)}
            >
              {"\u2715"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TodoList;
