/* eslint-disable */
<template>
  <div class="content">
    <div class="main_container">
      <div
        id="twitter_feed"
        style="display:none"
      />
      <div
        id="facebook_feed"
        style="display:block; background: yellow;"
      >
        <div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
      </div>
      <div
        id="instagram_feed"
        style="display:none"
      />
      <div
        id="feed"
        class=""
        style="display:none"
      >
        <div
          v-for="post in posts"
          :key="post"
        >
          <Post
            :id="post.id"
            :username="post.username"
            :author="post.author"
            :sn="post.sn"
            :picture_path="post.picture_path"
            :content="post.content.getElementsByClassName('timeline-Tweet-text')[0].textContent"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Post from '../components/feed/Post'
// import axios from 'axios'
import { render_tweets } from '../scripts/twitter_render.js'
import { render_fbs } from '../scripts/facebook_render.js'

// Create a element for rendering tweets later.
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

  function myStopFunction() {
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
        var picture_path = header.getElementsByClassName("TweetAuthor-avatar")[0].children[0].currentSrc;
        var tweet_author = header.children[1].children[0].children[0].children[1].innerHTML
        var tweet_dict=
        {
          id : li.children[0].attributes[1].value,
          username: username,
          tweet_author: tweet_author,
          picture_path: picture_path,
          content: li.children[0],
          sn:'Twitter',
          time : Date.parse(time_element.dateTime)
        }
        thisa.twitter_posts.push(tweet_dict)
        // thisa.posts.push(tweet_dict)
      }
    }
    myStopFunction();

  }
}

export default {
  name: "Home",
  components:{
    Post
  },
  data(){
    return {
      twitter_posts:[],
      facebook_posts:[],
      instagram_posts:[],
    }
  },
  computed:{
    posts(){
      var all_posts = []
      var twitter_post
      for(twitter_post of this.twitter_posts){
        var post = {
          id: twitter_post.id,
          username: twitter_post.username,
          author: twitter_post.tweet_author,
          picture_path: twitter_post.picture_path,
          content: twitter_post.content,
          time: twitter_post.time,
          sn: "Twitter"
        }
        all_posts.push(post)
      }
      all_posts.sort(function(a, b){
        if(a.time < b.time){
          return -1;
        }
        if(a.time > b.time){
          return 1;
        }
        return 0;
      }
      );
      return all_posts
    }
  },
  mounted(){

    //   return axios.post(
    //   NBASEURL+'/get_twitter_followings/',{
    //   body: {
    //   },
    // }).then(function (response) {
    //     var followings=response.data.twitter.followings;
          var followings = ['jlo', 'wradiocolombia']
          followings.forEach(get_twitter_feed);
          full_twitter_list(this);
          render_tweets();
    //   });

    //   return axios.post(
    //   NBASEURL+'/get_twitter_followings/',{
    //   body: {
    //   },
    // }).then(function (response) {
    //     var followings=response.data.twitter.followings;
    //     followings.forEach(get_twitter_feed);
          // full_facebook_list(this);
          render_fbs();
    //   });
    // Gets tweets from Html and adds important fields in twitter_posts and in posts

  },
  created(){
  },
  updated(){
  },
  methods:{
  }
};
</script>
<style>
  .twitter_post.card{
    -webkit-box-shadow: 0px 0px 15px -3px rgba(187,187,187,1);
    -moz-box-shadow: 0px 0px 15px -3px rgba(187,187,187,1);
    box-shadow: 0px 0px 15px -3px rgba(187,187,187,1);

    margin-bottom: 20px;
    padding: 20px;
    border: none;
    border-radius: 15px;
  }
  .main_container{
    padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
