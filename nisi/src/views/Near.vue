/* eslint-disable */
<template>
  <div class="near">
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
      <div class="error message" style="display:none;" :class="{message_visible:near_users_empty}">
        Let Nisi access to your location in order to see who is near.
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
            username: 'vronsky',
            picture_path: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.zennioptical.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F08%2Fsquare-glasses-round-face.jpg&f=1&nofb=1',
            rating: 3.0,
            followed: true,
          },
          {
            username: 'kalejandrovna',
            picture_path: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.allure.com%2Fphotos%2F5ac3b8f9424f773b2007db4d%2F1%3A1%2Fw_400%252Cc_limit%2Fbest-glasses-for-your-face-shape-hannah-1.jpg&f=1&nofb=1',
            rating: 3.0,
            followed: false,
          },

        ],
      position:{
        lat: 0,
        lng: 0
      }
    }
  },
  computed:{
    near_users_empty(){
      return false
    }
  },
  mounted(){
    update_users();
    const wait = Geolocation.watchPosition({}, (position, err) => {
      console.log("Im at")
      console.log(position);
      var thisa = this;
      thisa.position.lat = position.coords.latitude
      thisa.position.lng = position.coords.longitude
      let url = NBASEURL+"/map/updatelocation/"
      axios.post(url,
        {
          body: {
            session_cookie: session_cookie,
            position:{
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          }
      }).then(function (response) {
      })
    });

    var interval;

    function myFunction() {
      interval = setInterval(update_users, 3000);
    }

    function update_users() {
      var thisa = this;
      let url = NBASEURL+"/map/nearusers/"
      axios.post(url,
        {
          body: {
            session_cookie: session_cookie,
          }
      }).then(function (response) {
        if(response.data.status.ok){
          thisa.near_users = response.data.near_users;
        }
      })
    }

  },
  methods:{
    follow(){

    },
  }
};

</script>
<style media="screen">
  .main_container{
    margin: 20px;
  }
  .near .error.message{
    font-size: 12px;
    background: #f5f5f5;
    color: #777;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  #feedito{
    background:pink;
  }
</style>
