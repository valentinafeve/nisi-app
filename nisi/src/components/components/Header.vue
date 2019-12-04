<template>
  <div class="header g-btn--pink-to-purple radius-md">
    <slot></slot>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: "header",
  data(){
    return {

    }
  },
  methods:{
  }
}
</script>
<style media="screen">
  .header{
    color: white;
    margin: 0px;
    box-shadow: 0px 0 8px rgba(100, 100, 100, 0.2);
    height: 50px;
    padding-top: 10px;
    padding-left: 20px;
    font-size: 20px;
  }
  .header *{
    color: white;
  }
</style>
