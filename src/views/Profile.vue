<template>
    <div class="profile page-wrap">
        <div class="container">
            <h1 class="site-title mb-5">{{contact.name}}'s profile</h1>
            <div class="profile-details">
                <div class="row mb-3">
                    <div class="col-sm-5 text-sm-right text-muted">Name:</div>
                    <div class="col-sm-6 text-sm-left">{{contact.name}}</div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-5 text-sm-right text-muted">E-mail:</div>
                    <div class="col-sm-6 text-sm-left">
                        <a v-bind:href="'mailto:' + contact.email">{{contact.email}}</a>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-5 text-sm-right text-muted">Phone:</div>
                    <div class="col-sm-6 text-sm-left">
                        <a v-bind:href="'tel:' + contact.phone">{{contact.phone}}</a>
                    </div>
                </div>
            </div>
            <div class="profile-details mb-3">
                <button @click="deleteContact" class="btn btn-outline-primary mr-4 px-4 py-2">Delete</button>
                <router-link 
                    :to="{ name: 'edit-profile', params: { id: index, contact: contact }}" 
                    class="btn btn-outline-dark px-4 py-2" 
                    v-bind:index="index">
                    Edit
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
//import { serverBus } from "@/main";

export default {
  name: "profile",
  props: {
    contact: {}
  },
  data: function() {
    return {
      index: this.$route.params.id
    };
  },
  methods: {
    deleteContact() {
      // Remove item
      contactData.splice(this.index, 1);
      // Return home
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/bootstrap.scss";

.profile-details {
  font-size: 18px;
  margin-bottom: 60px;
}
</style>
