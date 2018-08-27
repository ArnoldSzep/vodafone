<template>
  <div id="app">
    <main-header/>

    <router-view/>
    
    <footer class="pt-5 pb-4">
      <div class="container text-center">
        All Rights Reserved. VSSB {{date}}
      </div>
    </footer>

    <router-link 
        :to="{ name: 'new-profile'}" 
        class="add-new-link shadow-sm">
        +
    </router-link>
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

<style lang="scss" scoped>
@import "src/assets/bootstrap.scss";
.add-new-link {
  position: fixed;
  width: 60px;
  height: 60px;
  right: 20px;
  bottom: 20px;
  text-align: center;
  vertical-align: middle;
  background: $primary;
  color: #fff;
  font-size: 26px;
  line-height: 60px;
  border-radius: 50%;

  transition: background 0.2s;

  &:hover {
    text-decoration: none;
    color: #fff;
    background: $dark;
  }
}
</style>
