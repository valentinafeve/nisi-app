<template>
  <div>
    <div class="rating">
      <div class="rating_icon">
        <img class="icon_void" src="../../assets/icons/heart.svg" alt="" height="30px">
        <img class="icon_filled" src="../../assets/icons/heart_fill.svg" alt="" height="30px">
      </div>
      <div class="rating_icon">
        <img class="icon_void" src="../../assets/icons/heart.svg" alt="" height="30px">
        <img class="icon_filled" src="../../assets/icons/heart_fill.svg" alt="" height="30px">
      </div>
      <div class="rating_icon">
        <img class="icon_void" src="../../assets/icons/heart.svg" alt="" height="30px">
        <img class="icon_filled" src="../../assets/icons/heart_fill.svg" alt="" height="30px">
      </div>
      <div class="rating_icon">
        <img class="icon_void" src="../../assets/icons/heart.svg" alt="" height="30px">
        <img class="icon_filled" src="../../assets/icons/heart_fill.svg" alt="" height="30px">
      </div>
      <div class="rating_icon">
        <img class="icon_void" src="../../assets/icons/heart.svg" alt="" height="30px">
        <img class="icon_filled" src="../../assets/icons/heart_fill.svg" alt="" height="30px">
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: "Rating",
  data(){
    return {

    }
  },
  methods:{
  }
}
</script>
<style media="screen">
  .rating{
    display: block;
    width: 100%;
  }
  .rating_icon{
    margin-left:5px;
    margin-right:5px;
    height: 20px;
    display: inline;
  }
  .rating_icon .icon_filled{
    display:none;
  }
  .rating_icon:hover .icon_void{
    display:none;
  }
  .rating_icon:hover .icon_filled{
    display:inline-block;
  }
</style>
