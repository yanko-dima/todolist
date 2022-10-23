import { AppBar } from './AppBar/AppBar';
import { Layaut } from './Layout/Layout';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

export const App = () => {
  // Actions
  const addTask = {};
  const deleteTask = {};
  const statusTogler = {};
  const statusFilter = {};

  return (
    <>
      <Layaut>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layaut>
    </>
  );
};
