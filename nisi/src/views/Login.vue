/* eslint-disable */
<template>
<div class="margined small">


</div>
</template>
<style>
.margined.small{
  margin: 30px;
}
</style>

<script>
import axios from 'axios'

export default{
  data(){
    return {
      info: {username: '', password:''},
      username: '',
      password: '',
    }
  },
  methods: {
    login(thisa=this){
      axios.post(
      '/login/',{
      body: {
      username : this.username,
      password : this.password
      },
    }).then(function (response) {
        if (response.data.logged){
          thisa.$router.push({name: 'home'})
        }
        else{
          const toast = document.createElement('ion-toast');
          toast.header = 'Toast header';
          toast.message = 'Click to Close';
          toast.position = 'bottom';
          toast.buttons = [{
              text: 'Login failed',
              role: 'cancel',
              // handler: () => {
              //
              // }
            }
          ];

          document.body.appendChild(toast);
          return toast.present();
        }
      })
    },
  }
}
</script>
