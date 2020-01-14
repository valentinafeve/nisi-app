<template>
  <div class="profile_sn_card">
    <div class="second_card">
      <div
        class="card full_shadow"
        style="border: none; border-radius: 20px; font-size: 0.8em;"
      >
      <div class="social_network_panel">
        <div
          class="social_network"
          style="vertical-align:top; display:block; margin-left:15px; margin-top:8px;"
        >
        <tr>
          <td class="sn_icon">
          <img
          src="../../../public/assets/icons/telegram.svg"
          alt="Home"
          weight="28px"
          height="24px"
          >
          </td>
          <td class="sn_username">{{ telegram_text }}</td>
          <td class="sn_info">{{ telegram_info }}</td>
        </tr>
        </div>
      </div>
      <div class="divider" />
        <div class="social_network_panel">
          <div
            class="social_network"
            style="vertical-align:top; display:block; margin-left:15px; margin-top:8px;"
          >
          <tr>
            <td class="sn_icon">
              <img
              src="../../../public/assets/icons/twitter.svg"
              alt="Home"
              weight="28px"
              height="24px"
              >
            </td>
            <td class="sn_username">{{ twitter_text }}</td>
            <td class="sn_info">{{ twitter_info }}</td>
          </tr>
          </div>
        </div>
        <div class="divider" />
        <div class="social_network_panel">
          <div
            class="social_network"
            style="vertical-align:top; display:block; margin-left:15px; margin-top:8px;"
          >
          <tr>
            <td class="sn_icon">
              <img
                src="../../../public/assets/icons/instagram.svg"
                alt="Home"
                weight="28px"
                height="22px"
              >
            </td>
            <td class="sn_username">{{ instagram_text }}</td>
            <td class="sn_info">{{ instagram_info }}</td>
          </tr>
          </div>
        </div>
        <div class="divider" />
        <div class="social_network_panel">
          <div
            class="social_network"
            style="vertical-align:top; display:block; margin-left:15px; margin-top:8px;"
          >
          <tr>
            <td class="sn_icon">
              <img
                src="../../../public/assets/icons/facebook.svg"
                alt="Home"
                weight="28px"
                height="24px"
              >
            </td>
            <td class="sn_username">{{ facebook_text }}</td>
            <td class="sn_info">{{ facebook_info }}</td>
          </tr>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SNCard',
  data(){
    return{
    }
  },
  computed:{
    telegram_text(){
      if(this.sns.telegram){
        return this.sns.telegram.username
      }
      else{
        return "You haven't added Telegram"
      }
    },
    telegram_info(){
      if(this.sns.telegram){
        if(this.sns.telegram.verified){
          return "Verified"
        }
        else{
          return "Not verified"
        }
      }
      else{
        return " "
      }
    },
    twitter_text(){
      if(this.sns.twitter){
        return this.sns.twitter.username
      }
      else{
        return "You haven't added Twitter"
      }
    },
    twitter_info(){
      if(this.sns.twitter){
        if(this.sns.twitter.verified){
          return "Verified"
        }
        else{
          return "Not verified"
        }
      }
      else{
        return " "
      }
    },
    facebook_text(){
      if(this.sns.facebook){
        return this.sns.facebook.username
      }
      else{
        return "You haven't added Facebook"
      }
    },
    facebook_info(){
      if(this.sns.facebook){
        if(this.sns.facebook.verified){
          return "Verified"
        }
        else{
          return "Not verified"
        }
      }
      else{
        return " "
      }
    },
    instagram_text(){
      if(this.sns.instagram){
        return this.sns.instagram.username
      }
      else{
        return "You haven't added Instagram"
      }
    },
    instagram_info(){
      if(this.sns.instagram){
        if(this.sns.instagram.verified){
          return "Verified"
        }
        else{
          return "Not verified"
        }
      }
      else{
        return " "
      }
    },
  },
  methods:{
  },
  props:['sns']
}
</script>

<style media="screen">
  tr{
    width: 100% !important;
    position: relative;
  }
  td{
    width: 70%;
  }
  .sn_info{
    color:#999;
    position: absolute;
    text-align: right;
    font-size: 12px;
    right: 0;
  }
  .sn_username{
    color:#999;
    align:right;
    text-align:left;
    padding-left:20px;
  }
  .sn_icon{
    width:12%;
  }
  .social_network{
    width: 100%;
    display:block;
  }
</style>
