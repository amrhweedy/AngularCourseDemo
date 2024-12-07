import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [FormsModule, SharedModule, CommonModule],
})
export class TasksModule {}

// we need date pipe in the task component so we import the CommonModule not the BrowserModule , becuase BrowserModule is imported only in the root module which is the appModule
// CommonModule contains features like the DatePipe
