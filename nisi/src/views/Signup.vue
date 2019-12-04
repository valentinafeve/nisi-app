/* eslint-disable */
<template>
  <div class="margined small">
    <ion-item>
      <ion-label position="floating">
        Username
      </ion-label>
      <ion-input
        :value="username"
        @input="username = $event.target.value"
      />
    </ion-item>
    <ion-item>
      <ion-label position="floating">
        Password
      </ion-label>
      <ion-input
        type="password"
        :value="password"
        @input="password = $event.target.value"
      />
    </ion-item>
    <ion-item>
      <ion-label position="floating">
        Phone
      </ion-label>
      <ion-input
        type="phone"
        :value="phone"
        @input="phone = $event.target.value"
      />
    </ion-item>
    <section>
      <ion-button
        expand="block"
        @click="signup"
      >
        Sign up
      </ion-button>
    </section>
  </div>
</template>
<style>
.margined.small{
  margin: 30px;
}
</style>

<script>
import axios from 'axios'
var NBASEURL = "dsfahjk"

export default{
  data(){
    return {
      info: {username: '', password:'', phone:''},
      username: '',
      password: '',
      phone:'',
    }
  },
  methods: {
    signup(){
      var thisa = this;
      axios.post(
      NBASEURL+'/signup/',{
        body: {
        username : this.username,
        password : this.password,
        phone: this.phone,
        },
      }).then(
        function (response){
          thisa.info = response.data;
          thisa.$router.push({name: 'home'});
        }
    )
    },
  }
};
</script>
