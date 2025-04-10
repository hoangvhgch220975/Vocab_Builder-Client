<template>
  <div>
    <h1>New Word</h1>
    <word-form :word="word" @submit="onSubmit" />
  </div>
</template>

<script>
import { AddVocab } from "../helpers/Helper";
import WordForm from "@/components/WordForm.vue"; // Adjust the path if necessary

export default {
  name: "NewWord",
  components: {
    WordForm,
  },
  data() {
    return {
      word: {
        english: "",
        german: "",
      },
    };
  },
  methods: {
    async onSubmit(newWord) {
      await AddVocab(newWord);
      this.flash("Add new word succeed!");
      this.$router.push("/words");
    },
  },
};
</script>
