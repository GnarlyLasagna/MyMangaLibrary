import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      titles: [
        {
          id: 'c1',
          title: 'Naruto',
          author: 'Masashi Kishimoto',
          coverart: '',
          collected: 30,
          volumes: [{}],
          // description: 30,
          // read: 30,
          // unread: 30,
          // genre: 30,
        },
        {
          id: 'c2',
          title: 'Initial D',
          author: 'Shuichi Shigeno',
          coverart: '',
          collected: 10,
          volumes: [{}],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
