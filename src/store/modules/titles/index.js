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
          volumes: '72',
          genre: 'shonen',
          collection: [
            { volume: 1, owned: true, read: true, comments: '' },
            { volume: 2, owned: true, read: false, comments: '' },
            { volume: 3, owned: false, read: false, comments: '' },
          ],
        },
        {
          id: 'c2',
          title: 'Initial D',
          author: 'Shuichi Shigeno',
          coverart: '',
          volumes: '48',
          genre: 'speedy boy',
          collection: [
            { volume: 1, owned: true, read: true, comments: '' },
            { volume: 2, owned: true, read: false, comments: '' },
            { volume: 3, owned: false, read: false, comments: '' },
          ],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
