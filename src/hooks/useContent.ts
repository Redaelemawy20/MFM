import Translatable, { Lang } from '@/ts/common/Translatable';
import { useLocale } from 'next-intl';

export function useContent() {
  const locale = useLocale() as Lang;
  const translate = <T = any>(value: Translatable<T>): T => {
    if (typeof value !== 'object') return value;
    const translated = value ? value[locale] : '';
    return translated as T;
  };
  return translate;
}
