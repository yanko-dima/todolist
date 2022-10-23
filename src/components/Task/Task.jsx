import css from './Task.module.css';

export const Task = ({ text, complited }) => {
  return <li className={css.listItem}>{text}</li>;
};
