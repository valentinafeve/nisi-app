<template>
  <div class="login">
    <Header>
      Nisi
    </Header>
    <div class="main_container">
      <div class="form_container">
        <div class="card full_shadow" style="border: none; border-radius: 20px;">
          <div class="nisi_form">
            <div class="form-group">
              <input v-model="username" class="form-input" placeholder="Username">
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
            <div class="error_message">
              <div v-for="error in errors" :key="error" class="">
                {{error}}
              </div>
            </div>

          </div>
          <div class="">
            <div class="session_buttons">
              <button @click="signin" class="button_login g-btn g-btn--purple-to-aqua radius-md">
                Log in
              </button>
            </div>
            <div class="session_buttons">
              <a href="/#/signup">Sign up</a>
              <!-- <button class="button_login g-btn g-btn--purple-to-aqua radius-md">
              Sign up
            </button> -->
            </div>
            <div class="session_buttons">
              <a href="/#/signup" style="font-size: 0.6em; color: #dddddd;">Terms and conditions</a>

            </div>
        </div>
      </div>

      </div>

    </div>
  </div>
</template>
<style>
.margined.small{
  margin: 30px;
}
</style>

<script>
import axios from 'axios'
import Header from '../components/components/Header'
import qs from 'qs'

export default{
  data(){
    return {
      username: "",
      password: "",

      vp: true,
      hp: false,

      errors:[
      ]
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
    signin(){
      var username = this.username
      var password = this.password
      var router = this.$router
      console.log("We'll send a post "+password)
      let url = NBASEURL+'/nu/signin/';
      var body = {
        username : username,
        password : password
      };
      if (!username | !password){
        this.errors = ["Fill the fields"]
        return
      }
      let csrftoken = getCookie('csrftoken');
      var thisa = this;
      axios.post(url,
        {

          headers: { 'X-CSRFToken': csrftoken },
          body: {
            username : username,
            password : password
          }

      }).then(function (response) {
        console.log(response.data)
        if(response.data.status.ok){
          if(response.data.response == 1){
            session_cookie = response.data.session.token
            router.push("home")
          }
          if(response.data.response == 2){
            thisa.errors = ["User with that credentials doesn't exist."]
          }
        }
      }).catch(()=>{
        thisa.errors = ["Network error, Check your connection."]
      })
    },
    view_password(){
      this.vp = !this.vp;
      this.hp = !this.hp;
    }
  }
}
</script>
<style media="screen">
  .nisi_form{
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .form_container{
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 30px;
  }
  .nisi_form input{
    border-radius: 10px;
    margin-bottom: 20px;
    border: none;
  }
  .button_view_password{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .session_buttons{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
  }
  .button_login{
    font-size: 0.8em;
    vertical-align: middle;
    top: 0px;
    padding-top:6px;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    display: inline-block;
    height: 40px;
  }
  a {
    font-size: 0.8em;
  }
  .login .error_message{
    background: #ddaaaa;
    color: #774444;
    border-radius: 10px;
    padding: 10px 10px 10px 20px;
  }
  .error_message:empty{
    display:none;
  }
  .error_message div{
    font-size: 0.8em;
  }
</style>
