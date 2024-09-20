import { ExchangeRateProps } from '@/components/ui/ExchangeRate/ExchangeRate.interface';

export const exchangeRateData: ExchangeRateProps[] = [
  {
    id: 'USD <--> UAH',
    baseCurrency: 'USD',
    targetCurrency: 'UAH',
    amount: 1,
  },
  {
    id: 'EUR <--> UAH',
    baseCurrency: 'EUR',
    targetCurrency: 'UAH',
    amount: 1,
  },
];
