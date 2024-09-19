import { Nullable } from '@/shared/types/globals';
import { Context, useContext } from 'react';

export const useTypedContext = <ContextDeclaration>(
  context: Context<Nullable<ContextDeclaration>>
): ContextDeclaration => {
  const currentContext = useContext(context);

  if (!currentContext)
    throw new Error(
      'useTypedContext has to be used within the relevant provider'
    );

  return currentContext;
};
