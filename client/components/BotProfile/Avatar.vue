<template>
  <div class="avatar-container">
    <img v-if="avatarUrl" :src="avatarUrl"/>
    <div v-else-if="avatarLetters" class="letter-avatar">
      {{ avatarLetters }}
    </div>
    <div v-else class="icon-avatar">
      <i :class="'icon icon-' + avatarIcon"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: ['avatarUrl', 'avatarLetters', 'avatarIcon'],
  mounted() {
    console.log(this.avatarUrl);
  }
};
</script>

<style lang="scss" scoped>
.avatar-container {
  width: 40px;
  height: 40px;
  margin: 10px;
  margin-left: 15px;
  display: inline-block;

  .icon-avatar {
    border: 2px solid #E6E8EB;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    text-align: center;

    & > i {
      font-size: 1.5em;
      line-height: 37px;
      color: #96A0AD;
    }
  }
}
</style>