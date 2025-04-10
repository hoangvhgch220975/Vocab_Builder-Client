<template>
  <div>
    <h1>Edit Word</h1>
    <word-form :word="word" @createOrUpdate="onSubmit" />
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
    this.word = await ViewVocab(this.$route.params.id); // Get word data from backend
  },
  methods: {
    async onSubmit(updatedWord) {
      console.log("Submitting word:", updatedWord);  // Log updated word data before submission
      const response = await EditVocab(this.$route.params.id, updatedWord);  // Use the updated word from the form
      console.log("Edit response:", response);  // Log the response from the API
      if (response.message === "Vocab updated!") {
        this.flash("Edit word succeed!");
        this.$router.push("/words");
      } else {
        this.flash("Failed to update word.");
      }
    },
  },
};
</script>
