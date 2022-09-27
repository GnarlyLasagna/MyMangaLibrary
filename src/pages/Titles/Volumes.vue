<template>
  <section>
    <base-card>
      <!-- <h2>{{ id }}</h2> -->
      <h2>Title: {{ this.selectedTitle.title }}</h2>
      <h2>Volumes: {{ this.selectedTitle.volumes }}</h2>
      <!-- <base-card> -->
      <!-- <div v-for="issue in collection" :key="issue.id"> -->
      <Volume-Item
        v-for="issue in collection"
        :key="issue.id"
        :id="issue.id"
        :volume="issue.volume"
        :owned="issue.owned"
        :read="issue.read"
        :comments="issue.comments"
      ></Volume-Item>
      <!-- <h4>Volume: {{ issue.volume }}</h4>
        <h4>read={{ issue.read }}</h4>
        <h4>owned={{ issue.owned }}</h4> -->
      <!-- </div> -->
      <!-- </base-card> -->
    </base-card>
  </section>
  <section></section>
</template>

<script>
import VolumeItem from '../../components/volumes/VolumeItem.vue';

export default {
  components: {
    VolumeItem,
  },
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
