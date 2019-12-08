/* eslint-disable */
<template>
  <div overflow-scroll="true" class="profile">
    <Header>
      {{profile.username}}
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
                  {{ profile.first_name }} {{ profile.last_name }}
                </div>
              </div>
              <div class="divider" />
              <div
                :class="[{'card-body':true},{'about':true},{'visible':v_a}]"
                @click="show_r"
              >
                "{{ profile.about }}"
              </div>
              <div
                :class="[{'card-body':true},{'rating':true},{'visible':v_r}]"
                @click="show_s"
              >
                {{ profile.rating }}
              </div>
              <div
                :class="[{'card-body':true},{'statistics':true},{'visible':v_s}]"
                @click="show_a"
              >
                <div class="line">
                  <div class="title">
                    I rated
                  </div>
                  <div class="content">
                    {{ profile.irated }}
                  </div>
                </div>
                <div class="line">
                  <div class="title">
                    Rated me
                  </div>
                  <div class="content">
                    {{ profile.ratedme }}
                  </div>
                </div>
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
      },
      v_a: true,
      v_s: false,
      v_r: false,
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
    },
    show_a(){
      this.v_a= true
      this.v_r= false
      this.v_s= false
    },
    show_r(){
      this.v_a= false
      this.v_r= true
      this.v_s= false
    },
    show_s(){
      this.v_a= false
      this.v_r= false
      this.v_s= true
    }
  },
  mounted(){
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
  ,
};
</script>
<style>
  .profile .first_card .card-body{
    display: none;
  }
  .profile .first_card .card-body.about{
    color: #bbb;
    font-style: italic;
  }
  .profile .first_card .card-body.rating{
    font-size: 40px;
    text-align: center;
  }
  .profile .first_card .card-body.statistics{
  }
  .profile .first_card .card-body.statistics .line{
    position: relative;
  }
  .profile .first_card .card-body.statistics .title{
    display:inline-block;
    font-size: 18px;
    color: #333;
  }
  .profile .first_card .card-body.statistics .content{
    display:inline-block;
    font-size: 16px;
    color: #555;
    position:absolute;
    right: 0;
  }
  .profile .first_card .card-body.visible{
    display: block;
  }

</style>
