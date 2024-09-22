import { Aria, CurrencyConverterFormFieldName } from '@/shared/types/globals';
import { ChangeEventHandler } from 'react';

export interface CurrencyInputProps
  extends CurrencyConverterFormFieldName,
    Aria {
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}
