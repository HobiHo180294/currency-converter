'use client';

import { currencies } from '@/lib/data/currency.data';
import {
  Currency,
  CurrencyConverterFormFieldsConfig,
} from '@/shared/types/globals';
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { AdvancedImage } from '../../ui/AdvancedImage/AdvancedImage';
import { CurrencySelectProps } from './CurrencySelect.interface';
import styles from './CurrencySelect.module.scss';

export const CurrencySelect = ({
  name,
  value,
  disabled,
}: CurrencySelectProps): React.JSX.Element => {
  const { register } = useFormContext<CurrencyConverterFormFieldsConfig>();

  const selectedCurrency = useMemo<Currency | undefined>(
    () => currencies.find(({ code }) => code === value),
    [value]
  );

  return (
    <div className={styles['currency-select']}>
      <div className={styles['money-group']}>
        <AdvancedImage
          src={`https://flagcdn.com/${selectedCurrency?.flag}.svg`}
          alt={`${selectedCurrency?.flag}`}
          width="40"
          height="30"
        />
        <select
          id={name}
          className={styles['money-group__select']}
          {...register(name, {
            required: true,
            disabled,
          })}
        >
          {currencies.map(({ code }) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
