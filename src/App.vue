<template>
  <div id="app">
      <NavBar />
      <div class="container">
        <router-view/>
      </div>

  </div>

</template>

<script>

import NavBar from "./components/NavBar";
  export default {
    components: {NavBar}
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

body {
    margin: 0 auto;
}


</style>
