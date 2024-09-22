'use client';

import { CURRENCY_INPUT_MIN_VALUE } from '@/lib/constants/form.constants';
import {
  generateMinError,
  generateRequiredError,
} from '@/lib/utils/form.utils';
import { CurrencyConverterFormFieldsConfig } from '@/shared/types/globals';
import { FocusEventHandler, memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { CurrencyInputProps } from './CurrencyInput.interface';
import styles from './CurrencyInput.module.scss';

export const CurrencyInputComponent = ({
  name,
  onChange,
  disabled,
  describedBy,
}: CurrencyInputProps): React.JSX.Element => {
  const { register, setValue } =
    useFormContext<CurrencyConverterFormFieldsConfig>();

  const handleFocusEvent: FocusEventHandler<HTMLInputElement> = event => {
    const numericalValue = Number(event.target.value);
    setValue(name, numericalValue);
  };

  return (
    <label htmlFor={name}>
      <input
        id={name}
        className={styles.input}
        type="number"
        placeholder="0"
        inputMode="numeric"
        aria-disabled={disabled}
        aria-describedby={describedBy}
        {...register(name, {
          valueAsNumber: true,
          min: {
            value: CURRENCY_INPUT_MIN_VALUE,
            message: generateMinError(CURRENCY_INPUT_MIN_VALUE),
          },
          required: {
            value: true,
            message: generateRequiredError(),
          },
          disabled,
          onBlur: handleFocusEvent,
          onChange,
        })}
      />
    </label>
  );
};

export const CurrencyInput = memo(CurrencyInputComponent);
