<template>
  <section>
    <base-card>
      <!-- <h2>{{ id }}</h2> -->
      <h2>Title: {{ this.selectedTitle.title }}</h2>
      <h2>Volumes: {{ this.selectedTitle.volumes }}</h2>

      <h2 v-for="issue in collection" :key="issue.id">
        Volume num: {{ issue.volume }} read={{ issue.read }} owned={{
          issue.owned
        }}
      </h2>
    </base-card>
  </section>
  <section></section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedTitle: null,
    };
  },
  computed: {
    collection() {
      return this.selectedTitle.collection;
    },
  },
  created() {
    this.selectedTitle = this.$store.getters['titles/titles'].find(
      (title) => title.id === this.id
    );
  },
};
</script>

<style scoped></style>
