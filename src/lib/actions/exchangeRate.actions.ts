'use server';

import { CurrencyConverterFormFieldsConfig } from '@/components/CurrencyConverterForm/CurrencyConverterForm.interface';
import { ExchangeRateResponse } from '@/shared/types/server';

export async function getCurrentExchangeRate({
  fromCurrency,
  toCurrency,
  amount,
}: CurrencyConverterFormFieldsConfig): Promise<string> {
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}/pair/${fromCurrency}/${toCurrency}`
  );

  const data: ExchangeRateResponse = await response.json();
  const rate = (data.conversion_rate * amount).toFixed(2);

  return `${amount} ${fromCurrency} = ${rate} ${toCurrency}`;
}
