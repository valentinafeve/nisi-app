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
              <div class="button_add_picture full_shadow_medium">
                <img src="../assets/icons/add.svg" alt="...">
              </div>
            </div>
            <div class="form-group">
              <input :value="username" class="form-input" type="text" id="input-example-1" placeholder="Username">
            </div>
            <div class="form-group">
              <input :value="password" class="form-input password" type="password" id="input-example-1" placeholder="Password">
            </div>
            <div class="form-group">
              <input :value="password" class="form-input" type="password" id="input-example-1" placeholder="Email">
            </div>
          </div>
          <div class="">
            <div class="session_buttons">
              <button class="button_login g-btn g-btn--purple-to-aqua radius-md">
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
var NBASEURL = "dsfahjk"
import Header from '../components/components/Header'

export default{
  data(){
    return {
      info: {username: '', password:'', phone:''},
      username: '',
      password: '',
      phone:'',
    }
  },
  components:{
    Header
  },
  methods: {
    signup(){
      var thisa = this;
      axios.post(
      NBASEURL+'/signup/',{
        body: {
        username : this.username,
        password : this.password,
        phone: this.phone,
        },
      }).then(
        function (response){
          thisa.info = response.data;
          thisa.$router.push({name: 'home'});
        }
    )
    },
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
