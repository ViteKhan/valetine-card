import { useMemo } from 'react';
import { PHRASES } from '../constants';

export const useNoButtonText = (count) => {
  return useMemo(() => {
    if (!count) return 'Нет';

    return PHRASES[Math.min(count, PHRASES.length - 1)];
  }, [count]);
};