import { currencies } from '@/lib/data/currency.data';
import { Currency } from '@/shared/types/globals';
import Image from 'next/image';
import { useMemo } from 'react';
import { CurrencySelectProps } from './CurrencySelect.interface';
import styles from './CurrencySelect.module.scss';

export const CurrencySelect = ({
  name,
  register,
  value,
  excludeCurrency,
}: CurrencySelectProps): React.JSX.Element => {
  const availableCurrencies = useMemo<Currency[]>(
    () => currencies.filter(({ code }) => code !== excludeCurrency),
    [excludeCurrency]
  );

  const selectedCurrency = useMemo<Currency | undefined>(
    () => currencies.find(({ code }) => code === value),
    [value]
  );

  return (
    <div className={styles['currency-select']}>
      <div>
        <label htmlFor={name}>{name === 'fromCurrency' ? 'From' : 'To'}</label>
      </div>
      <div className={styles['money-group']}>
        <Image
          src={`https://flagcdn.com/${selectedCurrency?.flag}.svg`}
          alt={`${selectedCurrency?.flag}`}
          width="40"
          height="30"
        />
        <select
          id={name}
          {...register(name, {
            required: true,
          })}
        >
          {availableCurrencies.map(({ code }) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
