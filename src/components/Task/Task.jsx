import { MdClose } from 'react-icons/md';
import css from './Task.module.css';

export const Task = ({ text, completed }) => {
  return (
    <li className={css.listItem}>
      <div className={css.wrapper}>
        <input type="checkbox" className={css.checkbox} checked={completed} />
        <p className={css.text}>{text}</p>
        <button className={css.btn}>
          <MdClose size={22} />
        </button>
      </div>
    </li>
  );
};
