import { useContext, useState } from "react";
import { TodosContext } from "../../context/todosContext";
import styles from "./styles.module.css";

function AddTodoForm() {
  const { addTodo } = useContext(TodosContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;

    addTodo(text);
    setInputValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.formInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Добавить новую задачу..."
        required
      />
      <button className={styles.formButton}>+</button>
    </form>
  );
}

export default AddTodoForm;
