<template>
  <AtMenu
    theme="dark"
    mode="vertical"
    active-name="0"
  >
    <AtMenuItem name="0">
      <i class="icon icon-edit" />
      Write post
    </AtMenuItem>
    <AtMenuItem name="1">
      <i class="icon icon-message-square" />
      Posts
    </AtMenuItem>
    <AtMenuItem name="2">
      <i class="icon icon-trash" />
      Drafts
    </AtMenuItem>
    <AtMenuItem name="3">
      <i class="icon icon-settings" />
      Preferences
    </AtMenuItem>
    <AtMenuItem name="4">
      <i class="icon icon-info" />
      About Chad
      <sup>Next</sup>
    </AtMenuItem>
  </AtMenu>
</template>

<script>
export default {};
</script>

<style>
  .at-menu {
    height: 100%;
    width: auto !important;
  }
</style>
