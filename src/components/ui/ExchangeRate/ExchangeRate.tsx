'use client';

import { useCurrentExchangeRate } from '@/lib/hooks';
import { useCurrencyContext } from '@/providers/CurrencyProvider';

export const ExchangeRate = (): React.JSX.Element => {
  const { amount, fromCurrency, toCurrency } = useCurrencyContext();

  const { data, isError, isLoading } = useCurrentExchangeRate({
    amount,
    fromCurrency,
    toCurrency,
  });

  return <div>{isLoading ? 'Loading...' : isError ? 'Error...' : data}</div>;
};
