import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  return (
    <div className={css.statusFilter}>
      <h2 className={css.title}>Filter by status:</h2>
      <div className={css.wrapper}>
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Completed</Button>
      </div>
    </div>
  );
};
