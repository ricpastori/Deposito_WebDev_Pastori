export function TaskFilter({ tasks, showOnlyPending }) {
  const styleConfig = {
    done: {
      padding: '4px',
      color: '#888',
      border: '1px solid #ccc',
      marginBottom: '4px',
      backgroundColor: '#f0f0f0',
    },
    pending: {
      padding: '4px',
      color: '#333',
      border: '1px solid #333',
      marginBottom: '4px',
      backgroundColor: '#fff',
    },
  };

  return (
    <div className="task-container">
      <h3>Elenco Attività</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks
          // Filtriamo l'array prima di convertirlo in JSX
          .filter(task => !showOnlyPending || !task.completed)
          .map(task => (
            <li key={task.id} style={task.completed ? styleConfig.done : styleConfig.pending}>
              {task.title}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TaskFilter;