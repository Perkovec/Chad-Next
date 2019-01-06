<template>
  <div id="app">
    <div class="row">
      <div>
        <SidebarMenu />
      </div>
      <div class="col content-column">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from 'components/SidebarMenu';

export default {
  components: {
    SidebarMenu,
  },
};
</script>

<style lang="scss" scoped>
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

  .content-column {
    flex: 1;
    min-width: 360px;
  }
}
</style>
