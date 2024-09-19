'use client';

import { AMOUNT_INPUT_ID } from '@/lib/constants/dom.constants';
import {
  generateMinError,
  generateRequiredError,
} from '@/lib/utils/validation.utils';
import { useCurrencyContext } from '@/providers/CurrencyProvider';
import { ErrorMessage } from '@hookform/error-message';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CurrencySelect } from '../ui';
import { CurrencyConverterFormFieldsConfig } from './CurrencyConverterForm.interface';
import styles from './CurrrencyConverterForm.module.scss';

export const CurrencyConverterForm = (): React.JSX.Element => {
  const {
    amount,
    fromCurrency,
    toCurrency,
    updateAmount,
    updateFromCurrency,
    updateToCurrency,
  } = useCurrencyContext();

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<CurrencyConverterFormFieldsConfig>({
    mode: 'onBlur',
    defaultValues: {
      amount,
      fromCurrency,
      toCurrency,
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (value.amount && value.fromCurrency && value.toCurrency)
        switch (name) {
          case 'amount':
            updateAmount(value.amount);
            break;
          case 'fromCurrency':
            updateFromCurrency(value.fromCurrency);
            break;
          case 'toCurrency':
            updateToCurrency(value.toCurrency);
            break;
          default:
        }
    });

    return () => subscription.unsubscribe();
  }, [watch, updateAmount, updateFromCurrency, updateToCurrency]);

  return (
    <form className={styles.form}>
      <h1 className={styles.form__title}>Currency Converter</h1>

      <div className={styles['main-group']}>
        <fieldset className={styles['form__amount-group']}>
          <label
            htmlFor={AMOUNT_INPUT_ID}
            className={styles['amount-group__label']}
          >
            Enter Amount
            <input
              type="number"
              id={AMOUNT_INPUT_ID}
              className={styles['amount-group__input']}
              {...register('amount', {
                required: {
                  value: true,
                  message: generateRequiredError('amount'),
                },
                min: {
                  value: 0.01,
                  message: generateMinError(0.01),
                },
                valueAsNumber: true,
              })}
            />
          </label>
        </fieldset>

        <fieldset className={styles['converter-group']}>
          <CurrencySelect
            name="fromCurrency"
            register={register}
            value={fromCurrency}
            excludeCurrency={toCurrency}
          />

          <div>{`<-->`}</div>

          <CurrencySelect
            name="toCurrency"
            register={register}
            value={toCurrency}
            excludeCurrency={fromCurrency}
          />
        </fieldset>
      </div>

      <ErrorMessage
        className={styles.form__error}
        errors={errors}
        name="amount"
        as="div"
      />
    </form>
  );
};
