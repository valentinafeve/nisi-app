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
        style="display:none;"
      >
      </div>
      <div
        id="instagram_feed"
        style="display:none"
      />
      <div
        id="feed"
        class=""
        style="display:block"
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
function get_facebook_feed(user){
  var facebook_feed = document.getElementById("facebook_feed");
  var element = document.createElement("div");
  element.setAttribute("class", "fb-page");
  var facebook_link="https://www.facebook.com/"+user
  element.setAttribute("data-href", facebook_link);
  element.setAttribute("data-tabs", "timeline");
  element.setAttribute("data-hide-cover", "true");
  element.setAttribute("data-show-facepile", "false");
  var blockquote = document.createElement("blockquote");
  blockquote.setAttribute("class", "fb-xfbml-parse-ignore");
  var a = document.createElement("a");
  a.innerHTML = user;
  blockquote.appendChild(a)
  element.appendChild(blockquote)
  facebook_feed.appendChild(element);
}

function full_facebook_list(thisa){
  var interval = setInterval(get_fb_posts, 10000);

  function stop_rendering_facebook() {
    clearInterval(interval);
  }

  function get_fb_posts() {
    var pages = document.getElementById("facebook_feed").children
    var page
    for (page of pages){
      var iframe = page.getElementsByTagName("span")[0].children[0]
      var url = iframe.src;
      var getData = function (data) {
          if (data && data.query && data.query.results && data.query.results.resources && data.query.results.resources.content && data.query.results.resources.status == 200) loadHTML(data.query.results.resources.content);
          else if (data && data.error && data.error.description) loadHTML(data.error.description);
          else loadHTML('Error: Cannot load ' + url);
      };
      var loadURL = function (src) {
          url = src;
          var script = document.createElement('script');
          script.src = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20data.headers%20where%20url%3D%22" + encodeURIComponent(url) + '%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=getData';
          document.body.appendChild(script);
      };
      var loadHTML = function (html) {
          iframe.src = 'about:blank';
          iframe.contentWindow.document.open();
          iframe.contentWindow.document.write(html.replace(/<head>/i, '<head><base href="' + url + '"><scr' + 'ipt>document.addEventListener("click", function(e) { if(e.target && e.target.nodeName == "A") { e.preventDefault(); parent.loadURL(e.target.href); } });</scr' + 'ipt>'));
          iframe.contentWindow.document.close();
      }

      loadURL(iframe.src);
      console.log(iframe)
      var content = iframe.contentDocument
    }
    stop_rendering_facebook();
  }
}

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
        thisa.posts.push(tweet_dict)
      }
    }
    stop_rendering_twitter();

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
          var twitter_followings = ['jlo', 'wradiocolombia']
          twitter_followings.forEach(get_twitter_feed);
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
          var facebook_followings = ['clubbodytech','puercoespinas','omar.s.santamaria']
          facebook_followings.forEach(get_facebook_feed);
          full_facebook_list(this);
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
</style>
