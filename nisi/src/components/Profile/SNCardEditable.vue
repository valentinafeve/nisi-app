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
          {{ sns.telegram }}
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
            {{ sns.twitter }}
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
            {{ sns.instagram }}
          </div>
        </div>
        <div class="divider" />
        <div class="social_network_panel" @click="fb_settings">
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
            {{ sns.facebook }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { registerWebPlugin } from '@capacitor/core';
import { FacebookLogin } from '@rdlabo/capacitor-facebook-login';

import { Plugins } from '@capacitor/core';
import { FacebookLoginResponse } from '@rdlabo/capacitor-facebook-login';

export default {
  name: 'SNCardEditable',
  data(){
    return{
    }
  },
  methods:{
    fb_settings(){
      alert("Wporking")
      console.log("Logging facebook")
      // await loggin()
      async function loggin(){
        const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
        const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });

        if (result.accessToken) {
          // Login successful.
          console.log(`Facebook access token is ${result.accessToken.token}`);
        } else {
          // Cancelled by user.
        }
        return 1;
      }
    }
  },
  props:['sns']
}
</script>

<style media="screen">

</style>
