<template>
  <div class="header g-btn--purple-to-blue radius-md">
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
    top: 0px;
    position: fixed;
    margin: 0px;
    box-shadow: 0px 0 8px rgba(100, 100, 100, 0.2);
    height: 60px;
    padding-left: 20px;
    width: 100%;
    padding-top: 10px;
    font-size: 20px;
    z-index: 3;
  }
  .header .icon{
    width: 100%;
    position: fixed;
    float: top;
    left: 0px;
  }
  .header .icon *{
    /* align-content: right; */
    /* margin-right: 0; */
    position: relative;
    display: block;
    margin-right: 15px;
    margin-top: 5px;
    float: right;
    vertical-align: top;
    /* right: 0px; */
    /* margin-right: 0px; */
    color: #ffffff;
    z-index: 4;
    /* position: fixed; */
    /* right: 0; */
  }
</style>
