<template>
  <div>
    <div id="facebook_feed" class="">
      <button type="button" name="button" @click="load_facebook">Load facebook</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import JQuery from 'jquery'
let $ = JQuery

export default {
  name: 'Facebook_feed',
  data(){
    return{

    }
  },
  components: {

  },
  methods:{
    load_facebook(){
       // setInterval(function(){ alert("Hello"); }, 7000);
      console.log("Loaded")
      $("#facebook_feed").load("https://m.facebook.com/home.php?ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=7&ref=104",
        function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success")
            alert("External content loaded successfully!");
          if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
        }
      )
    }
  },
  mounted(){

    // var thisa = this;
    // axios.post(
    //   NBASEURL+'/fd/fbfollowings/',{
    //   body: {
    //     session_cookie:session_cookie,
    //   },
    // }).then(function (response) {
    //       var instagram_followings = response.data.instagram.users;
    //       instagram_followings.forEach(get_instagram_feed);
    //       full_instagram_list(thisa);
    //       render_tweets();
    //   });
  },
  props:["instagram_posts"]
}
</script>

<style media="screen">
#facebook_feed{
  display:none;
}
#facebook_feed{
  display:none;
}
</style>
