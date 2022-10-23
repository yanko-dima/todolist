import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';

const tasks = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const TaskList = () => {
  return (
    <ul className={css.list}>
      {tasks.map(({ id, text, completed }) => (
        <Task key={id} text={text} completed={completed} />
      ))}
    </ul>
  );
};
