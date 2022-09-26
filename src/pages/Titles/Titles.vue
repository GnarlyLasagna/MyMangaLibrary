<template>
  <section>
    <TitleFilter @change-filter="setFilters"></TitleFilter>
  </section>
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
          :volumes="title.volumes"
        ></TitleItem>
      </ul>
      <h3 v-else>No Titles Found</h3>
    </base-card>
  </section>
</template>

<script>
import TitleItem from '../../components/titles/TitleItem.vue';
import TitleFilter from '../../components/titles/TitleFilter.vue';

export default {
  components: {
    TitleItem,
    TitleFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },

  computed: {
    filteredTitles() {
      return this.$store.getters['titles/titles'];
    },
    hasTitles() {
      return this.$store.getters['titles/hasTitles'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
      // Now updaye filtered coaches to reflect changes in active filters
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
