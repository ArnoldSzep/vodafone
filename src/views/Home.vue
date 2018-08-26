<template>
  <div class="home page-wrap">
    <h1 class="site-title">Contacts</h1>

    <letter-list></letter-list>

    <div class="container">
      <div class="row">
        <profile-item 
        v-for="(contact, index) in contacts"
        v-bind:contact="contact" 
        v-bind:index="index" 
        v-bind:key="index">
        </profile-item>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileItem from "@/components/ProfileItem.vue";
import LetterList from "@/components/LetterList.vue";

export default {
  name: "home",
  data: function() {
    return {
      contacts: contactData,
      letters: []
    };
  },
  components: {
    ProfileItem,
    LetterList
  },
  created() {
    // event listeners
    eventBus.$on("letterFilter", data => this.letterFilter(data));
    eventBus.$on("letterFilterClear", () => this.letterFilterClear());
    eventBus.$on("searchContact", data => this.searchContact(data));
  },
  methods: {
    letterFilter(data) {
      // Filter contact by the selected letter
      this.contacts = contactData.filter(item => {
        if (item.name.charAt(0) == data.letter) {
          return item;
        }
      });
    },
    letterFilterClear(data) {
      this.contacts = contactData;
    },
    searchContact(data) {
      // filter contact by checking if the query can be found in the name, phone or email
      this.contacts = contactData.filter(item => {
        var found = false;
        if (item.name.indexOf(data.query) !== -1) {
          found = true;
        } else if (item.phone.indexOf(data.query) !== -1){
          found = true;
        } else if (item.email.indexOf(data.query) !== -1){
          found = true;
        }

        // If item ok return it
        if(found){
          return item;
        }
      });
    }
  }
};
</script>