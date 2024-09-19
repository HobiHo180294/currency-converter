export const generateRequiredError = (
  fieldName: string = 'required field'
): string => `Please fiil in the ${fieldName}! `;

export const generateMinError = (min: number): string =>
  `Value must be at least ${min}`;
