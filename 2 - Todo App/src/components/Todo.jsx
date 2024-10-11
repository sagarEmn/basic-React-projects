import CheckboxButton from "./CheckboxButton";
import DeleteButton from "./DeleteButton";

function Todo() {
  return (
    <>
      <main className="todo-app">
        {/* header-form container */}
        <div className="todo-app__header-form-container">
          <header>
            <h1 className="todo-app__header">Todo React App</h1>
          </header>
        </div>

        <section className="todo-app__list-section">
          <ul className="todo-app__list">
            <li className="todo-app__list__item">
              <CheckboxButton />
              Do Cleaning
              <DeleteButton />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Todo;
