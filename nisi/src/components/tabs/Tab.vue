<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>
<script type="text/javascript">
  export default{
    props: {
        icon: { default: ''},
        name: { required: true },
        selected: { default: false}
    },

    data() {

        return {
            isActive: false
        };

    },

    computed: {

        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {

        this.isActive = this.selected;

    }
  }
</script>
