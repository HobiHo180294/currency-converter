import { CurrencyConverterForm } from '@/components/CurrencyConverterForm/CurrencyConverterForm';
import styles from '@/styles/pages/home.module.scss';

export default function Home(): React.JSX.Element {
  return (
    <div className={styles.body}>
      <CurrencyConverterForm />
    </div>
  );
}
