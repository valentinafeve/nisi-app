/* eslint-disable */
<template>
  <div overflow-scroll="true">
    <Header>
      Nisi
      <div class="icon" @click="to_settings">
        <img src="../assets/icons/settings.svg" alt="" height="26px">
      </div>
    </Header>
    <div class="main_container">
      <div>
        <button @click="update_profile" type="button" name="button">Update profile</button>
        <div>
          <div class="first_card">
            <div
              class="card full_shadow"
              style="border: none; border-radius: 20px;"
            >
              <div
                class="card_image"
                style="margin: 0 auto; margin-top: 20px;"
              >
                <figure class="avatar avatar-xl">
                  <img
                    :src="profile.picture_path"
                    alt="..."
                  >
                </figure>
              </div>
              <div class="card-header">
                <div
                  class="card-title h5"
                  style="text-align: center"
                >
                  {{ profile.username }}
                </div>
                <div
                  class="card-subtitle"
                  style="text-align: center"
                >
                  {{ profile.first_name }} {{ profile.last_name }}
                </div>
                <div
                  class="card-subtitle text-gray"
                  style="text-align: center"
                >
                  {{ profile.about }}
                </div>
              </div>
              <div class="divider" />
              <div
                class="card-body"
                style="text-align: center; font-size: 40px; margin-bottom: 20px;"
              >
                {{ profile.rating }}
              </div>
              <div
                class="card-body"
                style="text-align: center; display: none;"
              >
                I rated: {{ profile.irated }}
                <br>
                Rated me: {{ profile.ratedme }}
              </div>
            </div>
          </div>
          <SNCard :sns="profile.sns">
          </SNCard>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/components/Header';
import SNCard from '../components/Profile/SNCard'
import axios from 'axios'

export default {
  name: "Profile",
  components:{
    Header,
    SNCard,
  },
  data(){
    return {
      profile: {
        sns:{
          
        }
      }
    }
  },
  methods:{
    to_settings(){
      this.$router.push("settings")
    },
    update_profile(){
      var url = NBASEURL+"/nu/profile/"
      var thisa = this;
      axios.post(url,
        {
          body: {
            session_cookie: session_cookie,
          }
      }).then(function (response) {
        if(response.data.status.ok){
          thisa.profile=response.data.profile;
        }
      })
    }
  },
  mounted(){
    update_profile()
  }
  ,
};
</script>
<style>
</style>
