<template>
  <div>
    <div class="tabs">
      <div class="tab_bar">
        <div class="tab_buttons">
          <div class="centered">
            <div
            v-for="tab in tabs"
            :key="tab"
            :class="{ 'tab_button':true, 'is-active': tab.isActive }">
            <img :src="tab.icon" alt="" height="23px" @click="selectTab(tab)">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tabs-details">
      <slot />
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    name: "tabs",
    data() {
      return {tabs: [] };
    },

    created() {

      this.tabs = this.$children;

    },
    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (tab.name == selectedTab.name);
        });
      }
    }
  }
</script>

<style media="screen">
  .tab_bar{
    top-right-radius: 40px;
    top-left-radius: 40px;
    border-collapse: separate;
    overflow: hidden;

    width: 100%;
    z-index: 3;
    height: 60px;
    background: white;
    bottom: 0;
    position: fixed;
    box-shadow: 0px 0 8px rgba(100, 100, 100, 0.2);
    padding-left:10%;
    padding-right:10%;
  }
  .centered{
    display: flex;
    align-items: center;
    justify-content: center;
  	margin-top: 8px;
    /* background: yellow; */
  }
  .tab_buttons{

  }
  .tab_bar .tab_button{
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 12px;
    display: inline-block;
  }
</style>
