import { useTodoStore } from '../store/useTodoStore'
import { TodoItem } from './TodoItem'

export function TodoList() {
  const tasks = useTodoStore((state) => state.tasks)

  if (tasks.length === 0) {
    return <p className="empty-message">Nessun task presente nello store.</p>
  }

  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </section>
  )
}
