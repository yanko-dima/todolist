import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/operations';
import { getIsLoading, getError } from 'redux/tasksSlice';
import { Layaut } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
    console.log(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Layaut>
        <AppBar />
        <TaskForm />
        {isLoading && !error && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        <TaskList />
      </Layaut>
    </>
  );
};
