<template>
  <div class="sn_card_editable">
    <div class="second_card">
      <TGSettings :info="sns.tg">
      </TGSettings>
      <IGSettings :info="sns.ig">
      </IGSettings>
      <TWSettings :info="sns.tw">
      </TWSettings>
      <FBSettings :info="sns.fb">
      </FBSettings>
    </div>
  </div>
</template>

<script>
import TGSettings from '../../components/settings_sn/TG'
import FBSettings from '../../components/settings_sn/FB'
import IGSettings from '../../components/settings_sn/IG'
import TWSettings from '../../components/settings_sn/TW'

export default {
  name: 'SNCardEditable',
  components:{
    TGSettings,
    FBSettings,
    IGSettings,
    TWSettings,
  },
  data(){
    return{
    }
  },
  computed:{

  },
  methods:{
  },
  props:['sns']
}
</script>

<style media="screen">
.sn_card_editable .social_network_panel .button{
  height: "20px";

  text-align: center;
}
.sn_card_editable .is_added{
  width: 100%;
}
.sn_card_editable .isnt_added{
  width: 100%;
}
.sn_card_editable .message{
  background: #f5f5f5;
  color: #777;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
}
</style>
