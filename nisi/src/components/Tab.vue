<template>
  <div>
    <div :class="{visible:is_visible, invisible:isnt_visible}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props:['is_visible'],
  components: {

  },
  computed:{
    // Avoiding lint errors on template
    isnt_visible(){
      return !this.is_visible
    }
  },
  mounted(){
    console.log(this.is_visible)
  }
}
</script>

<style media="screen">
  .invisible{
    display: block;
  }
  .visible{
    display: block;
  }
</style>
