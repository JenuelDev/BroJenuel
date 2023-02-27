<script lang="ts" setup>
import {Editor, EditorContent} from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import {onBeforeUnmount, reactive} from "vue";
import Vue3TagsInput from 'vue3-tags-input';

const form = reactive({
    title: null,
    tags: []
})
const editor = new Editor({
    content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
    extensions: [StarterKit],
});

onBeforeUnmount(() => {
    editor.destroy();
});
</script>
<template>
    <div class="flex justify-between items-end pb-20px">
        <div>Create Blog</div>
        <div>
            <button class="border p-10px rounded-md hover:bg-black hover:text-white">Publish Blog</button>
        </div>
    </div>
    <div>
        <div class="pb-10px">
            Title: <br><input type="text" v-model="form.title" placeholder="ex. how to code" class="w-full max-w-500px"/>
        </div>
        <div class="pb-10px">
            Keywords: <Vue3TagsInput :tags="form.tags" placeholder="Enter Tags" />
        </div>
        <div v-if="editor" class="editor-tools">
            <button :class="{ 'is-active': editor.isActive('bold') }"
                    :disabled="!editor.can().chain().focus().toggleBold().run()"
                    title="Bold"
                    @click="editor.chain().focus().toggleBold().run()">
                <i class='bx bx-bold'></i>
            </button>
            <button :class="{ 'is-active': editor.isActive('italic') }"
                    :disabled="!editor.can().chain().focus().toggleItalic().run()"
                    title="italic" @click="editor.chain().focus().toggleItalic().run()">
                <i class='bx bx-italic'></i>
            </button>
            <button :class="{ 'is-active': editor.isActive('strike') }"
                    :disabled="!editor.can().chain().focus().toggleStrike().run()"
                    title="Strike" @click="editor.chain().focus().toggleStrike().run()">
                <i class='bx bx-strikethrough'></i>
            </button>
            <button :class="{ 'is-active': editor.isActive('code') }"
                    :disabled="!editor.can().chain().focus().toggleCode().run()"
                    title="code" @click="editor.chain().focus().toggleCode().run()">
                <i class='bx bx-code'></i>
            </button>
            <button title="clear marks" @click="editor.chain().focus().unsetAllMarks().run()">
                clear marks
            </button>
            <button title="clear nodes" @click="editor.chain().focus().clearNodes().run()">
                clear nodes
            </button>
            <button :class="{ 'is-active': editor.isActive('paragraph') }"
                    title="paragraph" @click="editor.chain().focus().setParagraph().run()">
                <i class='bx bx-paragraph'></i>
            </button>
            <button :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
                    title="h1" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()">
                h1
            </button>
            <button :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
                    @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">
                h2
            </button>
            <button :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
                    @click="editor.chain().focus().toggleHeading({ level: 3 }).run()">
                h3
            </button>
            <button :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
                    @click="editor.chain().focus().toggleHeading({ level: 4 }).run()">
                h4
            </button>
            <button :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
                    @click="editor.chain().focus().toggleHeading({ level: 5 }).run()">
                h5
            </button>
            <button :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
                    @click="editor.chain().focus().toggleHeading({ level: 6 }).run()">
                h6
            </button>
            <button :class="{ 'is-active': editor.isActive('bulletList') }"
                    class="bullet list" @click="editor.chain().focus().toggleBulletList().run()">
                <i class='bx bx-list-ul'></i>
            </button>
            <button :class="{ 'is-active': editor.isActive('orderedList') }"
                    class="ordered-list" @click="editor.chain().focus().toggleOrderedList().run()">
                <i class='bx bx-list-ol'></i>
            </button>
            <button :class="{ 'is-active': editor.isActive('codeBlock') }"
                    title="block" @click="editor.chain().focus().toggleCodeBlock().run()">
                <i class='bx bx-code-alt'></i>
            </button>
            <button :class="{ 'is-active': editor.isActive('blockquote') }"
                    title="blockquote" @click="editor.chain().focus().toggleBlockquote().run()">
                <i class='bx bxs-quote-right'></i>
            </button>
            <button title="horizontal rule" @click="editor.chain().focus().setHorizontalRule().run()">
                horizontal rule
            </button>
            <button @click="editor.chain().focus().setHardBreak().run()">
                hard break
            </button>
            <button :disabled="!editor.can().chain().focus().undo().run()" @click="editor.chain().focus().undo().run()">
                undo
            </button>
            <button :disabled="!editor.can().chain().focus().redo().run()" @click="editor.chain().focus().redo().run()">
                redo
            </button>
        </div>
        <EditorContent :editor="editor"/>
    </div>
    <div>

    </div>
</template>
<style lang="scss">
.editor-tools {
    display: flex;
    gap: 3px;

    button {
        min-width: 30px;
        border: 1px solid #363636;
        border-radius: 7px;
        padding-left: 5px;
        padding-right: 5px;

        &:hover {
            background: #363636;
            color: white;
        }
    }
}

.ProseMirror {
    padding: 10px;
    margin-top: 10px;
    outline: none;
    border: 1px solid black;
    border-radius: 7px;
    min-height: 300px;
}

input {
    outline: none;
}
</style>