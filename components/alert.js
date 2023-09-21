import styles from './alert.module.css';
import clsx from 'clsx';

export default function Alert({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      <h1 className='text-red-400'>Ola</h1>
    </div>
  );
}
