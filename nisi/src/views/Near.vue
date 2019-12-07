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
          :username="user.username"
          :picture_path="user.picture_path"
        />
      </div>
      <div class="">
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

async function getCurrentPosition() {
  const coordinates = await Geolocation.getCurrentPosition();
  console.log('Current', coordinates);
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
  },
  methods:{
    follow(){

    },
    showito(){
      // var feedi =
      $("#feedito").load("https://m.facebook.com/ruastabi");
      // .load("http://capacitor.ionicframework.com/")
    },
    update_location() {
      console.log("Sending")
      let url = NBASEURL+"/map/updatelocation/"
      axios.post(url,
        {
          body: {
            session_cookie: session_cookie,
            position:{
              lat: 4.78912,
              lng: 72.78912,
            }
          }
      }).then(function (response) {
        if(response.data.status.ok){
        }
      })
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
