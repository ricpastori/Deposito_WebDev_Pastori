import { useTodoStore } from '../store/useTodoStore'

const priorities = ['High', 'Medium', 'Low']

export function TodoItem({ task }) {
  const deleteTask = useTodoStore((state) => state.deleteTask)
  const toggleCompletion = useTodoStore((state) => state.toggleCompletion)
  const updatePriority = useTodoStore((state) => state.updatePriority)
  const taskClassName = `grid task priority-${task.priority.toLowerCase()}${
    task.isCompleted ? ' task-completed' : ''
  }`
  const textClassName = task.isCompleted ? 'completed' : ''

  return (
    <article className={taskClassName}>
      <label className="task-title">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => toggleCompletion(task.id)}
        />
        <span className={textClassName}>{task.text}</span>
      </label>

      <div className="grid task-actions">
        <select
          value={task.priority}
          onChange={(event) => updatePriority(task.id, event.target.value)}
        >
          {priorities.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <button
          type="button"
          className="secondary outline"
          onClick={() => deleteTask(task.id)}
        >
          Elimina
        </button>
      </div>
    </article>
  )
}
