/* eslint-disable */
<template>
  <div class="content">
    <Header>
      Nisi
    </Header>
    <div class="main_container">
      <div
        v-for="user in near_users"
        :key="user.username"
        class=""
      >
        <NearUserCard
          :key="user.username"
          :username="user.username"
          :picture_path="user.picture_path"
          :followed="user.followed"
        />
      </div>
      <div class="test" style="display:block">
        <button @click="update_location"> Sendi location </button>
        <button @click="update_near_users">Near users </button>
        <div id="feedito" class="">
          {{ latitude }}
          {{ longitude }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NearUserCard from '../components/NearUserCard';
import Header from '../components/components/Header';
import axios from 'axios'

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

async function send_location(){
  Geolocation.getCurrentPosition({timeout:5000}).then((coords)=>{
    console.log(coords)
  }).catch((error)=>{
    console.log(error)
  }).finally(()=>{
    console.log("finally")
  });
  // console.log(coords)
  // let url = NBASEURL+"/map/updatelocation/"
  // axios.post(url,
  //   {
  //     body: {
  //       session_cookie: session_cookie,
  //       position:{
  //         lat: coords.coords.latitude,
  //         lng: coords.coords.longitude,
  //       }
  //     }
  // }).then(function (response) {
  //   if(response.data.status.ok){
  //   }
  // })
}

export default {
  name: "Near",
  components:{
    NearUserCard,
    Header,
  },
  data(){
    return {
      near_users:
        [
          {
            username:'cclevin',
            picture_path:'http://3.bp.blogspot.com/-2Nd9OdRT6VA/U8OBaTAkmPI/AAAAAAAAUoY/u2QmfcAZJhE/s1600/Picture7.png',
            rating:4.5
          },
        ],
        latitude: 0,
        longitude: 0
    }
  },
  mounted(){
    // var rcoords = setInterval(reading_coords, 10000);
  },
  methods:{
    follow(){

    },
    showito(){
      // var feedi =
      $("#feedito").load("https://m.facebook.com/ruastabi");
      // .load("http://capacitor.ionicframework.com/")
    },
    update_location(){
      send_location()
    },
    update_near_users() {
      var thisa = this;
      console.log("Sending")
      let url = NBASEURL+"/map/nearusers/"
      axios.post(url,
        {
          body: {
            session_cookie: session_cookie,
          }
      }).then(function (response) {
        if(response.data.status.ok){
          console.log(thisa.near_users)
          thisa.near_users = response.data.near_users;
        }
      })
    }
  }
};

</script>
<style media="screen">
  .main_container{
    margin: 20px;
  }
  ion-title{
    font-size: 0.9em;
  }
  #feedito{
    background:pink;
  }
</style>
