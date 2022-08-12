import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { i18nDecorator } from './i18n-decorator';

Vue.use(VueI18n);

export const decorators = [i18nDecorator];

export const globalTypes = {
  locale: {
    name: 'locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
      ],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}