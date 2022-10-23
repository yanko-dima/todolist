import { useSelector } from 'react-redux';
import css from './TaskCounter.module.css';

export const TaskCouner = () => {
  const tasks = useSelector(state => state.tasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }

      return acc;
    },
    { active: 0, completed: 0 }
  );

  const { active, completed } = count;

  return (
    <div className={css.tasksCounter}>
      <h2 className={css.title}>Tasks:</h2>
      <ul className={css.tasksCounterList}>
        <li>Active: {active}</li>
        <li>Complited: {completed}</li>
      </ul>
    </div>
  );
};
