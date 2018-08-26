<template>
  <div id="app">
    <main-header/>

    <router-view/>
    
    <footer class="pt-5 pb-4">
      <div class="container text-center">
        All Rights Reserved. VSSB {{date}}
      </div>
    </footer>
  </div>
</template>

<script>
import MainHeader from "@/components/Header.vue";

export default {
  components: {
    MainHeader
  },
  data() {
    return {
      date: new Date().getFullYear()
    };
  }
};
</script>
