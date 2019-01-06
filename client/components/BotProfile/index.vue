<template>
  <div class="container">
    <Avatar avatarIcon="plus"/>
    <span class="profile-heading">Set admin bot</span>
  </div>
</template>
<script>
import Avatar from './Avatar';

export default {
  components: {
    Avatar,
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 60px;

  &:hover {
    cursor: pointer;
    background-color: #273A52;
  }

  .profile-heading {
    font-size: 1em;
  }
}
</style>