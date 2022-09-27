<template>
  <li>
    <h4>{{ volume }}</h4>
    <h4>owned {{ owned }}</h4>
    <h4>read {{ read }}</h4>
    <h4>comments{{ comments }}</h4>
    <!-- <h4>Number of Volumes: {{ issue.read }}</h4> -->

    <!-- <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    </div> -->
    <div class="actions">
      <!-- <base-button mode="outline" link :to="editTitleLink">Contact</base-button>
      <base-button link :to="volumesLink">View Volumes</base-button> -->
    </div>
  </li>
</template>

<script>
export default {
  props: ['volume', 'owned', 'read', 'comments', 'id'],
  computed: {
    // fullName() {
    //   return this.firstName + ' ' + this.lastName;
    // },
    editTitleLink() {
      return this.$route.path + '/' + this.id + '/edit'; // /coaches/c1/contact
    },
    volumesLink() {
      return this.$route.path + '/' + this.id; // /coaches/c1
    },
  },
};
</script>

<style scoped>
li {
  margin: 0.5rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  list-style: none;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
