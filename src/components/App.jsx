import { AppBar } from './AppBar/AppBar';
import { Layaut } from './Layout/Layout';

export const App = () => {
  // InitialState
  const appState = {
    tasks: [
      { id: 0, text: 'Learn HTML and CSS', completed: true },
      { id: 1, text: 'Get good at JavaScript', completed: true },
      { id: 2, text: 'Master React', completed: false },
      { id: 3, text: 'Discover Redux', completed: false },
      { id: 4, text: 'Build amazing apps', completed: false },
    ],
    filtr: {
      status: 'all',
    },
  };

  // Actions
  const addTask = {};
  const deleteTask = {};
  const statusTogler = {};
  const statusFilter = {};

  return (
    <>
      <Layaut>
        <AppBar />
        <div>Search Form</div>
        <ul>
          <li>Task</li>
          <li>Task</li>
          <li>Task</li>
          <li>Task</li>
          <li>Task</li>
        </ul>
      </Layaut>
    </>
  );
};
