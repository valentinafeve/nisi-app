/* eslint-disable */
<template>
  <div class="content">
    <Header>
      Nisi
    </Header>
    <div class="main_container">
      <div
        v-for="user in near_users"
        :key="user"
        class=""
      >
        <NearUserCard
          :username="user.username"
          :picture_path="user.picture_path"
        />
      </div>
      <div class="">
        <button @click="getLocatioon()" type="button" name="button">Show location</button>
        <button @click="showito()" type="button" name="button">Show alert</button>
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
import 'capacitor-fancy-geo'
import JQuery from 'jquery'
let $ = JQuery

import { Plugins } from '@capacitor/core';

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
    getLocatioon() {
      var Geolocation = Plugins.Geolocation;
      var position;
      console.log("Waiting...")
      Capacitor.Plugins.Geolocation.requestPermissions();
      const wait = Geolocation.watchPosition({
            timeout: 30000
          }, (position, err) => {
            console.log(position)
            console.log(err)
        }
      )
      console.log(position)
      console.log("Ended")
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
