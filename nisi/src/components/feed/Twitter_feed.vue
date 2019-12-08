<template>
  <div>
    <div id="twitter_feed" class="">

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { render_tweets } from '../../scripts/twitter_render.js'
// Create a tag for he user
function get_twitter_feed(user){
  var twitter_feed = document.getElementById("twitter_feed");
  var element = document.createElement("a");
  var twitter_link="https://twitter.com/"+user+"?ref_src=twsrc%5Etfw"
  element.setAttribute('class', 'twitter-timeline');
  element.setAttribute('href', twitter_link);
  element.innerHTML = user;
  twitter_feed.appendChild(element);
}

function full_twitter_list(thisa){

  var interval = setInterval(get_tweets, 10000);

  function stop_rendering_twitter() {
    clearInterval(interval);
  }

  function get_tweets() {
    var iframes = document.getElementById("twitter_feed").getElementsByTagName("iframe")
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
        thisa.twitter_posts.push(tweet_dict)
      }
    }
    stop_rendering_twitter();

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
      NBASEURL+'/fd/twfollowings/',{
      body: {
        session_cookie:session_cookie,
      },
    }).then(function (response) {
          var twitter_followings = response.data.twitter.users;
          twitter_followings.forEach(get_twitter_feed);
          full_twitter_list(thisa);
          render_tweets();
      });
  },
  props:["twitter_posts"]
}
</script>

<style media="screen">
#twitter_feed{
  display:none;
}
</style>
