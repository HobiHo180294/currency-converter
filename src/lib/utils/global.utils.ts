export const calculateRateToTargetCurrency = (
  conversionRate: number,
  amount: number
): number => Number((conversionRate * amount).toFixed(2));

export const calculateRateToBaseCurrency = (
  conversionRate: number,
  amount: number
): number => Number((amount / conversionRate).toFixed(2));

export const generateRequiredError = (
  fieldName: string = 'required field'
): string => `Please fiil in the ${fieldName}! `;

export const generateMinError = (min: number): string =>
  `Value must be at least ${min}`;

export const disableCurrencyFormField = (
  isLoading: boolean,
  isFetching: boolean
): boolean => !!(isLoading || isFetching);

export const ensureAppRunning = (
  isLoading: boolean,
  isFetching: boolean
): boolean => !isLoading && !isFetching;

export const normalizeNumericInput = (value: string): number => {
  let valueCopy = value.replace(/^0+/, '');
  if (valueCopy === '') valueCopy = '0';
  const numericValue = parseFloat(valueCopy);

  return Number.isNaN(numericValue) ? 0 : numericValue;
};
