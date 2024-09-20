import {
  Currency,
  CurrencyConverterFormFieldName,
} from '@/shared/types/globals';

export interface CurrencySelectProps extends CurrencyConverterFormFieldName {
  value: Currency['code'];
  disabled?: boolean;
}
