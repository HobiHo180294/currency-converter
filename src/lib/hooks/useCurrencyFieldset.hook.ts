'use client';

import {
  CurrencyConverterFormFieldsConfig,
  CurrencyPair,
} from '@/shared/types/globals';
import { UseQueryResult } from '@tanstack/react-query';
import { useFormContext, useWatch } from 'react-hook-form';
import { useCurrentExchangeRate } from './useCurrentExchangeRate.hook';

interface CurrencyFieldsetHookResult extends CurrencyPair {
  exchangeRateQueryResult: UseQueryResult<number, Error>;
}

export const useCurrencyFieldset = (): CurrencyFieldsetHookResult => {
  const { control } = useFormContext<CurrencyConverterFormFieldsConfig>();

  const baseCurrency = useWatch({ control, name: 'baseCurrency' });
  const targetCurrency = useWatch({ control, name: 'targetCurrency' });

  const exchangeRateQueryResult = useCurrentExchangeRate({
    baseCurrency,
    targetCurrency,
  });

  return { baseCurrency, targetCurrency, exchangeRateQueryResult };
};
