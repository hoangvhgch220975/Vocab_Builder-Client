<template>
  <div>
    <h1>Edit Word</h1>
    <word-form :word="word" @submit="onSubmit" />
  </div>
</template>

<script>
import { ViewVocab, EditVocab } from "../helpers/Helper";
import WordForm from "@/components/WordForm.vue"; // Ensure the path is correct

export default {
  name: "EditWord",
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
  async mounted() {
    this.word = await ViewVocab(this.$route.params.id);
  },
  methods: {
    async onSubmit() {
      await EditVocab(this.$route.params.id, this.word);
      this.flash("Edit word succeed!");
      this.$router.push("/words");
    },
  },
};
</script>
  