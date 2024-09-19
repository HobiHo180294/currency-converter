import { Currency } from '@/shared/types/globals';

export interface CurrencyConverterFormFieldsConfig {
  amount: number;
  fromCurrency: Currency['code'];
  toCurrency: Currency['code'];
}
