'use client';

import { CurrencyConverterFormFieldsConfig } from '@/components/CurrencyConverterForm/CurrencyConverterForm.interface';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getCurrentExchangeRate } from '../actions';

export const useCurrentExchangeRate = ({
  amount,
  fromCurrency,
  toCurrency,
}: CurrencyConverterFormFieldsConfig): UseQueryResult<string, Error> =>
  useQuery({
    queryKey: ['current-exchange-rate', amount, fromCurrency, toCurrency],
    queryFn: () => getCurrentExchangeRate({ amount, fromCurrency, toCurrency }),
    enabled: !!amount && !!fromCurrency && !!toCurrency,
  });
