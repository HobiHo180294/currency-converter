import { CurrencyConverterFormFieldName } from '@/shared/types/globals';
import { ChangeEventHandler } from 'react';

export interface CurrencyInputProps extends CurrencyConverterFormFieldName {
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}
