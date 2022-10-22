import css from './TaskCounter.module.css';

export const TaskCouner = () => {
  return (
    <div className={css.tasksCounter}>
      <h2 className={css.title}>Tasks:</h2>
      <ul className={css.tasksCounterList}>
        <li>Active: 0</li>
        <li>Complited: 0</li>
      </ul>
    </div>
  );
};
