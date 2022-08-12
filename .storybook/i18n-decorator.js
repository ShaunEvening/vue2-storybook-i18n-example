import { createi18nConfiguration } from "../src/translations";

const i18n = createi18nConfiguration();

export const i18nDecorator = (story, context) => {
  i18n.locale = context.globals.locale;

  return ({
    components: { story },
    i18n,
    template: '<story />',
    watch: {
      locale: {
        handler() {
          this.$i18n.locale = context.globals.locale;
        },
        immediate: true,
      },
    },
  });
};