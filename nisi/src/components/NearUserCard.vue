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
          <button @click="follow" class="button_follow full_shadow g-btn g-btn--purple-to-blue radius-md">
            Follow
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "NearUserCard",
  props:['username','picture_path'],
  data(){
    return {
      followed: false,
    }
  },
  methods:{
    follow(){
      this.followed = true;
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
        }
      })
    }
  }
}
</script>
<style media="screen">
.near_user_card{

}
.near_user_card .card .card_image{
  vertical-align: top;
  display: inline-block;
  width: 80px;
}
.near_user_card .card .card_content{
  display: inline-block;
  width: 90px;
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

.button_follow.disabled{
  background: blue;
}
</style>
