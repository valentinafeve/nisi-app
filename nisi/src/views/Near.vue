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
    </div>
  </div>
</template>
<script>
import NearUserCard from '../components/NearUserCard';

export default {
  name: "Near",
  components:{
    NearUserCard,
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
          {
            username:'ferminadaza',
            picture_path:'https://c1.staticflickr.com/4/3904/33251361216_90e8a588b9_z.jpg',
            rating:4.5
          },
        ]
    }
  },
  mounted(){

  },
  methods:{
    follow(){

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
</style>
