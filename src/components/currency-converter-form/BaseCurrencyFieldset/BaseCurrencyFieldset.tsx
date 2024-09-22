'use client';

import { BASE_AMOUNT_CURRENCY_ERROR_ID } from '@/lib/constants/form.constants';
import { useCurrencyFieldset } from '@/lib/hooks';
import { disableCurrencyFormField } from '@/lib/utils/form.utils';
import {
  calculateRateToTargetCurrency,
  ensureAppRunning,
} from '@/lib/utils/global.utils';
import { CurrencyConverterFormFieldsConfig } from '@/shared/types/globals';
import styles from '@/styles/templates.module.scss';
import { ChangeEventHandler, useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { CurrencyError } from '../CurrencyError/CurrencyError';
import { CurrencyInput } from '../CurrencyInput/CurrencyInput';
import { CurrencySelect } from '../CurrencySelect/CurrencySelect';

export const BaseCurrencyFieldset = (): React.JSX.Element => {
  const { setValue, getValues } =
    useFormContext<CurrencyConverterFormFieldsConfig>();

  const { baseCurrency, exchangeRateQueryResult } = useCurrencyFieldset();
  const { data, isLoading, isFetching } = exchangeRateQueryResult;

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
        describedBy={BASE_AMOUNT_CURRENCY_ERROR_ID}
      />

      <CurrencySelect
        name="baseCurrency"
        value={baseCurrency}
        disabled={disableCurrencyFormField(isLoading, isFetching)}
        describedBy={BASE_AMOUNT_CURRENCY_ERROR_ID}
      />

      <CurrencyError id={BASE_AMOUNT_CURRENCY_ERROR_ID} name="baseAmount" />
    </fieldset>
  );
};
