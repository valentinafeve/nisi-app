/* eslint-disable */
<template>
  <div class="content">
    <Header>
      Nisi
      <div class="icon" @click="to_notifications()">
        <img src="../assets/icons/bell.svg" alt="" height="25px">
      </div>
    </Header>
    <div class="main_container">
      <TwitterFeed :twitter_posts="twitter_posts">
      </TwitterFeed>
      <FacebookFeed>
      </FacebookFeed>
      <InstagramFeed :instagram_posts="instagram_posts">
      </InstagramFeed>
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
import Header from '../components/components/Header';
import TwitterFeed from '../components/feed/Twitter_feed';
import InstagramFeed from '../components/feed/Instagram_feed';
import FacebookFeed from '../components/feed/Facebook_feed';

export default {
  name: "Home",
  components:{
    Post,
    Header,
    TwitterFeed,
    InstagramFeed,
    FacebookFeed,
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


  },
  created(){
  },
  updated(){
  },
  methods:{
    to_notifications(){
      this.$router.push("notifications")
    }
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
