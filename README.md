# react-easy-localization

A simple module build on top of [react-localization](https://www.npmjs.com/package/react-localization) which makes React localization easy.

![Demo](./demo.gif)

## Installation

`npm install --save react-easy-localization`

## API

- LocaleProvider - use React Context to provide localization values
- useLocale - a React Hooks that provides localization values
- withLocale - a React HOC that provides localization values

### Localization values

- `i18n`: contains all localized texts
- `languageCode`: current selected language code
- `changeLanguage`: use this function to change the language

### Input

- `resources`: a simple object containing language keys (i.e. en, ge, fr..) and a list of key-value pairs for localized strings

```js
const resources = {
  en: {
    title: "Title",
    text: "A title is one or more words used before or after a person's name",
  },
  ja: {
    title: "題名",
    text: "タイトルは、人の名前の前後に使用される1つ以上の単語です。",
  },
};
```

## Usage

```jsx
// on top of your app
// wrap `LocaleProvider` on top of your application and provide a resources object
import { LocaleProvider } from "react-easy-localization";

const App = () => (
  <LocaleProvider resources={resources}>
    <YourApp />
  </LocaleProvider>
);
```

```jsx
// Use `useLocale` to get localization values
import { useLocale } from "react-easy-localization";

const Home = () => {
  const { i18n, languageCode, changeLanguage } = useLocale();

  const toggleLanguage = () => {
    return languageCode === "en" ? changeLanguage("ja") : changeLanguage("en");
  };

  return (
    <>
      {/* A simple button to switch the language */}
      <button onClick={toggleLanguage}>{languageCode}</button>

      {/* Use localized texts */}
      <div>{i18n.title}</div>
      <div>{i18n.text}</div>
    </>
  );
};

export default Home;
```

```jsx
// Or use `withLocale` to get localization values
import { withLocale } from "react-easy-localization";

const Home = ({ i18n, languageCode, changeLanguage }) => {
  const toggleLanguage = () => {
    return languageCode === "en" ? changeLanguage("ja") : changeLanguage("en");
  };

  return (
    <>
      {/* A simple button to switch the language */}
      <button onClick={toggleLanguage}>{languageCode}</button>

      {/* Use localized texts */}
      <div>{i18n.title}</div>
      <div>{i18n.text}</div>
    </>
  );
};

export default withLocale(Home);
```
