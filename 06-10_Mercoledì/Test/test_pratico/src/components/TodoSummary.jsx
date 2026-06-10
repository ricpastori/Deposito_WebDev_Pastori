import { useTodoStore } from '../store/useTodoStore'

export function TodoSummary() {
  const tasks = useTodoStore((state) => state.tasks)
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <div className="grid todo-summary">
      <article className="summary-card">
        <span>Task totali</span>
        <span className="summary-emoji">📝 {tasks.length}</span>      
      </article>

      <article className="summary-card">
        <span>Ancora da fare</span>
        <span className="summary-emoji">🏗️ {tasks.length - completedTasks}</span>
      </article>

      <article className="summary-card">
        <span>Completati</span>
        <span className="summary-emoji">✅ {completedTasks}</span>
      </article>
    </div>
  )
}
