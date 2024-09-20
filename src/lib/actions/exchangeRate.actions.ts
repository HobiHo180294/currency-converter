'use server';

import { CurrencyPair } from '@/shared/types/globals';
import { ExchangeRateResponse } from '@/shared/types/server';

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
