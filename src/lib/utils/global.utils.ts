export const calculateRateToTargetCurrency = (
  conversionRate: number,
  amount: number
): number => Number((conversionRate * amount).toFixed(2));

export const calculateRateToBaseCurrency = (
  conversionRate: number,
  amount: number
): number => Number((amount / conversionRate).toFixed(2));

export const ensureAppRunning = (
  isLoading: boolean,
  isFetching: boolean
): boolean => !isLoading && !isFetching;
