import { AriaAttributes, ReactNode } from 'react';

type CurrencyCode = 'USD' | 'EUR' | 'UAH';

export interface WithID {
  id: string;
}

export interface Children {
  children: ReactNode;
}

export interface LayoutProps<
  ParamsConfig extends Record<string, unknown> | undefined = undefined,
> extends Children {
  params?: ParamsConfig;
}

export interface Aria {
  describedBy: AriaAttributes['aria-describedby'];
}

export interface Currency {
  code: CurrencyCode;
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
