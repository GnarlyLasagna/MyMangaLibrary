import { createStore } from 'vuex';

import titlesModule from './modules/titles/index.js';

const store = createStore({
  modules: {
    titles: titlesModule,
  },
});

export default store;
