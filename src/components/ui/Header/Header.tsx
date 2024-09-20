import { exchangeRateData } from '@/lib/data/exchangeRate.data';
import { ExchangeRate } from '../ExchangeRate/ExchangeRate';
import styles from './Header.module.scss';

export const Header = (): React.JSX.Element => (
  <header className={styles.header}>
    {exchangeRateData.map(({ amount, baseCurrency, id, targetCurrency }) => (
      <ExchangeRate
        key={id}
        id={id}
        baseCurrency={baseCurrency}
        targetCurrency={targetCurrency}
        amount={amount}
      />
    ))}
  </header>
);
