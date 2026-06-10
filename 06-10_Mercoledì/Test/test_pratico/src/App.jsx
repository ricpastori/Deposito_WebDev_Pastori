import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { TodoSummary } from './components/TodoSummary'

function App() {
  return (
    <main className="container app-shell">
      <header className="app-header">
        <h1>Todo List</h1>
      </header>

      <TodoSummary />
      <hr className="section-divider" />
      <TodoForm />
      <hr className="section-divider" />
      <TodoList />
    </main>
  )
}

export default App
