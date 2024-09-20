'use client';

import { Children } from '@/shared/types/globals';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export const CurrencyConverterFormProvider = ({
  children,
}: Children): React.JSX.Element => {
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      baseCurrency: 'USD',
      targetCurrency: 'UAH',
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
