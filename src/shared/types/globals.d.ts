import { ReactNode } from 'react';

type CurrencyCode = 'USD' | 'EUR' | 'UAH';

export type Nullable<T> = T | null;

export interface Currency {
  code: CurrencyCode;
  flag: string;
}

export interface Children {
  children: ReactNode;
}

export interface LayoutProps<
  ParamsConfig extends Record<string, unknown> | undefined = undefined,
> extends Children {
  params?: ParamsConfig;
}

export interface CountryOption extends Flag {
  value: Currency;
  label: string;
}
