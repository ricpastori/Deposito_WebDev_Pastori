import TaskFilter from './components/TaskFilter'
import TeamList from './components/TeamList'
import './App.css'

function App() {
  const tasks = [
    { id: 1, title: 'Comprare il pane', completed: false },
    { id: 2, title: 'Fare la spesa', completed: true },
    { id: 3, title: 'Pulire la casa', completed: false },
    { id: 4, title: 'Andare in palestra', completed: true },
  ]

  return (
    <>
      <TeamList />
      <TaskFilter tasks={tasks} showOnlyPending={false} />
    </>
  )
}

export default App
