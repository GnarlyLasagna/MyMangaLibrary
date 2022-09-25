<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/addtitles">Add Title</base-button>
      </div>
      <ul v-if="hasTitles">
        <TitleItem
          v-for="title in filteredTitles"
          :key="title.id"
          :id="title.id"
          :title="title.title"
          :author="title.author"
        ></TitleItem>
      </ul>
      <h3 v-else>No Titles Found</h3>
    </base-card>
  </section>
</template>

<script>
import TitleItem from '../../components/titles/TitleItem.vue';
export default {
  components: {
    TitleItem,
  },
  computed: {
    filteredTitles() {
      return this.$store.getters['titles/titles'];
    },
    hasTitles() {
      return this.$store.getters['titles/hasTitles'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
