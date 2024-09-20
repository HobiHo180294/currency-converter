import { CurrencyPair, WithID } from '@/shared/types/globals';

export interface ExchangeRateProps extends CurrencyPair, WithID {
  id: string;
  amount: number;
}
