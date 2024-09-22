'use client';

import { CurrencyConverterFormFieldsConfig } from '@/shared/types/globals';
import styles from '@/styles/templates.module.scss';
import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { CurrencyErrorProps } from './CurrencyError.interface';

export const CurrencyError = ({
  name,
  id,
}: CurrencyErrorProps): React.JSX.Element => {
  const {
    formState: { errors },
  } = useFormContext<CurrencyConverterFormFieldsConfig>();

  return (
    <ErrorMessage
      id={id}
      as="div"
      aria-live="polite"
      aria-atomic="true"
      className={styles.error}
      name={name}
      errors={errors}
    />
  );
};
