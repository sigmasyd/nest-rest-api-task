import { TaskStatus } from '../task.entity';

export class CreateTaskDto {
  title: string;
  description: string;
}

export class UpdatedTaskDto {
  title?: string;
  desription?: string;
  status?: TaskStatus;
}
