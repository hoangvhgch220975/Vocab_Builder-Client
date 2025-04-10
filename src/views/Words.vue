<!-- <template>
    <div>
      <h1>Words</h1>
      <table id="words" class="ui celled compact table">
        <thead>
          <tr>
            <th>English</th>
            <th>German</th>
            <th colspan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(word, i) in words" :key="i">
            <td>{{ word.english }}</td>
            <td>{{ word.german }}</td>
            <td width="75" class="center aligned">Show</td>
            <td width="75" class="center aligned">Edit</td>
            <td width="75" class="center aligned">Destroy</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { api } from '../helpers/api';
  
  export default {
    name: 'words',
    data() {
      return {
        words: []
      };
    },
    async mounted() {
      try {
        const response = await api.getWords();  // Corrected the API call here
        this.words = response;  // 'response' already contains the data
        console.log(this.words)
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    }
  };
  </script>
   -->


   <template>
    <div>
      <table class="ui celled table">
        <thead>
          <tr>
            <h1 colspan="5">WORD LIST</h1>
          </tr>
          <tr>
            <th>English</th>
            <th>German</th>
            <th colspan="2">Menu</th>
            <th>
                <a class="ui button blue" @click.prevent="onDeleteAll()">
                Delete All </a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(word, i) in words" :key="i">
            <td>{{ word.english }}</td>
            <td>{{ word.german }}</td>
            <td>
                <router-link
                class="ui button green"
                :to="{ name: 'ShowWord', params: { id: word._id } }"
              >
                Show
              </router-link>
            </td>
            <td>
                <router-link
                class="ui button yellow"
                :to="{ name: 'EditWord', params: { id: word._id } }"
              >
                Edit
              </router-link>
            </td>
            <td>
                 <a class="ui button red" @click.prevent="onDelete(word._id)">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ViewAllVocabs, DeleteVocab, DeleteAllVocabs } from '../helpers/Helper.js'
  
  export default {
     name: "WordsList",
     data() {
        return {
           words: [], 
        };
     },
     async mounted() {
        this.words = await ViewAllVocabs();
     },
     methods: {
      async onDelete(id) {
        //1. display confirm message before deletion
        const deleteConfirm = window.confirm(
          "Are you sure to delete this word ?"
        );
        if (deleteConfirm) {
          //2. delete word from database
          await DeleteVocab(id);
          //3. refresh the word list (remove deleted words)
          const updatedWords = this.words.filter((word) => word._id !== id);
          this.words = updatedWords;
          //4. display flash message after deletion
           this.flash("Delete word succeed !");
        }
        },
       async onDeleteAll() {
        //1. display confirm message before deletion
        const deleteConfirm = window.confirm(
          "Are you sure to delete all words ?"
        );
        if (deleteConfirm) {
          //2. delete word from database
           await DeleteAllVocabs();
           //3. refresh word list
           this.words = [];
          //4. display flash message after deletion
           this.flash("Delete all word succeed !");
        }
      },
    },
  }
  </script>
  