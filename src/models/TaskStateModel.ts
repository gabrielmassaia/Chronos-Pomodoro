import { TaskModel } from './TaskModel';

export type TaskStateModel = {
  task: TaskModel[];
  secondsReamaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    lomgBreakTime: number;
  };
};
