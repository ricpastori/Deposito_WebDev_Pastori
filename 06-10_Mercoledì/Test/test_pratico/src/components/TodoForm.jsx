import { useState } from 'react'
import { useTodoStore } from '../store/useTodoStore'

const priorities = ['High', 'Medium', 'Low']

export function TodoForm() {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('Medium')
  const addTask = useTodoStore((state) => state.addTask)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!text.trim()) {
      return
    }

    addTask(text, priority)
    setText('')
    setPriority('Medium')
  }

  return (
    <article className="form-card">
      <h4>Nuovo task</h4>

      <form className="grid task-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task-text">Descrizione</label>
          <input
            id="task-text"
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Es. Finire il test di React"
            aria-describedby="task-text-help"
          />
          <small id="task-text-help">Il testo non puo essere vuoto.</small>
        </div>

        <div>
          <label htmlFor="task-priority">Priorita</label>
          <select
            id="task-priority"
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          >
            {priorities.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="form-submit">
          <button type="submit" disabled={!text.trim()}>
            Aggiungi
          </button>
        </div>
      </form>
    </article>
  )
}
