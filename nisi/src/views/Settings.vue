<template>
  <div class="">
    <Header>
      Settings
    </Header>
    <div class="main_container">
      <div class="settings">
        <div class="profile">
          <button @click="update_profile" type="button" name="button">Update profile</button>
          <div class="card full_shadow" style="border: none; border-radius: 10px;">
            <div class="picture_form">
              <div class="button_add_picture">
                <img src="../assets/icons/add.svg" alt="...">
              </div>
            </div>
            <div class="form-group">
              <div class="form_input">
                <input :value="profile.username" class="form-input" type="text" id="input-example-1" placeholder="Username">
              </div>
              <div class="form_input">
                <input :value="profile.about" class="form-input" type="text" id="input-example-1" placeholder="I am an about">
              </div>
              <div class="form_input">
                <input :value="profile.email" class="form-input" type="text" id="input-example-1" placeholder="Email">
              </div>
              <div class="form_input">
                <input :value="profile.phone" class="form-input" type="text" id="input-example-1" placeholder="Phone">
              </div>
              <div class="form_input">
                <input :value="profile.born_date" class="form-input" type="text" id="input-example-1" placeholder="07/09/2000">
              </div>
            </div>
          </div>
        </div>
        <div class="sns">
          <div  style="border: none; border-radius: 10px;">
            <SNCardEditable :sns="profile.sns">
            </SNCardEditable>
          </div>
        </div>
        <div class="themes">
          <div class="card full_shadow" style="border: none; border-radius: 10px;">
            <div class="card_title">
              Theme
            </div>
            <div class="divider">

            </div>
            <div class="card_content">
              <div class="theme_tags">
                <div v-for="theme in themes" :key="theme" style="display:inline-block;">
                  <div :class="[{theme_tag:true}, theme]" @click="set_theme(theme, this)">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sessions">
          <button style="width: 100%;" class="button_follow full_shadow g-btn g-btn--aqua radius-md">
            Change password
          </button>
          <button style="width: 100%;" class="button_follow full_shadow g-btn g-btn--aqua radius-md">
            Log out
          </button>
          <button style="width: 100%;" class="button_follow full_shadow g-btn g-btn--dark-red radius-md">
            Delete account
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Header from '../components/components/Header'
import SNCardEditable from '../components/Profile/SNCardEditable'
import axios from 'axios'

export default{
  name:"Settings",
  data(){
    return {
      profile: {
        username: '',
        first_name: '',
        last_name: '',
        rating: 0.0,
        picture_path: '',
        email: '',
        phone: '',
        about: '',
        irated: 0,
        ratedme: 0,
        sns: {
          telegram: '',
          instagram: '',
          facebook: '',
          twitter: ''
        }
      },
      themes:[
        "g-btn--pink-to-orange",
        "g-btn--purple-to-aqua",
        "g-btn--aqua-to-blue",
        "g-btn--pink-to-purple",
      ]
    }
  },
  components:{
    Header,
    SNCardEditable
  },
  methods: {
    update_profile(){
      var url = NBASEURL+"/nu/profile/"
      var thisa = this;
      axios.post(url,
        {
          body: {
            session_cookie: session_cookie,
          }
      }).then(function (response) {
        if(response.data.status.ok){
          thisa.profile=response.data.profile;
        }
      })
    },
    set_theme(theme, thisa){
      console.log("Setting theme "+theme)
      global_theme=theme;
    },
  }
}
</script>
<style media="screen">
.profile .form_input input{
  border: none;
  margin-bottom: 5px;
}
.profile .form_input input::placeholder{
  color: black;
}
.settings .themes{
  display:block;
}
.settings .themes .card{
  display:block;
}
.themes .card .card_title{
  margin-bottom: 10px;
}
.themes .card .card_content{
  margin-top: 20px;
  margin-bottom: 0px;
  display: block;
  height: 40px;

}
.theme_tags{
  display:inline;
  float:right

}
.theme_tag{
  display:inline-block;
  margin-left: 15px;
  width:30px;
  height:30px;
  border-radius:15px;
}
.theme_tag.selected{
  border:yellow;
  -webkit-box-shadow: 0px 0px 10px -3px rgba(20,20,20,70);
  -moz-box-shadow: 0px 0px 10px -3px rgba(20,20,20,70);
  box-shadow: 0px 0px 15px -3px rgba(20,20,20,70);
}
.settings .sessions button{
  margin-bottom: 9px;
}
</style>
