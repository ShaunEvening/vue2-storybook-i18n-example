import App from '../App.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/App',
  component: App,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = () => ({
  components: { App },
  template: '<App />',
});

export const Primary = Template.bind({});
