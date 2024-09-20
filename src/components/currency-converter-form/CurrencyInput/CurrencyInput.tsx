'use client';

import {
  generateMinError,
  generateRequiredError,
  normalizeNumericInput,
} from '@/lib/utils/global.utils';
import { CurrencyConverterFormFieldsConfig } from '@/shared/types/globals';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { CurrencyInputProps } from './CurrencyInput.interface';
import styles from './CurrencyInput.module.scss';

export const CurrencyInput = ({
  name,
  onChange,
  disabled,
}: CurrencyInputProps): React.JSX.Element => {
  const { register, setValue } =
    useFormContext<CurrencyConverterFormFieldsConfig>();

  return (
    <label htmlFor={name}>
      <input
        id={name}
        className={styles.input}
        type="number"
        placeholder="0"
        inputMode="numeric"
        {...register(name, {
          valueAsNumber: true,
          min: {
            value: 0.1,
            message: generateMinError(0.1),
          },
          required: {
            value: true,
            message: generateRequiredError(),
          },
          disabled,
          onChange: (event: ChangeEvent<HTMLInputElement>) => {
            const normalizedValue = normalizeNumericInput(event.target.value);
            setValue(name, normalizedValue);
            onChange(event);
          },
        })}
      />
    </label>
  );
};
