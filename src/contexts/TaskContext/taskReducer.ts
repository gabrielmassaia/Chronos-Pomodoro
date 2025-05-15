import { TaskStateModel } from '../../models/TaskStateModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { TaskActionModel, TaskActionTypes } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      // setState(prevState => {
      //   return {
      //     ...prevState,
      //     config: { ...prevState.config },
      //     activeTask: newTask,
      //     currentCycle: nextCycle,
      //     secondsRemaining,
      //     formattedSecondsRemaining: formattedSecondsToMinuted(secondsRemaining),
      //     tasks: [...prevState.tasks, newTask],
      //   };
      // });
      const newTask = action.payload;
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: getNextCycle(state.currentCycle),
        secondsRemaining,
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      return state;
    }

    case TaskActionTypes.RESET: {
      return state;
    }
  }
  return state;
}
