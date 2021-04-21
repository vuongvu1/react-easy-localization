declare module "react-easy-localization" {
  export interface LocaleContextValue {
    i18n: Record<string, string>;
    languageCode: string;
    changeLanguage: (languageCode: string) => void;
    allLanguages: string[];
  }

  export const LocaleProvider: React.FC<{
    resources: Record<string, Record<string, string>>;
    defaultLanguage: string;
  }>;

  export const withLocale: <P extends LocaleContextValue>(
    WrappedComponent: React.ComponentType<P>
  ) => typeof React.Component;

  export const useLocale: () => LocaleContextValue;
}
