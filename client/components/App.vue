<template>
  <div id="app">
    <div class="row">
      <div class="col-6">
        <sidebar-menu></sidebar-menu>
      </div>
      <div class="col-18">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from 'components/SidebarMenu'

export default {
  components: {
    SidebarMenu
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;

  & > .row {
    height: 100%;
  }
}
</style>
