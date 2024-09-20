'use client';

import { useCurrentExchangeRate } from '@/lib/hooks';
import {
  calculateRateToTargetCurrency,
  disableCurrencyFormField,
  ensureAppRunning,
} from '@/lib/utils/global.utils';
import { CurrencyConverterFormFieldsConfig } from '@/shared/types/globals';
import styles from '@/styles/templates.module.scss';
import { ChangeEventHandler, useCallback, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { CurrencyError } from '../CurrencyError/CurrencyError';
import { CurrencyInput } from '../CurrencyInput/CurrencyInput';
import { CurrencySelect } from '../CurrencySelect/CurrencySelect';

export const BaseCurrencyFieldset = (): React.JSX.Element => {
  const { control, setValue, getValues } =
    useFormContext<CurrencyConverterFormFieldsConfig>();

  const baseCurrency = useWatch({ control, name: 'baseCurrency' });
  const targetCurrency = useWatch({ control, name: 'targetCurrency' });

  const { data, isLoading, isFetching } = useCurrentExchangeRate({
    baseCurrency,
    targetCurrency,
  });

  useEffect(() => {
    if (baseCurrency) {
      const baseAmount = getValues('baseAmount');

      if (baseAmount && data && ensureAppRunning(isLoading, isFetching))
        setValue(
          'targetAmount',
          calculateRateToTargetCurrency(data, baseAmount)
        );
    }
  }, [data, baseCurrency, getValues, isFetching, isLoading, setValue]);

  const handleBaseAmountInputChange = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(
    event => {
      const amount = Number(event.target.value);

      if (data && !isLoading)
        setValue('targetAmount', calculateRateToTargetCurrency(data, amount));
    },
    [data, isLoading, setValue]
  );

  return (
    <fieldset className={styles.fieldset}>
      <CurrencyInput
        name="baseAmount"
        onChange={handleBaseAmountInputChange}
        disabled={disableCurrencyFormField(isLoading, isFetching)}
      />

      <CurrencySelect
        name="baseCurrency"
        value={baseCurrency}
        disabled={disableCurrencyFormField(isLoading, isFetching)}
      />

      <CurrencyError name="baseAmount" />
    </fieldset>
  );
};
