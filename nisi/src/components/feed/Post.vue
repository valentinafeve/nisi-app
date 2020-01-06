<template>
  <div>
    <div :class="{post:true, card:true, full_shadow:true, dimmed:dimmed}"
      style="border-radius: 10px"
      @click="ratable">
      <div class="post_content">
          <div
          class="card-header"
          style="height: 35px; padding: 0px; display:block;"
          >
            <div class="card_image">
              <figure class="avatar avatar-sm">
                <img :src="picture_path" alt="...">
              </figure>
            </div>
            <div class="card_content">
              <div class="card-title h5" style="font-size:0.7em;">
              {{ author }}
              </div>
              <div class="card-subtitle text-gray" style="font-size:0.6em;">
              From {{ sn }}
              </div>
            </div>
          </div>
          <div class="divider" />
          <div class="" style="font-size:0.6em">
            {{ content }}
          </div>
      </div>
      <div class="rating_pane">
          <Rating class="">
          </Rating>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '../components/Rating'
export default {
  name: 'Post',
  data(){
    return{
      dimmed: false,
    }
  },
  components: {
    Rating,
  },
  methods:{
    ratable(){
      this.dimmed=!this.dimmed;
    }
  },
  props:['id', 'content', 'picture_path', 'username', 'author', 'sn']
}
</script>

<style media="screen">
  .post{
    position: relative;
  }
  .post.card{
      border-radius: 30px;
  }
  .post.card .card-header{
    display: block;
  }
  .post.card .card_image{
    margin-top:5px;
    vertical-align: middle;
    display: inline;
    width: 29px;
  }
  .post.card .card_content{
    vertical-align: top;
    padding: 0px;
    display: inline-block;
    margin-left: 15px;
    margin-top: 3px;
    width: 90px;
  }
  .post.card .card_content *{
    padding: 0px;
    margin: 0px;
  }
  .post.card{
    display: block;
  }
  .post_content{
    display: block;
  }
  .rating_pane{
    top: 34%;
    left: 10%;
    position: absolute;
    visibility: hidden;
  }
  /* .rating_pane .rating{
    display: inline-block;
  } */
  .dimmed .rating_pane{
    visibility: visible;
  }
  .dimmed .post_content{
    visibility: hidden;
    background: #eeeeee21;
  }
  .dimmed *{
    color: #dddddd;
  }
</style>
