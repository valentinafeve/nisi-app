<template>
  <div class="twitter_settings">
    <div :class="[{modal:true}, {active: active_modal}]" id="modal-id">
      <a href="#close" class="modal-overlay" aria-label="Close"></a>
      <div class="modal-container" style="border: none; border-radius: 20px;">
        <div class="modal-header">
          <a @click="close_modal" class="btn btn-clear float-right" aria-label="Close"></a>
          <div class="modal-title h5">Adding twitter</div>
        </div>
        <div class="modal-body">
          <div class="content" style="display:block;">
            <div class="twitter_form">
              <div class="twitter_input">
                <div class="form-group">
                  <span style="display:inline-block;">@</span>
                  <input class="form-input" type="text" name="" v-model="twitter_input" placeholder="Twitter username" style="width: 80%; display:inline-block;">
                </div>
              </div>
              <div class="little_message">
                Add this code wherever you want in the timeline of @{{twitter_input}}. There is an example below.
              </div>
              <div class="twitter_code">
                {{twitter_code}}
              </div>
              <div class="twitter_code">
                I am using Nisi, check out my code! {{twitter_code}}
              </div>
              <div class="centered">
                <button class="g-btn g-btn--aqua radius-md" type="button" name="button" style="height:30px; padding-top:5px; width:55%;">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div class="social_network_panel card full_shadow" style="border: none; border-radius: 20px; font-size: 0.8em;">
    <div class="sn_header centered">
      <img
      src="../../../public/assets/icons/twitter.svg"
      alt="Home"
      weight="28px"
      height="24px"
      >
    </div>
    <div class="divider"></div>
      <div class="is_added" :style="{display:d_ta}">
        <div class="message">
          Your Telegram account is added.
        </div>
        <div class="settings">
          <div class="form-group">
            <label class="form-switch">
              <input type="checkbox">
              <i class="form-icon"></i> Public
            </label>
            <label class="form-switch">
              <input type="checkbox">
              <i class="form-icon"></i> Mutual followers
            </label>
          </div>
        </div>
      </div>
    <div class="isnt_added" :style="{display:d_tna}">
      <div class="message">Add your Twitter account.</div>
      <div @click="show_modal" class="button g-btn g-btn--add radius-lg" style="height: 30px; width: 100%; padding: 0px; margin: 0px; text-align: center;">
        Add
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
  export default{
    name: "Twitter_settings",
    data(){
      return {
        twitter_input:"username",
        twitter_code:"asdfksdh",
        active_modal:false,
      }
    },
    methods:{
      show_modal(){
        this.active_modal=true;
      },
      close_modal(){
        this.active_modal=false;
      }
    },
    computed:{
      d_ta(){
        if(this.info){
          return "block"
        }
        return "none"
      },
      d_tna(){
        if(!this.info){
          return "block"
        }
        return "none"
      }
    },
    props:["info"],
  }
</script>
<style media="screen">
.twitter_form input{
  border-radius: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  border: line;
  border-color: #f6f6f6;
}
.sn_card_editable .little_message{
  font-size: 12px;
  background: #f5f5f5;
  color: #777;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.sn_card_editable .twitter_code{
  font-size: 12px;
  background: #f7f7f7;
  color: #aaa;
  font-style: italic;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
