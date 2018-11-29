<template>
  <AtMenu
    theme="dark"
    mode="inline"
    active-name="0"
  >
    <AtSubmenu>
      <template slot="title">
        Menu
      </template>
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
    </AtSubmenu>
    <AtSubmenu>
      <template slot="title">
        Channels
      </template>
      <AtMenuItem name="5">
        <i class="icon icon-plus" />
        Add channel
      </AtMenuItem>
    </AtSubmenu>
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
