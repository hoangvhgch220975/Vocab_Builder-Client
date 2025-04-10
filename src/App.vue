<template>
  <div>
    <!-- Navbar -->
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/words" class="item">
            <i class="list icon"></i>Words
          </router-link>
          <router-link to="/words/new" class="item">
            <i class="plus icon"></i>New
          </router-link>
          <router-link to="/about" class="item">
            <i class="question circle outline icon"></i>About
          </router-link>
          <a href="https://greenwich.edu.vn/en/english/" class="item">
            Greenwich Vietnam
          </a>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="ui container">
      <div class="ui grid">
        <div class="row">
          <div class="twelve wide column">
            <!-- This is where the routed component will be displayed -->
            <router-view />
          </div>
        </div>
      </div>
    </div>

    <!-- Flash Message -->
    <flash-message></flash-message>
  </div>
</template>

<script>
export default {
  name: 'App'
};


</script>

<style>
/* Navbar styles */
#app > div.navbar {
  margin-bottom: 1.5em;
}

/* Flash Message positioning */
.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50px;
  right: 0;
}

/* Ensure flash message is styled correctly */
flash-message {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000; /* Ensure it's above other elements */
}

/* Some general input styles */
input {
  width: 300px;
}

div.label {
  width: 120px;
}

div.input {
  margin-bottom: 10px;
}

button.ui.button {
  margin-top: 15px;
  display: block;
  color: #000;
}
</style>
