<template>
  <div class="telegram_settings">
    <div :class="[{modal:true}, {active: active_modal}]" id="modal-id">
      <a @click="close_modal" class="modal-overlay" aria-label="Close"></a>
      <div class="modal-container" style="border: none; border-radius: 20px;">
        <div class="modal-header">
          <a @click="close_modal" class="btn btn-clear float-right" aria-label="Close"></a>
          <div class="modal-title h5">Add Telegram</div>
        </div>
        <div class="modal-body">
          <div class="content" style="display:block;">
            <div class="twitter_form">
              <div class="twitter_input">
                <div class="form-group">
                  <span style="display:inline-block;">@</span>
                  <input class="form-input" type="text" name="" v-model="telegram_input" placeholder="Telegram username" style="width: 80%; display:inline-block;">
                </div>
              </div>
              <div class="centered">
                <button @click="save_telegram" class="g-btn g-btn--blue radius-md" type="button" name="button" style="height:30px; padding-top:5px; width:55%;">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div class="social_network_panel card full_shadow" style="border: none; border-radius: 20px; font-size: 0.8em;">
    <div class="sn_header centered">
      <img
      src="../../../public/assets/icons/telegram.svg"
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
      <div class="message">Add your Telegram account. You will set whether you want it to be public, private or friends shared.</div>
      <div @click="show_modal" class="button g-btn g-btn--add radius-lg" style="height: 30px; width: 100%; padding: 0px; margin: 0px; text-align: center;">
        Add
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import axios from 'axios'

  export default{
    name: "Telegram_settings",
    data(){
      return {
        active_modal:false,
        telegram_input:"",
      }
    },
    methods:{
      show_modal(){
        this.active_modal=true;
      },
      close_modal(){
        console.log("Cliqued")
        this.active_modal=false;
      },
      save_telegram(){
        this.followed = true;
        let url = NBASEURL+"/nu/addsn/"
        var username = this.telegram_input
        axios.post(url,
          {
            body: {
              session_cookie: session_cookie,
              sn:{
                name: 'tg',
                username: username,
              }
            }
        }).then(function (response) {
          if(response.data.status.ok){
          }
        })
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
