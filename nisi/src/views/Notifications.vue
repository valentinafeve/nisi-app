<template>
  <div class="">
    <Header>
      Notifications
    </Header>
    <div class="main_container">
      <div class="notification" v-for="notification in notifications" :key="notification">
        <div class="card full_shadow" style="border: none; border-radius: 20px;">
          <div class="card_image">
            <img :src="notification.img" alt="">
          </div>
          <div class="card_content">
            <div v-if="notification.type.loved" class="">
              {{notification.username}} has loved your post
            </div>
            <div v-if="notification.type.followed" class="">
              Is following you
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/components/Header'

export default{
  name:"Notifications",
  data(){
    return {
      username: '',
      password: '',
      notifications:[
        {
          img: '',
          username:'cclevin',
          type: {
            followed: true,
          }
        },
        {
          img: '',
          username:'anakarenina',
          type: {
            loved: true,
          }
        }
      ]
    }
  },
  components:{
    Header
  },
  methods: {

  }
}
</script>
<style media="screen">
.notification .card{
  display: block;
}
.notification .card .card_image{
  vertical-align: top;
  display: inline-block;
  width: 20%;
}
.notification .card .card_content{
  display: inline-block;
  font-size: 0.8em;
  width: 70%;
}
</style>
