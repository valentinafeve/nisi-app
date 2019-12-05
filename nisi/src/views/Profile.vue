/* eslint-disable */
<template>
  <div overflow-scroll="true">
    <Header>
      Nisi
      <div class="icon" @click="to_settings">
        <img src="../assets/icons/settings.svg" alt="" height="26px">
      </div>
    </Header>
    <div class="main_container">
      <div>
        <div>
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
          <SNCard :sns="sns">
          </SNCard>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/components/Header';
import SNCard from '../components/Profile/SNCard'
export default {
  name: "Profile",
  components:{
    Header,
    SNCard,
  },
  data(){
    return {
      username: 'cclevin',
      first_name: 'Constantino',
      last_name: 'Levin',
      rating: 3.9,
      p_picture: '',
      about: 'I am Ana Karenina',
      irated: 23,
      ratedme: 2009,
      sns: {
        telegram: 'Valentinaf',
        instagram: 'valntinay',
        facebook: 'valentinayatev',
        twitter: 'rvalfo'
      }
    }
  },
  methods:{
    to_settings(){
      this.$router.push("settings")
    }
  },
  beforeCreate(){
  },
};
</script>
<style>
</style>
