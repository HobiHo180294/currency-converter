'use client';

import { TARGET_AMOUNT_CURRENCY_ERROR_ID } from '@/lib/constants/form.constants';
import { useCurrencyFieldset } from '@/lib/hooks';
import { disableCurrencyFormField } from '@/lib/utils/form.utils';
import {
  calculateRateToBaseCurrency,
  ensureAppRunning,
} from '@/lib/utils/global.utils';
import { CurrencyConverterFormFieldsConfig } from '@/shared/types/globals';
import styles from '@/styles/templates.module.scss';
import { ChangeEventHandler, useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { CurrencyError } from '../CurrencyError/CurrencyError';
import { CurrencyInput } from '../CurrencyInput/CurrencyInput';
import { CurrencySelect } from '../CurrencySelect/CurrencySelect';

export const TargetCurrencyFieldset = (): React.JSX.Element => {
  const { setValue, getValues } =
    useFormContext<CurrencyConverterFormFieldsConfig>();

  const { targetCurrency, exchangeRateQueryResult } = useCurrencyFieldset();
  const { data, isLoading, isFetching } = exchangeRateQueryResult;

  useEffect(() => {
    if (targetCurrency) {
      const targetAmount = getValues('targetAmount');

      if (targetAmount && data && ensureAppRunning(isLoading, isFetching))
        setValue('baseAmount', calculateRateToBaseCurrency(data, targetAmount));
    }
  }, [data, targetCurrency, getValues, isFetching, isLoading, setValue]);

  const handleTargetAmountInputChange = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(
    event => {
      const amount = Number(event.target.value);

      if (data && !isLoading)
        setValue('baseAmount', calculateRateToBaseCurrency(data, amount));
    },
    [data, isLoading, setValue]
  );

  return (
    <fieldset className={styles.fieldset}>
      <CurrencyInput
        name="targetAmount"
        onChange={handleTargetAmountInputChange}
        disabled={disableCurrencyFormField(isLoading, isFetching)}
        describedBy={TARGET_AMOUNT_CURRENCY_ERROR_ID}
      />

      <CurrencySelect
        name="targetCurrency"
        value={targetCurrency}
        disabled={disableCurrencyFormField(isLoading, isFetching)}
        describedBy={TARGET_AMOUNT_CURRENCY_ERROR_ID}
      />

      <CurrencyError id={TARGET_AMOUNT_CURRENCY_ERROR_ID} name="targetAmount" />
    </fieldset>
  );
};
