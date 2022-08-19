import VueI18n from 'vue-i18n';
import LocaleEN from './locale_en.json';
import LocaleFR from './locale_fr.json';

export const createi18nConfiguration = () => new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: LocaleEN,
      fr: LocaleFR
      
    },
  });