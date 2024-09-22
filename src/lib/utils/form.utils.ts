export const generateRequiredError = (
  fieldName: string = 'required field'
): string => `Please fill in the ${fieldName}! `;

export const generateMinError = (min: number): string =>
  `Value must be at least ${min}`;

export const disableCurrencyFormField = (
  isLoading: boolean,
  isFetching: boolean
): boolean => !!(isLoading || isFetching);
