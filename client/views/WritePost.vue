<template>
  <div class='page-writepost'>
    <TextEditor/>
  </div>
</template>

<script>
import TextEditor from 'components/TextEditor'

export default {
  components: {
    TextEditor
  }
}
</script>

<style>
  .page-writepost {
    padding: 4px 10px 4px 0;
    height: 100%;
  }
</style>
