<template>
  <div class="">
    <Header>
      Nisi
    </Header>
    <Tabs>
      <Tab
        name="Profile"
        icon="../assets/icons/avatar.svg"
        :selected="true"
      >
        <Profile />
      </Tab>
      <Tab name="Home" icon="../assets/icons/house.svg">
        <Home />
      </Tab>
      <Tab name="Near" icon="../assets/icons/placeholder.svg">
        <Near />
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Home from './Home'
import Profile from './Profile'
import Near from './Near'
import Tabs from '../components/tabs/Tabs'
import Tab from '../components/tabs/Tab'
import Header from '../components/components/Header'
export default {
  name: "Main",
  components: {
    Home,
    Profile,
    Near,
    Tabs,
    Tab,
    Header
  }
};
</script>
