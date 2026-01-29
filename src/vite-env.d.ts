/// <reference types="vite/client" />

// 终极类型屏蔽，防止构建因第三方库类型报错而失败
declare module 'react-helmet-async';
declare module 'i18next';
declare module 'i18next-browser-languagedetector';
declare module 'react-i18next' {
  export const useTranslation: any;
  export const initReactI18next: any;
  export const Trans: any;
  export const Translation: any;
  export const withTranslation: any;
  export const I18nextProvider: any;
  export const I18nContext: any;
  const content: any;
  export default content;
}
