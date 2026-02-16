import "./App.css";
import MyProvider from "./components/myProvider";
import { useContext } from "react";

function App() {
  return (
    <MyProvider>
      <TodosContext />
    </MyProvider>
  );
}

export default App;
