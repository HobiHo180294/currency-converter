import styles from '@/styles/templates.module.scss';
import { ErrorProps } from './Error.interface';

export const Error = ({ message }: ErrorProps): React.JSX.Element => (
  <div className={styles.error}>{message || 'Something is going wrong!'}</div>
);
