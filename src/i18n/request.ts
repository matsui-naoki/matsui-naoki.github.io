import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  // Validate that the incoming locale is valid
  const locales = ['ja', 'en'];
  if (!locale || !locales.includes(locale)) {
    locale = 'ja';
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
