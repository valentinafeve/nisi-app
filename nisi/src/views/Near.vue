/* eslint-disable */
<template>
    <div class="content">
      <div class="header">
      </div>
      <div class="main_container">
        <div class="" v-for="user in near_users"  v-bind:key="user">
          <NearUserCard :username="user.username" :picture_path="user.picture_path" >
          </NearUserCard>
        </div>
      </div>
    </div>
</template>
<script>
import NearUserCard from '../components/NearUserCard';

export default {
  name: "Near",
  data(){
    return {
      near_users:
        [
          {
            username:'cclevin',
            picture_path:'http://3.bp.blogspot.com/-2Nd9OdRT6VA/U8OBaTAkmPI/AAAAAAAAUoY/u2QmfcAZJhE/s1600/Picture7.png',
            rating:4.5
          },
          {
            username:'ferminadaza',
            picture_path:'https://c1.staticflickr.com/4/3904/33251361216_90e8a588b9_z.jpg',
            rating:4.5
          },
        ]
    }
  },
  methods:{
    follow(){

    }
  },
  mounted(){

  },
  components:{
    NearUserCard,
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
</style>
