'use server';

import { ExchangeRateResponse } from '@/shared/types/api';
import { CurrencyPair } from '@/shared/types/globals';

export async function getCurrentExchangeRate({
  baseCurrency,
  targetCurrency,
}: CurrencyPair): Promise<number> {
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}/pair/${baseCurrency}/${targetCurrency}`
  );

  const data: ExchangeRateResponse = await response.json();

  return data.conversion_rate;
}
