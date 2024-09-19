import { ExchangeRate } from '../ExchangeRate/ExchangeRate';
import styles from './Header.module.scss';

export const Header = (): React.JSX.Element => (
  <header className={styles.header}>
    <ExchangeRate />
  </header>
);
