import { TaskModel } from './TaskModel';

// Estado -> Componente -> Filhos

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
