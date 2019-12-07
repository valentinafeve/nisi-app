<template>
  <div class="">
    <Header>
      Nisi
    </Header>
    <div class="main_container">
      <div class="form_container">
        <div class="card full_shadow" style="border: none; border-radius: 20px;">
          <div class="nisi_form">
            <div class="picture_form">
              <label for="pp_file">
                <div class="button_add_picture full_shadow_medium">
                  <img src="../assets/icons/add.svg" alt="...">
                  <input id="pp_file" type='file' style="display:none"/>
                </div>
              </label>
            </div>
            <div class="form-group">
              <input v-model="username" class="form-input" type="text" placeholder="Username">
            </div>
            <div class="form-group">
              <input v-model="password" style="display: inline-block; width: 80%;" class="form-input password" :type="password_type" placeholder="Password">
              <div class="" style="display: inline-block; width: 12%; height: 100%; margin-left:10px; vertical-align: middle;">
                <div @click="view_password" class="button_view_password">
                  <img src="../assets/icons/eye.svg" alt="" height="20px" width="25px" :style="{display: pv_display}">
                  <img src="../assets/icons/eye-closed.svg" alt="" height="20px" width="25px" :style="{display: ph_display}">
                </div>
              </div>
            </div>
            <div class="form-group">
              <input v-model="phone" class="form-input" placeholder="Phone">
            </div>
          </div>
          <div class="">
            <div class="session_buttons">
              <button @click="signup" class="button_login g-btn g-btn--purple-to-aqua radius-md">
                Sign up
              </button>
            </div>
            <div class="session_buttons">
              <a href="/#/login">Log in</a>
              <!-- <button class="button_login g-btn g-btn--purple-to-aqua radius-md">
              Sign up
            </button> -->
          </div>
        </div>
      </div>

      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/components/Header'

export default{
  data(){
    return {
      info: {username: '', password:'', phone:''},
      username: '',
      password: '',
      phone:'',

      vp: true,
      hp: false,
    }
  },
  components:{
    Header
  },
  computed:{
    password_type(){
      if(this.vp){
        return "password"
      }
      else{
        return "text"
      }
    },
    ph_display(){
      if(this.vp){
        return "none"
      }
      else{
        return "block"
      }
    },
    pv_display(){
      if(!this.vp){
        return "none"
      }
      else{
        return "block"
      }
    }
  },
  methods: {
    signup(){
      var username = this.username
      var password = this.password
      var phone = this.phone
      axios.post(
      NBASEURL+'/nu/signup/',{
      body: {
        username : username,
        password : password,
        phone : phone,
      },
    }).then(function (response) {
        console.log(response.data)
        if(response.data.status.ok){
          session_cookie = response.data.session.token
          router.push("home")
        }
        else{
          console.log("Sign up failed")
        }
      })
    },
    view_password(){
      this.vp = !this.vp;
      this.hp = !this.hp;
    }
  }
};
</script>
<style media="screen">
  .picture_form{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .button_add_picture{
    height: 60px;
    width: 60px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button_add_picture *{
    height: 25px;
  }
</style>
