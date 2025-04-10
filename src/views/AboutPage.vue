<template>
   <div class="ui container center aligned" style="padding: 4rem 0;">
      <div class="ui segment raised padded text container">
         <h1 class="ui header blue">Welcome to the COMP1842 Demo Web App</h1>
         <p class="ui large text" style="margin-top: 1.5rem;">
            This web application was built as a coursework project for the COMP1842 module. It showcases modern web development techniques using Vue.js, providing a platform to manage vocabulary efficiently.
         </p>
         <div class="ui divider"></div>
         <p class="ui text">
            Built with ❤️ by a passionate student. Explore the app to see routing, form handling, state management, and integration with APIs in action!
         </p>
      </div>
   </div>
</template>

<script>
export default {
   name: "AboutPage",
};
</script>

<style scoped>
.ui.header {
   font-size: 2.5rem;
   font-weight: 700;
}
.ui.segment {
   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
   border-radius: 15px;
}
</style>
