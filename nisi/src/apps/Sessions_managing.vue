<template>
  <div class="">
    Loading...
  </div>
</template>
<script>

import axios from 'axios'

export default {
  props: {
    timeout: { type: Number, default: 10000000 },
  },
  mounted(){
    // this.presentLoading();
    this.checkLoggedIn(this);
  },
  methods:{
    presentLoading() {
      return this.$ionic.loadingController
        .create({
          message: 'Loading',
          duration: this.timeout,
        })
        .then(l => {
          setTimeout(function() {
            l.dismiss()
          }, this.timeout)
          return l.present()
        })
    },
    checkLoggedIn(){
      var router = this.$router;
      // axios.get('/sessions_managing/')
      // .then(function (response) {
      //   // handle success
      //   if (response.data.logged){
      //     thisa.$router.push({name: 'home'})
      //   }
      //   else{
          router.push({name: 'home'})
      //   }
      // })
      // .catch(function (error) {
      //   // handle error
      // })
      // .finally(function () {
      //   // always executed
      // });
    }
  },
}

</script>
