<template>
  <div class="profile_sn_card">
    <div class="second_card">
      <div
        class="card full_shadow"
        style="border: none; border-radius: 20px; font-size: 0.8em;"
      >
      <div class="social_network_panel">
        <img
          src="../../../public/assets/icons/telegram.svg"
          alt="Home"
          weight="28px"
          height="24px"
        >
        <div
          class=""
          style="vertical-align:top; display:inline; margin-left:15px; margin-top:8px;"
        >
          {{ telegram_text }}
        </div>
      </div>
      <div class="divider" />
        <div class="social_network_panel">
          <img
            src="../../../public/assets/icons/twitter.svg"
            alt="Home"
            weight="28px"
            height="24px"
          >
          <div
            class=""
            style="vertical-align:top; display:inline; margin-left:15px; margin-top:8px;"
          >
            {{ twitter_text }}
          </div>
        </div>
        <div class="divider" />
        <div class="social_network_panel">
          <img
            src="../../../public/assets/icons/instagram.svg"
            alt="Home"
            weight="28px"
            height="22px"
          >
          <div
            class=""
            style="vertical-align:top; display:inline; margin-left:15px; margin-top:8px;"
          >
            {{ instagram_text }}
          </div>
        </div>
        <div class="divider" />
        <div class="social_network_panel">
          <img
            src="../../../public/assets/icons/facebook.svg"
            alt="Home"
            weight="28px"
            height="24px"
          >
          <div
            class=""
            style="vertical-align:top; display:inline; margin-left:15px; margin-top:8px;"
          >
            {{ facebook_text }}
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
        return this.sns.telegram
      }
      else{
        return "You haven't added Telegram"
      }
    },
    instagram_text(){
      if(this.sns.instagram){
        return this.sns.instagram
      }
      else{
        return "You haven't added Instagram"
      }
    },
    facebook_text(){
      if(this.sns.facebook){
        return this.sns.facebook
      }
      else{
        return "You haven't added Facebook"
      }
    },
    twitter_text(){
      if(this.sns.twitter){
        return this.sns.twitter
      }
      else{
        return "You haven't added Twitter"
      }
    },
  },
  methods:{
  },
  props:['sns']
}
</script>

<style media="screen">

</style>
