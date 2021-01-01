import style from "./App.module.scss";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className={style.app}>
      <div className={style.title}>
        <h1>
          Todo<span>List</span>
        </h1>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
