<template>
  <section>
    <base-card>
      <h2>add title</h2>
      <ItemForm></ItemForm>
    </base-card>
  </section>
</template>

<script>
import ItemForm from '../../components/titles/TitleForm.vue';
export default {
  components: {
    ItemForm,
  },
};
</script>
