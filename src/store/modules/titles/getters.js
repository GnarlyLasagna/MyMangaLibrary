export default {
  titles(state) {
    return state.titles;
  },
  hasTitles(state) {
    return state.titles && state.titles.length > 0;
  },
};
