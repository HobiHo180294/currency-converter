import { CurrencyConverterFormFieldsConfig } from '@/components/CurrencyConverterForm/CurrencyConverterForm.interface';
import { Currency } from '@/shared/types/globals';
import { UseFormRegister } from 'react-hook-form';

export interface CurrencySelectProps {
  name: keyof CurrencyConverterFormFieldsConfig;
  register: UseFormRegister<CurrencyConverterFormFieldsConfig>;
  value: Currency['code'];
  excludeCurrency: Currency['code'];
}
