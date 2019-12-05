<template>
  <div class="">
    <Header>
      Settings
    </Header>
    <div class="main_container">
      <div class="settings">
        <div class="profile">
          <div class="card full_shadow" style="border: none; border-radius: 10px;">
            <div class="picture_form">
              <div class="button_add_picture">
                <img src="../assets/icons/add.svg" alt="...">
              </div>
            </div>
            <div class="form-group">
              <div class="form_input">
                <input :value="username" class="form-input" type="text" id="input-example-1" placeholder="Username">
              </div>
              <div class="form_input">
                <input :value="username" class="form-input" type="text" id="input-example-1" placeholder="I am an about">
              </div>
              <div class="form_input">
                <input :value="username" class="form-input" type="text" id="input-example-1" placeholder="Email">
              </div>
              <div class="form_input">
                <input :value="username" class="form-input" type="text" id="input-example-1" placeholder="Phone">
              </div>
              <div class="form_input">
                <input :value="username" class="form-input" type="text" id="input-example-1" placeholder="07/09/2000">
              </div>
            </div>
          </div>
        </div>
        <div class="sns">
          <div  style="border: none; border-radius: 10px;">
            <SNCardEditable :sns="sns">
            </SNCardEditable>
          </div>
        </div>
        <div class="themes">
          <div class="card full_shadow" style="border: none; border-radius: 10px;">
            <div class="card_title">
              Theme
            </div>
            <div class="card_content">
              <div class="theme_tags">
                <div class="theme_tag g-btn--pink-to-orange"></div>
                <div class="theme_tag g-btn--purple-to-aqua"></div>
                <div class="theme_tag g-btn--aqua-to-blue"></div>
                <div class="theme_tag g-btn--pink-to-purple"></div>
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
export default{
  name:"Settings",
  data(){
    return {
      username: '',
      password: '',
      sns: {
        telegram: 'Valentinaf',
        instagram: 'valntinay',
        facebook: 'valentinayatev',
        twitter: 'rvalfo'
      }
    }
  },
  components:{
    Header,
    SNCardEditable
  },
  methods: {

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
  margin-right: 5px;
  width:30px;
  height:30px;
  border-radius:15px;
}
.settings .sessions button{
  margin-bottom: 9px;
}
</style>
