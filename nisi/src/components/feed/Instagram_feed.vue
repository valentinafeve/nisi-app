<template>
  <div>
    <div id="instagram_feed" class="">

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import JQuery from 'jquery'
let $ = JQuery

function load_instagram_posts(){
  concole.log("Loading")
}

// Create a tag for he user
function get_instagram_feed(user){
  console.log("Loading... "+user)
  var link = "https://www.instagram.com/"+user+"/?hl=de";
  console.log(link)
  $("#instagram_feed").load(link)
  console.log("adshj")
}

function full_instagram_list(thisa){

  var interval = setInterval(get_tweets, 10000);

  function stop_rendering_instagram() {
    clearInterval(interval);
  }

  function get_tweets() {
    var iframes = document.getElementById("instagram_feed").getElementsByTagName("iframe")
    var iframe
    for(iframe of iframes){
      var tweets = iframe.contentDocument.children[0].children[1].children[0].children[1].children[1].children[0].children;
      var username = iframe.contentDocument.children[0].children[1].children[0].children[0].children[1].children[0].children[0].innerHTML;
      var li
      for( li of tweets){
        var time_element = li.children[0].getElementsByClassName("timeline-Tweet-metadata")[0].children[0].children[0];
        var header= li.children[0].getElementsByClassName("timeline-Tweet-author")[0];
        var picture_path_author = header.getElementsByClassName("TweetAuthor-avatar")[0].children[0].currentSrc;
        var tweet_author = header.children[1].children[0].children[0].children[1].innerHTML
        var tweet_dict=
        {
          id : li.children[0].attributes[1].value,
          username: username,
          tweet_author: tweet_author,
          picture_path: picture_path_author,
          content: li.children[0],
          sn:'Twitter',
          time : Date.parse(time_element.dateTime)
        }
        thisa.instagram_posts.push(tweet_dict)
      }
    }
    stop_rendering_instagram();

  }
}

export default {
  name: 'Twitter_feed',
  data(){
    return{

    }
  },
  components: {

  },
  methods:{

  },
  mounted(){
    var thisa = this;
    axios.post(
      NBASEURL+'/fd/igfollowings/',{
      body: {
        session_cookie:session_cookie,
      },
    }).then(function (response) {
          var instagram_followings = response.data.instagram.users;
          instagram_followings.forEach(get_instagram_feed);
          full_instagram_list(thisa);
          render_tweets();
      });
  },
  props:["instagram_posts"]
}
</script>

<style media="screen">
#instagram_feed{
  display:none;
}
#instagram_feed{
  display:none;
}
</style>
