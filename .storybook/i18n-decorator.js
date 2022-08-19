export const i18nDecorator = (i18n) => (story, context) => {
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