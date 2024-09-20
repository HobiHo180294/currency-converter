'use client';

import { CurrencyPair } from '@/shared/types/globals';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getCurrentExchangeRate } from '../actions/exchangeRate.actions';

export const useCurrentExchangeRate = ({
  baseCurrency,
  targetCurrency,
}: CurrencyPair): UseQueryResult<number, Error> =>
  useQuery({
    queryKey: ['current-exchange-rate', baseCurrency, targetCurrency],
    queryFn: () =>
      getCurrentExchangeRate({
        baseCurrency,
        targetCurrency,
      }),
    enabled: !!baseCurrency && !!targetCurrency,
  });
