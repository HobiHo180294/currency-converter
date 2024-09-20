import { ReactNode } from 'react';

export interface WithID {
  id: string;
}

export interface Children {
  children: ReactNode;
}

export interface Currency {
  code: 'USD' | 'EUR' | 'UAH';
  flag: string;
}

export interface CurrencyPair {
  baseCurrency: Currency['code'];
  targetCurrency: Currency['code'];
}

export interface CurrencyConverterFormFieldsConfig extends CurrencyPair {
  baseAmount: number;
  targetAmount: number;
}

export interface CurrencyConverterFormFieldName {
  name: keyof CurrencyConverterFormFieldsConfig;
}
