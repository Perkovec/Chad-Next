<template>
  <div class="text-editor">
    <div class="row text-input">
      <div class="text-controls row">
        <AtButton icon="icon-link">
          Link
        </AtButton>
        <AtButton icon="icon-bold">
          Bold
        </AtButton>
        <AtButton icon="icon-italic">
          Italic
        </AtButton>
      </div>
      <AtTextarea
        v-model="text"
        resize="none"
        placeholder="Post text"
      />
    </div>
    <div class="row">
      <TextPreview
        :input-text="text"
      />
    </div>
    <div class="row post-controls">
      <AtButton icon="icon-settings">
        Settings
      </AtButton>
      <AtButton icon="icon-save">
        Save draft
      </AtButton>
      <AtButton
        icon="icon-upload-cloud"
        type="primary"
      >
        Send
      </AtButton>
    </div>
  </div>
</template>

<script>
import TextPreview from './TextPreview';

export default {
  components: {
    TextPreview,
  },
  computed: {
    text: {
      get() {
        return this.$store.state.WritePost.text;
      },
      set(value) {
        this.$store.commit('SET_WRITEPOST_TEXT', value);
      },
    },
  },
};
</script>

<style lang="scss">
.text-editor {
    display: flex;
    flex-direction: column;
    height: 100%;

    & > .row:first-child {
        margin-bottom: 10px;
    }

    & > .row:last-child {
        margin-top: 10px;
    }

    .row {
        margin: 0;
    }

    & > .row {
        display: flex;
        flex: 1;
    }

    .post-controls {
        flex: none;
        display: block;
        text-align: right;

        .at-btn:first-child {
            float: left;
        }
    }

    .text-input {
        flex-direction: column;

        .at-textarea {
            width: 100%;
            margin-top: 10px;
            flex: 1;

            textarea {
                height: 100%;
            }
        }

        .text-controls {
            .at-btn {
                margin-right: 7px;
            }
        }
    }
}
</style>
