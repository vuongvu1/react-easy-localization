import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useMemo,
} from "react";
import LocalizedStrings from "react-localization";

const LocaleContext = createContext({
  i18n: null,
  languageCode: "",
  changeLanguage: () => {},
  allLanguages: [],
});

export const LocaleProvider = ({ resources, defaultLanguage, children }) => {
  const i18n = useMemo(() => new LocalizedStrings(resources), [resources]);
  const allLanguages = useMemo(() => Object.keys(resources), [resources]);

  const [languageCode, setLanguageCode] = useState(
    defaultLanguage || allLanguages[0]
  );

  const changeLanguage = useCallback(
    (newLanguageCode) => {
      setLanguageCode(newLanguageCode);
      i18n.setLanguage(newLanguageCode);
    },
    [i18n]
  );

  return (
    <LocaleContext.Provider
      value={{
        i18n,
        languageCode,
        changeLanguage,
        allLanguages,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  return useContext(LocaleContext);
};

const getComponentName = (Component) =>
  (process.env.NODE_ENV !== "production"
    ? typeof Component === "string" && Component
    : false) ||
  Component.displayName ||
  Component.name ||
  "Component";

export const withLocale = (WrappedComponent) => {
  const WithLocaleComponent = React.forwardRef((props, ref) => {
    return (
      <LocaleContext.Consumer>
        {(localeContext) => (
          <WrappedComponent {...localeContext} {...props} ref={ref} />
        )}
      </LocaleContext.Consumer>
    );
  });

  WithLocaleComponent.displayName = `LocaleContext.${getComponentName(
    WrappedComponent
  )}`;

  return WithLocaleComponent;
};
