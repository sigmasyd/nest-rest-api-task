import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdatedTaskDto } from './dto/task.dto';

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
  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdatedTaskDto) {
    return this.taskService.updateTasks(id, updatedFields);
  }
  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.taskService.deleteTasks(id);
  }
}
