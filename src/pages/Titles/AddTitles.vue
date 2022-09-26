<template>
  <section>
    <base-card>
      <h2>add title page</h2>
      <ItemForm @save-data="saveData"></ItemForm>
    </base-card>
  </section>
</template>

<script>
import ItemForm from '../../components/titles/TitleForm.vue';
export default {
  components: {
    ItemForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('titles/registerTitle', data);
      this.$router.replace('/titles');
    },
  },
};
</script>
