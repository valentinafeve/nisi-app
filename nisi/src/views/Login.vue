<template>
  <div class="">
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
              <input v-model="password" style="display: inline-block; width: 80%;" class="form-input password" type="password" placeholder="Password">
              <div class="" style="display: inline-block; width: 12%; height: 100%; margin-left:10px; vertical-align: middle;">
                <div class="button_view_password">
                  <img src="../assets/icons/view.svg" alt="">
                </div>
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

export default{
  data(){
    return {
      username: "",
      password: "",
    }
  },
  components:{
    Header
  },
  methods: {
    signin(){
      var username = this.username
      var password = this.password
      var router = this.$router
      console.log("We'll send a post "+password)
      axios.post(
      NBASEURL+'/nu/signin/',{
      body: {
        username : username,
        password : password
      },
    }).then(function (response) {
        console.log(response.data)
        if(response.data.status.ok){
          router.push("home")
        }
        else{
          console.log("Authentication failed")
        }
      })
    },
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
    font-size: 1em;
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
</style>
