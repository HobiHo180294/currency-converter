import {
  Aria,
  Currency,
  CurrencyConverterFormFieldName,
} from '@/shared/types/globals';

export interface CurrencySelectProps
  extends CurrencyConverterFormFieldName,
    Aria {
  value: Currency['code'];
  disabled?: boolean;
}
