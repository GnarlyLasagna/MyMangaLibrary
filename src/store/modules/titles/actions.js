export default {
  async registerTitle(context, data) {
    // const userId = context.rootGetters.userId;
    var newId = Math.random().toString();
    var collectionArray = new Array(data.volumes).fill().map((e, i) => {
      return { volume: i + 1, owned: false, read: false, comments: '' };
    });
    const titleData = {
      id: newId,
      title: data.title,
      author: data.author,
      coverart: data.coverart,
      volumes: data.volumes,
      genre: data.genre,
      collection: collectionArray,
    };
    context.commit('registerTitle', titleData);
  },
};
