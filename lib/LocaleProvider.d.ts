declare module "react-easy-localization" {
  export interface LocaleContextValue {
    i18n: object;
    languageCode: string;
    changeLanguage: (languageCode: string) => void;
  }

  export const LocaleProvider: React.FC<{}>;

  class Localed extends React.Component<Subtract<P, LocaleContextValue>> {}

  export const withLocale: <P extends LocaleContextValue>(
    WrappedComponent: React.ComponentType<P>
  ) => typeof Localed;

  export const useLocale = () => LocaleContextValue;
}
