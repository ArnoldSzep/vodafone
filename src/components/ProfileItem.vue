<template>
    <div class="col-md-6 col-lg-4 mb-4">
        <router-link 
        :to="{ name: 'profile', params: { id: index, contact: contact }}" 
        class="card text-muted shadow-sm profile-item" 
        v-bind:index="index">
          <div class="card-header bg-dark text-white">          
            <h2 class="h6 mb-0 p-1">{{ contact.name }}</h2>
          </div>
          <div class="p-3">
          <small>{{ contact.email }}
          <br>
          {{ contact.phone }}</small>
          </div>
        </router-link>
    </div>
</template>


<script>
export default {
  name: "profile-item",
  props: {
    contact: {},
    index: Number
  }
};
</script>

<style lang="scss" scoped>
.profile-item {
  max-width: 410px;
  margin: auto;
  border-radius: 0;
  border-color: #eee;

  display: block;

  transition: background 0.2s;

  &:hover {
    text-decoration: none;
    background: #eee;
  }
}
</style>
