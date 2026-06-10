import { create } from 'zustand'

export const useTodoStore = create((set) => ({
  // Stato iniziale
  tasks: [],

  // Aggiunge un nuovo task
  addTask: (text, priority) => {
    set((state) => {
      if (text.trim() === '') {
        return state
      }

      const newTask = {
        id: Date.now().toString(),
        text: text.trim(),
        isCompleted: false,
        priority: priority,
      }

      return {
        tasks: [...state.tasks, newTask],
      }
    })
  },

  // Elimina un task tramite id
  deleteTask: (id) => {
    set((state) => {
      return {
        tasks: state.tasks.filter((task) => task.id !== id)
      }
    })
  },

  // Cambia lo stato completato / non completato
  toggleCompletion: (id) => {
    set((state) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted }
        }

        return task
      })

      return {
        tasks: updatedTasks,
      }
    })
  },

  // Aggiorna la priorita di un task
  updatePriority: (id, newPriority) => {
    set((state) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, priority: newPriority }
        }

        return task
      })

      return {
        tasks: updatedTasks,
      }
    })
  },
}))
