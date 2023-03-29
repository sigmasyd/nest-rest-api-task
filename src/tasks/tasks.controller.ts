import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTask() {
    return this.taskService.getAllTasks();
  }
  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.taskService.createTasks(newTask.title, newTask.description);
  }
}
