# react-easy-localization

A simple module built on top of [react-localization](https://www.npmjs.com/package/react-localization) which makes React localization easy.

![Demo](./demo.gif)

## Installation

`npm install --save react-easy-localization`

### React dependency

React >= 16.8.0

## API

- LocaleProvider - use React Context to provide localization values
- useLocale - a React Hook that provides localization values
- withLocale - a React HOC that provides localization values

### Localization values

- `i18n`: an object contains all localized texts
- `languageCode`: current selected language code
- `changeLanguage`: method to change the language
- `allLanguages`: contains the list of all languages

### Input

- `resources`: a simple object containing language keys (i.e. en, ge, fr..) and a list of key-value pairs for localized texts
- `defaultLanguage`: choose a start language, if unset, the default is the first language in `resources`

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
      <button onClick={toggleLanguage}>{languageCode}</button>

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
      <button onClick={toggleLanguage}>{languageCode}</button>

      <div>{i18n.title}</div>
      <div>{i18n.text}</div>
    </>
  );
};

export default withLocale(Home);
```
