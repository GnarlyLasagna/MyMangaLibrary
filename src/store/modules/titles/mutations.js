export default {
  registerTitle(state, payload) {
    state.titles.push(payload);
  },
  setTitles(state, payload) {
    state.titles = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
