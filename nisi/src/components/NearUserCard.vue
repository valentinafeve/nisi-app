<template>
  <div class="near_user_card">
    <div
      class="card full_shadow"
      style="border: none; border-radius: 20px;"
    >
      <div class="card_image">
        <figure class="avatar avatar-xl">
          <img
            :src="picture_path"
            alt="..."
          >
        </figure>
      </div>
      <div class="card_content">
        <div class="user_info">
          {{ username }}
        </div>
        <div class="follow">
          <div class="follow_state" :class="{visible: nfollowed}">
            <button @click="follow" class="button_follow full_shadow g-btn g-btn--follow radius-md" style="width:100%;">
              Follow
            </button>
          </div>
          <div class="follow_state" :class="{visible: followed}">
            <div class="button_followed full_shadow g-btn--followed radius-md" style="width:100%;" disabled>
              Followed
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "NearUserCard",
  props:['username','picture_path', 'followed'],
  data(){
    return {
    }
  },
  methods:{
    follow(){
      var thisa = this;
      let url = NBASEURL+"/net/follow/"
      var usrname = this.username
      axios.post(url,
        {
          body: {
            session_cookie: session_cookie,
            user:{
              username: this.username,
            }
          }
      }).then(function (response) {
        if(response.data.status.ok){
          thisa.followed = true;
        }
      })
    }
  },
  computed:{
    nfollowed(){
      return !this.followed;
    }
  }
}
</script>
<style media="screen">
.near_user_card .card{
  position: relative;
}
.near_user_card .card .card_image{
  vertical-align: top;
  display: inline-block;
  width: 80px;
}
.near_user_card .card .card_content{
  display: inline-block;
  width: 50%;
  position: absolute;
  right: 10;
}
.near_user_card .card{
  display: block;
}

.user_info{
  margin-bottom:5px;
}

.button_follow *{
  padding-top:0px;
  vertical-align: middle;
  text-align: center;
}
.button_follow{
  height:30px;
  padding-top: 5px;
  vertical-align: middle;
  text-align: center;
}
.button_followed{
  height:30px;
  padding-top: 5px;
  vertical-align: middle;
  text-align: center;
}

.button_follow.disabled{
  background: blue;
}
.follow .follow_state{
  display:none;
}
.follow .follow_state.visible{
  display:block;
}
</style>
