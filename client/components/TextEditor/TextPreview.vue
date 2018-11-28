<template>
  <at-card class='preview-card' :no-hover="true">
    <span slot="title">Preview</span>
    <div>
      {{ inputText }}
    </div>
  </at-card>
</template>

<script>
export default {
  props: {
    inputText: String
  }
}
</script>

<style lang="scss">
.preview-card {
  width: 100%;
  height: 100%;
  
  .at-card__head {
    padding-left: 8px;
    line-height: 36px;
    height: 36px;
  }
}
</style>
