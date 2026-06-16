import { Component, inject, signal } from '@angular/core';
import { TasksRestService, Task } from '../../core/services/tasks-rest-service';


@Component({
  selector: 'app-add-task-component',
  imports: [],
  templateUrl: './add-task-component.html',
  styleUrl: './add-task-component.css',
})
export class AddTaskComponent {
  private taskServ = inject(TasksRestService)

  title: string = ''
  description: string = ''

  loadedTasks = signal<Task[]>([])
  errorMsg:string = ''

  constructor(){
    this.loadTask()
  }

  loadTask() {
    this.taskServ.getTask().subscribe(
      {
        next: tasks => {
          this.loadedTasks.set(tasks),
          this.errorMsg = ''
        },
        error: err => this.errorMsg = err.message
      })
  }
}
