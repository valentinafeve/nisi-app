<template>
  <div class="facebook_settings">
    <div :class="[{modal:true}, {active: active_modal}]" id="modal-id">
      <a href="#close" class="modal-overlay" aria-label="Close"></a>
      <div class="modal-container" style="border: none; border-radius: 20px;">
        <div class="modal-header">
          <a @click="close_modal" class="btn btn-clear float-right" aria-label="Close"></a>
          <div class="modal-title h5">
            <img src="https://www.gaijinapartmenthelper.com/wp-content/uploads/2018/09/facebook_new_logo.gif" width="100%" alt="">
          </div>
        </div>
        <div class="modal-body">
          <div class="content" style="display:block;">
            <div id="facebook_login_view">
            </div>
          </div>
        </div>
      </div>
    </div>

  <div class="social_network_panel card full_shadow" style="border: none; border-radius: 20px; font-size: 0.8em;">
    <div class="sn_header centered">
      <img
      src="../../../public/assets/icons/facebook.svg"
      alt="Home"
      weight="28px"
      height="24px"
      >
    </div>
    <div class="divider"></div>
      <div class="is_added" :style="{display:d_ta}">
        <div class="message">
          Your Facebook account is added.
        </div>
        <div class="settings">
          <div class="form-group">
            <label class="form-switch">
              <input type="checkbox">
              <i class="form-icon"></i> Public
            </label>
            <label class="form-switch">
              <input type="checkbox">
              <i class="form-icon"></i> Mutual followers
            </label>
          </div>
        </div>
      </div>
    <div class="isnt_added" :style="{display:d_tna}">
      <div class="message">Add your Facebook account. You must login in order to get your friends posts.</div>
      <div @click="show_modal" class="button g-btn g-btn--add radius-lg" style="height: 30px; width: 100%; padding: 0px; margin: 0px; text-align: center;">
        Add
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import JQuery from 'jquery'
let $ = JQuery

function fix_horrible_styles(){
  console.log("Fixing facebook")
  var container = $("#facebook_login_view")[0]
  var children = container.children.item(0)
  console.log(children)
}

  export default{
    name: "Facebook_settings",
    data(){
      return {
        active_modal:false,
      }
    },
    methods:{
      show_modal(){
        this.active_modal=true;
        $("#facebook_login_view").load("https://m.facebook.com/login/?ref=dbl&fl&refid=8")
        fix_horrible_styles();

      },
      close_modal(){
        this.active_modal=false;
      }
    },
    computed:{
      d_ta(){
        if(this.info){
          return "block"
        }
        return "none"
      },
      d_tna(){
        if(!this.info){
          return "block"
        }
        return "none"
      }
    },
    props:["info"],
  }
</script>
<style media="screen">
  #facebook_login_view *{
    color: black;
    font-weight: normal;
    font-style: normal;
  }
  #facebook_login_view input{
    color: black;
    margin-top:5px;
    padding: 5px;
    border: solid;
    border-color: #ccc;
    border-width: 1px;
    border-radius: 5px;
    height: 30px;
  }
  #facebook_login_view .bg.bh.bi li *{
    color: #444;
    font-size: 15px;
  }
  #facebook_login_view .n.t.o.bq{
    border-radius:10px;
    border:none;
    color: white;
    margin-top: 35px;
    height: 45px;
    background: -webkit-gradient(linear, left top, left bottom, from(#389FFD), to(#006cff));
    background: linear-gradient(#389FFD, #006cff)
  }
  #facebook_login_view .n.t.o.bz{
    border-radius:10px;
    border:none;
    color: white;
    background: -webkit-gradient(linear, left top, left bottom, from(#9FD4A2), to(#66BB6A));
    background: linear-gradient(#9FD4A2, #66BB6A);
    height: 35px;
    width: 100%;
    padding-top: 0px;
    margin-top: 20px;
  }
  #facebook_login_view .n.t.o.bz *{

  }
  #facebook_login_view .bt .bu{
    display:none;
  }
  #facebook_login_view .bg.cf .bh{
    display:none;
  }
  #facebook_login_view .bt{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #facebook_login_view .bt *{
    font-size: 0.8em;
  }
  #facebook_login_view .v *{
    color: black;
    background: white;
    font: Roboto;
  }
  #facebook_login_view #header{
    background: #ff0;
    display: none;
  }
  .facebook_settings .modal-header{
    height: 110px;
  }
</style>
