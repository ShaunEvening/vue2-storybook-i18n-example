import VueI18n from 'vue-i18n';
import LocaleEN from './translations/locale_en.json';
import LocaleFR from './translations/locale_fr.json';

export const createi18nConfiguration = () => new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: LocaleEN,
      fr: LocaleFR
      
    },
  });