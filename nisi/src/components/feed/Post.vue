<template>
  <div>
    <div class="post card full_shadow" style="border-radius: 10px">
      <div class="card-header" style="height: 35px; padding: 0px; display:block; width:100%;">
        <div class="card_image">
          <figure class="avatar avatar-sm">
            <img :src="picture_path" alt="...">
          </figure>
        </div>
        <div class="card_content">
          <div class="card-title h5" style="font-size:0.7em;"> {{author}} </div>
          <div class="card-subtitle text-gray" style="font-size:0.6em;">From {{sn}}</div>
        </div>
      </div>
      <div class="divider">

      </div>
      <div class="" style="font-size:0.6em">
        {{content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props:['id', 'content', 'picture_path', 'username', 'author', 'sn'],
  components: {
  }
}
</script>

<style media="screen">
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
</style>
