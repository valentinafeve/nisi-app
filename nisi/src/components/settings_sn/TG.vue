<template>
  <div class="">

  <div class="social_network_panel card full_shadow" style="border: none; border-radius: 20px; font-size: 0.8em;">
    <div class="sn_header">
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
      <div class="button g-btn g-btn--add radius-lg" style="height: 30px; width: 100%; padding: 0px; margin: 0px; text-align: center;">
        Add
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
  export default{
    name: "Telegram_settings",
    data(){
      return {

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
