<template>
    <div class='text-editor'>
        <div class='row text-input'>
            <div class='text-controls row'>
                <at-button icon='icon-link'>Link</at-button>
                <at-button icon='icon-bold'>Bold</at-button>
                <at-button icon='icon-italic'>Italic</at-button>
            </div>
            <at-textarea v-model='text' resize='none' placeholder='Post text'></at-textarea>
        </div>
        <div class='row'>
            <text-preview v-bind:input-text='text'></text-preview>
        </div>
        <div class='row post-controls'>
            <at-button icon='icon-settings'>Settings</at-button>
            <at-button icon='icon-save'>Save draft</at-button>
            <at-button icon='icon-upload-cloud' type="primary">Send</at-button>
        </div>
    </div>
</template>

<script>
import TextPreview from './TextPreview'

export default {
    computed: {
        text: {
            get () {
                return this.$store.state.WritePost.text
            },
            set (value) {
                this.$store.commit('SET_WRITEPOST_TEXT', value)
            }
        }
    },
    components: {
        TextPreview
    }
}
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
