import { Button } from 'components/Button/Button';
import { useSelector } from 'react-redux';
import { getStatusFilter } from 'redux/selectors';
import { statusFilters } from 'redux/constants';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);

  return (
    <div className={css.statusFilter}>
      <h2 className={css.title}>Filter by status:</h2>
      <div className={css.wrapper}>
        <Button selected={filter === statusFilters.all}>All</Button>
        <Button selected={filter === statusFilters.active}>Active</Button>
        <Button selected={filter === statusFilters.completed}>Completed</Button>
      </div>
    </div>
  );
};
