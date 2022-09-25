<template>
  <section>
    <base-card>
      <h2>{{ id }}</h2>
      <h2>{{ this.selectedTitle.title }}</h2>
      <h2>{{ this.selectedTitle.collected }}</h2>
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
    // title() {
    //   return this.selectedTitle.title;
    // },
  },
  created() {
    this.selectedTitle = this.$store.getters['titles/titles'].find(
      (title) => title.id === this.id
    );
  },
};
</script>

<style scoped></style>
