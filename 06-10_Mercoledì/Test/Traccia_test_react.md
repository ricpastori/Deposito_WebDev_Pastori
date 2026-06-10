## Traccia Architetturale: Todo List con Zustand

L'obiettivo è creare un sistema dove lo stato dei compiti vive solo nel *Store* di Zustand e tutti i componenti leggono o scrivono questo stato, senza dover sapere come gli altri componenti operano.

### I. Lo Store Centrale (Zustand) 

Questo sarà il cuore pulsante dell'applicazione. Definirà non solo quali dati esistono, ma anche *come* manipolarli.

**Nome:** `useTodoStore`
**Stato Iniziale (`state`):** Un array vuoto di compiti.

```typescript
interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
  priority: 'High' | 'Medium' | 'Low';
}

// Stato globale (immagineremo un array Tasks)
const initialStoreState = [/* Array di Task iniziali */];
```

**Azioni (`actions`):** Le funzioni che cambiano lo stato. Queste devono essere pure e immutabili.

1.  **`addTask(text, priority)`:** Aggiunge un nuovo oggetto `Task` all'array (ID unico generato qui).
2.  **`deleteTask(id)`:** Filtra l'array rimuovendo il task con quell'ID.
3.  **`toggleCompletion(id)`:** Trova il task e inverte il valore di `isCompleted`.
4.  **`updatePriority(id, newPriority)`:** Trova il task e aggiorna la sua proprietà `priority`.

Questa e' la struttura minima, sentitevi liberi di espandere!

Per la consegna inviate il link su GitHub di una cartella con un file con le risposte e il codice del progetto

