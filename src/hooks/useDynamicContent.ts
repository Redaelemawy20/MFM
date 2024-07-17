import useTranslation from "next-translate/useTranslation";
import Translatable, { Lang } from "../../ts/common/Translatable";
import {
  getTranslatedContent,
  translateContent,
} from "../../App/helpers/parseContent";

export const useDynamicContent = <T, B>(
  content?: T | undefined
): { c: Content<B>; w: WithContent<T, B> } => {
  const { lang } = useTranslation();

  const c = <K extends keyof B>(key: K) => {
    return translate(content, key);
  };
  const w = <K extends keyof B>(content: T | undefined, key: K) => {
    return translate(content, key);
  };
  const translate = <K extends keyof B>(content: T | undefined, key: K) => {
    if (Array.isArray(content))
      return getTranslatedContent(content, key, lang as Lang);
    else return translateContent(content as Translatable<B>, key, lang as Lang);
  };
  return { c, w };
};
type Content<B> = <K extends keyof B>(key: K) => B[K];

type WithContent<T, B> = <K extends keyof B>(
  content: T | undefined,
  key: K
) => B[K];
