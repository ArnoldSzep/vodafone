<template>
  <header class="main-header mt-4">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm text-left">
          <router-link to="/"><img alt="Vue logo" src="../assets/logo.svg" class="logo d-block mx-auto ml-sm-0"></router-link> 
        </div>
        <div class="col-sm text-right d-none d-sm-block">
          <input type="search" name="" id="" 
          class="form-control ml-auto" 
          v-model="query" 
          @keyup.enter="searchContact" 
          placeholder="Search for contact">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "main-header",
  data: function() {
    return {
      query: ''
    };
  },
  methods: {
    // Emit search contact
    searchContact() {
      eventBus.$emit("searchContact", {query: this.query});
    }
  }
};
</script>

<style scoped lang="scss">
.main-header {
  margin-bottom: 84px;

}
.form-control {
  max-width: 450px;
}
.logo {
  max-width: 242px;
}
</style>
