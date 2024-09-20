'use client';

import {
  CurrencyConverterFormFieldName,
  CurrencyConverterFormFieldsConfig,
} from '@/shared/types/globals';
import styles from '@/styles/templates.module.scss';
import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';

export const CurrencyError = ({
  name,
}: CurrencyConverterFormFieldName): React.JSX.Element => {
  const {
    formState: { errors },
  } = useFormContext<CurrencyConverterFormFieldsConfig>();

  return (
    <ErrorMessage
      as="div"
      className={styles.error}
      name={name}
      errors={errors}
    />
  );
};
