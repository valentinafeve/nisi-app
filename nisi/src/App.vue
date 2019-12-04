<template>
  <div id="app" class="app">
    <div class="">
      <router-view/>
      <Main></Main>
    </div>
  </div>
</template>
<script type="text/javascript">
import Main from './views/Main'
export default {
name: 'app',
components: {
  Main
}
}
</script>
