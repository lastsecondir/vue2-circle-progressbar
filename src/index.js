import CircleProgressbar from "./components/CircleProgressbar.vue";

export default {
  install: (app, options) => {
    app.component("CircleProgressbar", CircleProgressbar);
  },
};

export {
  CircleProgressbar
};
