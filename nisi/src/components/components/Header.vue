<template>
  <div class="header g-btn--aqua-to-blue radius-md">
    <slot></slot>
    <slot name="icon"></slot>
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
    top: 0px;
    position: fixed;
    margin: 0px;
    box-shadow: 0px 0 8px rgba(100, 100, 100, 0.2);
    height: 50px;
    padding-left: 20px;
    width: 100%;
    padding-top: 10px;
    font-size: 20px;
    z-index: 3;
  }
  .header *{
    color: white;
  }
</style>
