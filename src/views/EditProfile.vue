<template>
    <div class="profile page-wrap">
        <div class="container">
            <h1 class="site-title mb-5">{{contact.name}}'s profile</h1>
            <div class="profile-details">
                <div class="row mb-3 align-items-center">
                    <div class="col-sm-5 text-sm-right text-muted">Name:</div>
                    <div class="col-sm-6 text-sm-left">
                        <input type="text" class="form-control text-center text-sm-left mx-auto ml-sm-0" v-model="name" placeholder="Phone">
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-sm-5 text-sm-right text-muted">E-mail:</div>
                    <div class="col-sm-6 text-sm-left">
                        <input type="email" class="form-control text-center text-sm-left mx-auto ml-sm-0" v-model="email" placeholder="Phone">
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-sm-5 text-sm-right text-muted">Phone:</div>
                    <div class="col-sm-6 text-sm-left">
                        <input type="text" class="form-control text-center text-sm-left mx-auto ml-sm-0" v-model="phone" placeholder="Phone">
                    </div>
                </div>
            </div>
            <div class="profile-details mb-3">
                <button v-if="!success" class="btn btn-outline-dark px-4 py-2" @click="saveContact">Save Contact</button>
                <h3 v-else class="text-success">Success!</h3>

                <h5 v-if="error" class="text-primary mt-3">{{errorText}}</h5>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: "edit-profile",
  props: {
    contact: {}
  },
  data: function() {
    return {
      index: this.$route.params.id,
      name: this.contact.name,
      email: this.contact.email,
      phone: this.contact.phone,
      success: false,
      error: false,
      errorText: ""
    };
  },
  methods: {
    // Input data to "contactData" and back to homepage
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
        contactData[this.index].name = this.name;
        contactData[this.index].email = this.email;
        contactData[this.index].phone = this.phone;

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

.profile-details {
  font-size: 18px;
  margin-bottom: 60px;
}
.form-control {
  max-width: 350px;
}
</style>
