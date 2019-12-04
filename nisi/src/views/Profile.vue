/* eslint-disable */
<template>
  <div overflow-scroll="true">
    <div>
      <div>
        <div class="main_container">
          <div class="first_card">
            <div
              class="card full_shadow"
              style="border: none; border-radius: 20px;"
            >
              <div
                class="card_image"
                style="margin: 0 auto; margin-top: 20px;"
              >
                <figure class="avatar avatar-xl">
                  <img
                    src="img/avatar-1.png"
                    alt="..."
                  >
                </figure>
              </div>
              <div class="card-header">
                <div
                  class="card-title h5"
                  style="text-align: center"
                >
                  {{ username }}
                </div>
                <div
                  class="card-subtitle"
                  style="text-align: center"
                >
                  {{ first_name }} {{ last_name }}
                </div>
                <div
                  class="card-subtitle text-gray"
                  style="text-align: center"
                >
                  {{ about }}
                </div>
              </div>
              <div class="divider" />
              <div
                class="card-body"
                style="text-align: center; font-size: 40px; margin-bottom: 20px;"
              >
                {{ rating }}
              </div>
              <div
                class="card-body"
                style="text-align: center; display: none;"
              >
                I rated: {{ irated }}
                <br>
                Rated me: {{ ratedme }}
              </div>
            </div>
          </div>
          <div class="second_card">
            <div
              class="card full_shadow"
              style="border: none; border-radius: 20px; font-size: 0.8em;"
            >
              <div class="social_network_panel">
                <img
                  src="../../public/assets/icons/twitter.svg"
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
                  src="../../public/assets/icons/instagram.svg"
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
              <div class="social_network_panel">
                <img
                  src="../../public/assets/icons/facebook.svg"
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
      </div>
    </div>
    <div class="">
      <div class="btn">
        Log out
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data(){
    return {
      username: 'anakarenina',
      first_name: 'Ana',
      last_name: 'Karenina',
      rating: 3.9,
      p_picture: '',
      about: 'I am Ana Karenina',
      irated: 23,
      ratedme: 2009,
      sns:{
        instagram: 'valntinay',
        facebook: 'valentinayatev',
        twitter: 'rvalfo'
      }
    }
  },
  beforeCreate(){
  },
};
</script>
<style>
</style>
