<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields !</p>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="united kingdom flag"></i> English</div>
      <input type="text" placeholder="Enter word..." v-model="localWord.english" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="germany flag"></i> German</div>
      <input type="text" placeholder="Enter word..." v-model="localWord.german" />
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "word-form",
  props: {
    word: {
      type: Object,
      required: false,
      default: () => {
        return {
          english: "",
          german: "",
        };
      },
    },
  },
  data() {
    return {
      errorsPresent: false,
      localWord: {
        english: this.word.english,
        german: this.word.german,
      },
    };
  },
  watch: {
    word: {
      handler(newVal) {
        this.localWord = { ...newVal };
      },
      deep: true,
    },
  },
  methods: {
    onSubmit() {
      if (this.localWord.english === "" || this.localWord.german === "") {
        this.errorsPresent = true;
      } else {
        this.errorsPresent = false;
        this.$emit("createOrUpdate", this.localWord);
      }
    },
  },
};
</script>
<style scoped></style>