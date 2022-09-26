<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !title.isValid }">
      <label for="title">Manga Title</label>
      <input
        type="text"
        id="title"
        v-model.trim="title.val"
        @blur="clearValidity('title')"
      />
      <p v-if="!title.isValid">title must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !author.isValid }">
      <label for="author">Author</label>
      <input
        type="text"
        id="author"
        v-model.trim="author.val"
        @blur="clearValidity('author')"
      />
      <p v-if="!author.isValid">author must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !coverart.isValid }">
      <label for="">Cover Art</label>
      <input
        type="text"
        id="coverart"
        v-model.trim="coverart.val"
        @blur="clearValidity('coverart')"
      />
      <p v-if="!coverart.isValid">coverart must not be empty.</p>
    </div>
    <!-- <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Cover Art</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Description must not be empty.</p>
    </div> -->
    <div class="form-control" :class="{ invalid: !volumes.isValid }">
      <label for="volumes">Total number of Volumes</label>
      <input
        type="number"
        id="volumes"
        v-model.number="volumes.val"
        @blur="clearValidity('volumes')"
      />
      <p v-if="!volumes.isValid">volumes must be greater than 0.</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <!-- /////////////////////////// -->
      <h3>Select Genre</h3>
      <!-- <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career Advisory</label>
      </div> -->
      <p v-if="!areas.isValid">At least one expertise must be selected.</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<!-- /////////////////////////// -->

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      title: {
        val: '',
        isValid: true,
      },
      author: {
        val: '',
        isValid: true,
      },
      coverart: {
        val: '',
        isValid: true,
      },
      volumes: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.title.val === '') {
        this.title.isValid = false;
        this.formIsValid = false;
      }
      if (this.author.val === '') {
        this.author.isValid = false;
        this.formIsValid = false;
      }
      if (this.coverart.val === '') {
        this.coverart.isValid = false;
        this.formIsValid = false;
      }
      if (!this.volumes.val || this.volumes.val < 0) {
        this.volumes.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.title.val,
        last: this.author.val,
        desc: this.coverart.val,
        volumes: this.volumes.val,
        areas: this.areas.val,
      };

      this.$emit('save-data', formData);
    },
  },
};
</script>

<!-- /////////////////////////// -->

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
