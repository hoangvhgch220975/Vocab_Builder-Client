<template>
  <form @submit.prevent="handleSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="germany flag"></i> German</div>
      <input type="text" v-model="localWord.german" placeholder="Enter German word..." />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="united kingdom flag"></i> English</div>
      <input type="text" v-model="localWord.english" placeholder="Enter English word..." />
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
      required: true,
    },
  },
  data() {
    return {
      errorsPresent: false,
      localWord: { ...this.word },
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
    handleSubmit() {
      if (!this.localWord.english || !this.localWord.german) {
        this.errorsPresent = true;
        return;
      }
      this.errorsPresent = false;
      this.$emit("submit", this.localWord);
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
