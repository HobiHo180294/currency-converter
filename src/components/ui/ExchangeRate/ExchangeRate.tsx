'use client';

import { useCurrentExchangeRate } from '@/lib/hooks';
import { calculateRateToTargetCurrency } from '@/lib/utils/global.utils';
import { Error } from '../Error/Error';
import { Loader } from '../Loader/Loader';
import { ExchangeRateProps } from './ExchangeRate.interface';
import styles from './ExchangeRate.module.scss';

export const ExchangeRate = ({
  id,
  baseCurrency,
  targetCurrency,
  amount,
}: ExchangeRateProps): React.JSX.Element => {
  const { data, isError } = useCurrentExchangeRate({
    baseCurrency,
    targetCurrency,
  });

  if (data)
    return (
      <h2 id={id} className={styles.rate}>
        {amount} {baseCurrency} = {calculateRateToTargetCurrency(data, amount)}{' '}
        {targetCurrency}
      </h2>
    );

  if (isError) return <Error />;

  return <Loader />;
};
