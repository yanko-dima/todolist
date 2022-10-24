import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/actions';
import { toggleCompleted } from 'redux/actions';
import { MdClose } from 'react-icons/md';
import css from './Task.module.css';

export const Task = ({ taskId, text, completed }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
  };

  const handleToggle = () => {
    dispatch(toggleCompleted(taskId));
  };

  return (
    <li className={css.listItem}>
      <div className={css.wrapper}>
        <input
          type="checkbox"
          className={css.checkbox}
          checked={completed}
          onChange={handleToggle}
        />
        <p className={css.text}>{text}</p>
        <button className={css.btn} onClick={handleDelete}>
          <MdClose size={22} />
        </button>
      </div>
    </li>
  );
};
