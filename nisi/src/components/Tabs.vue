<template>
  <div class="tabs">
    <Tab :is_visible="profile_visible">
      <slot name="profile"></slot>
    </Tab>
    <Tab :is_visible="home_visible">
      <slot name="home"></slot>
    </Tab>
    <Tab :is_visible="near_visible">
      <slot name="near"></slot>
    </Tab>

    <!-- Use v-slot:bottom with Vue ^2.6.0 -->
    <div class="tab_bar">
      <div class="tab_button" @click="to_profile()">
        <img src="../../public/assets/icons/avatar.svg" alt="Profile" height="24px">
      </div>
      <div class="tab_button" @click="to_home()">
        <img src="../../public/assets/icons/house.svg" alt="Home"  height="25px">
      </div>
      <div class="tab_button" @click="to_near()">
        <img src="../../public/assets/icons/placeholder.svg" alt="Near"  height="24px">
      </div>
    </div>

  </div>

</template>

<script>
import Tab from './Tab'
export default {
  name: 'Tabs',
  data(){
    return {
      profile_visible:false,
      home_visible:true,
      near_visible:false,
    }
  },
  components: {
    Tab
  },
  methods:{
    to_profile(){
      console.log("To profile...")
      this.profile_visible = true
      this.home_visible = false
      this.near_visible = false
    },
    to_home(){
      console.log("To home...")
      this.profile_visible = false
      this.home_visible = true
      this.near_visible = false
    },
    to_near(){
      console.log("To near...")
      this.profile_visible = false
      this.home_visible = false
      this.near_visible = true
    }
  }
}
</script>

<style media="screen">
  .tab_bar{
    background: white;
    z-index: 3;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 50px;
    padding: 0px;
  }
  .tab_bar .tab_button{
    display: inline-block;
    vertical-align: middle;
    margin-top: 10px;
    margin-left: 18%;
  }
</style>
