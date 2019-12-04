/* eslint-disable */
<template>
  <div class="">
    <Tabs>
      <template v-slot:profile>
        <Tab>
          <Profile></Profile>
        </Tab>
      </template>
      <template v-slot:home>
        <Tab>
          <Home></Home>
        </Tab>
      </template>
      <template v-slot:near>
        <Tab>
          <Near></Near>
        </Tab>
      </template>
    </Tabs>
  </div>
</template>

<script>
import Home from './Home'
import Profile from './Profile'
import Near from './Near'
import Tabs from '../components/Tabs'
import Tab from '../components/Tab'
export default {
  name: "Main",
  components: {
    Home,
    Profile,
    Near,
    Tabs,
    Tab
  }
};
</script>
