<template>
  <div class="instagram_settings">
    <div :class="[{modal:true}, {active: active_modal}]" id="modal-id">
      <a @click="close_modal" class="modal-overlay" aria-label="Close"></a>
      <div class="modal-container" style="border: none; border-radius: 20px;">
        <div class="modal-header">
          <a @click="close_modal" class="btn btn-clear float-right" aria-label="Close"></a>
          <div class="modal-title h5">Add instagram</div>
        </div>
        <div class="modal-body">
          <div class="content" style="display:block;">
            <div class="twitter_form">
              <div class="twitter_input">
                <div class="form-group">
                  <span style="display:inline-block;">@</span>
                  <input class="form-input" type="text" name="" v-model="ig_input" placeholder="Instagram username" style="width: 80%; display:inline-block;">
                </div>
              </div>
              <div class="centered">
                <button class="g-btn g-btn--ig radius-md" type="button" name="button" style="height:30px; padding-top:5px; width:55%;">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  <div class="social_network_panel card full_shadow" style="border: none; border-radius: 20px; font-size: 0.8em;">
    <div class="sn_header centered">
      <img
      src="../../../public/assets/icons/instagram.svg"
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
      <div class="message">Add your Instagram account.</div>
      <div @click="show_modal" class="button g-btn g-btn--add radius-lg" style="height: 30px; width: 100%; padding: 0px; margin: 0px; text-align: center;">
        Add
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
  export default{
    name: "Instagram_settings",
    data(){
      return {
        active_modal:false,
        ig_input:"",
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
