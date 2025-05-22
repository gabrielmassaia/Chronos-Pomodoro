import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskContext';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const [] = useReducer((state, action) => {
    return state;
  });

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>Testando</h1>
    </TaskContext.Provider>
  );
}
