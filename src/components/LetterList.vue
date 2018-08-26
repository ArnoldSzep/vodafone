<template>
    <div class="letter-list mb-5">
      <span class="letter px-3 py-2" 
      v-for="(letter, index) in letters" 
      v-bind:key="index"
      v-bind:class="{ active: activeItem == index }"
      @click="letterFilter(letter, index)">
        {{letter}}
      </span>
    </div>
</template>

<script>
// @ is an alias to /src
import ProfileItem from "@/components/ProfileItem.vue";

export default {
  name: "letter-list",
  data: function() {
    return {
      contacts: contactData,
      activeItem: null,
      filtered: false,
      letters: []
    };
  },
  created() {
    // Get the first letter of contact name, and push to "letters" array,
    // if it's not already there
    this.contacts.forEach(item => {
      if (this.letters.indexOf(item.name.charAt(0)) === -1) {
        this.letters.push(item.name.charAt(0));
      }
    });

    // Sort the letter array
    this.letters.sort();
  },
  methods: {
    // Filter by letter
    letterFilter(letter, index) {
      if (this.activeItem == index) { // If already active clear the filter
        eventBus.$emit("letterFilterClear");
        this.filtered = false;
        this.activeItem = null;

      } else {// else filter by letter
        eventBus.$emit("letterFilter", {
          letter: letter
        });
        this.filtered = true;
        this.activeItem = index;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/bootstrap.scss";

.letter-list {
  span {
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
    font-size: 26px;
    font-weight: 700;
    color: $gray-700;
    cursor: pointer;
    user-select: none;

    &:hover {
      color: $black;
    }

    &.active {
      color: $primary;
    }
  }
}
</style>
