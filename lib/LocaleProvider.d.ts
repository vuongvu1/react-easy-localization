declare module "react-easy-localization" {
  export interface LocaleContextValue {
    i18n: object;
    languageCode: string;
    changeLanguage: (languageCode: string) => void;
  }

  export const LocaleProvider: React.FC<{}>;

  export const withLocale: <P extends LocaleContextValue>(
    WrappedComponent: React.ComponentType<P>
  ) => typeof React.Component;

  export const useLocale: () => LocaleContextValue;
}
