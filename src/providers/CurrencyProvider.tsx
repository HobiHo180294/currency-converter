'use client';

import { CurrencyConverterFormFieldsConfig } from '@/components/CurrencyConverterForm/CurrencyConverterForm.interface';
import { useTypedContext } from '@/lib/hooks';
import { Children, Nullable } from '@/shared/types/globals';
import { createContext, useMemo, useState } from 'react';

interface CurrencyContextDeclaration extends CurrencyConverterFormFieldsConfig {
  updateAmount: (amount: CurrencyConverterFormFieldsConfig['amount']) => void;
  updateFromCurrency: (
    currency: CurrencyConverterFormFieldsConfig['fromCurrency']
  ) => void;
  updateToCurrency: (
    currency: CurrencyConverterFormFieldsConfig['toCurrency']
  ) => void;
}

const CurrencyContext =
  createContext<Nullable<CurrencyContextDeclaration>>(null);

export const CurrencyProvider = ({ children }: Children): React.JSX.Element => {
  const [amount, setAmount] =
    useState<CurrencyContextDeclaration['amount']>(100);
  const [fromCurrency, setFromCurrency] =
    useState<CurrencyContextDeclaration['fromCurrency']>('USD');
  const [toCurrency, setToCurrency] =
    useState<CurrencyContextDeclaration['toCurrency']>('UAH');

  const updateAmount: CurrencyContextDeclaration['updateAmount'] = newAmount =>
    setAmount(newAmount);
  const updateFromCurrency: CurrencyContextDeclaration['updateFromCurrency'] =
    currency => setFromCurrency(currency);
  const updateToCurrency: CurrencyContextDeclaration['updateToCurrency'] =
    currency => setToCurrency(currency);

  const providerValue = useMemo<CurrencyContextDeclaration>(
    () => ({
      amount,
      fromCurrency,
      toCurrency,
      updateAmount,
      updateFromCurrency,
      updateToCurrency,
    }),
    [amount, fromCurrency, toCurrency]
  );

  return (
    <CurrencyContext.Provider value={providerValue}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrencyContext = (): CurrencyContextDeclaration => {
  const context = useTypedContext<CurrencyContextDeclaration>(CurrencyContext);
  return context;
};
