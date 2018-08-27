<template>
    <div class="new-profile page-wrap">
        <div class="container">
            <h1 class="site-title mb-5">Add New Contact</h1>

            <div class="new-profile-inputs text-left mb-3">
                <label for="new_name" class="pl-1 mb-1">Name:</label>
                <input type="text" id="new_name" class="form-control text-center text-sm-left mx-auto mb-3" v-model="name" placeholder="Phone">
                
                <label for="new_email" class="pl-1 mb-1">E-mail addres:</label>
                <input type="email" id="new_email" class="form-control text-center text-sm-left mx-auto mb-3" v-model="email" placeholder="Phone">
                    
                <label for="new_phone" class="pl-1 mb-1">Phone number:</label>
                <input type="text" id="new_phone" class="form-control text-center text-sm-left mx-auto mb-3" v-model="phone" placeholder="Phone">
            </div>
                
            <div class="new-profile-button mb-3 mt-5">
                <button v-if="!success" class="btn btn-outline-dark px-4 py-2" @click="saveContact">Add Contact</button>
                <h3 v-else class="text-success">Success!</h3>

                <h5 v-if="error" class="text-primary mt-3">{{errorText}}</h5>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: "new-profile",
  props: {},
  data: function() {
    return {
      name: "",
      email: "",
      phone: "",
      success: false,
      error: false,
      errorText: ""
    };
  },
  methods: {
    // Input data to "contactData" and back to homepage
    // This should be a bit more DRY, mainly because it's just a straight copy of the method from EditProfile 
    saveContact() {
      this.error = false;

      // Check form validity
      if (this.name == "") {
        this.errorText = "Empty name!";
        this.error = true;
      }

      if (!/(.+)@(.+){2,}\.(.+){2,}/.test(this.email)) {
        this.errorText = "Wrong email address!";
        this.error = true;
      }

      if (this.email == "") {
        this.errorText = "Empty email!";
        this.error = true;
      }

      if (this.phone == "") {
        this.errorText = "Empty phone!";
        this.error = true;
      }

      // If error false, fill change the object and return to home
      if (!this.error) {
        var newItem = {
          name: this.name,
          email: this.email,
          phone: this.phone
        };
        contactData.push(newItem);

        this.success = true;

        setTimeout(() => {
          this.$router.push({ name: "home" });
        }, 1000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/bootstrap.scss";
</style>
