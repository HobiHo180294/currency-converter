import {
  BaseCurrencyFieldset,
  TargetCurrencyFieldset,
} from '@/components/currency-converter-form';
import { CurrencyConverterFormProvider } from '@/components/providers';
import styles from './CurrencyConverterForm.module.scss';

export const CurrencyConverterForm = (): React.JSX.Element => (
  <CurrencyConverterFormProvider>
    <form className={styles.form}>
      <h1 className={styles.form__title}>Currency Converter</h1>
      <BaseCurrencyFieldset />
      <TargetCurrencyFieldset />
    </form>
  </CurrencyConverterFormProvider>
);
