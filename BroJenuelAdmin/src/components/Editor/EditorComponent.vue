<script lang="ts" setup>
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import {Editor, EditorContent} from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import { watch } from "vue";
import { lowlight } from "lowlight/lib/core";

import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("js", js);
lowlight.registerLanguage("ts", ts);

const props = defineProps({
    modelValue: {
        type: String,
        default: "",
    },
});
const emits = defineEmits(["update:modelValue", "preservedHtmlChange"]);

const editor = new Editor({
    content: "",
    extensions: [
        StarterKit,
        CodeBlockLowlight.configure({
            lowlight,
        }),
    ],
    onUpdate: () => {
        const contentElement = document.getElementById('editor-content');
        if (contentElement) {
            emits("update:modelValue", contentElement.firstElementChild?.innerHTML.replace(/[<]br[^>]*[>]/gi,""));
            return;
        }
    },
});

watch(
    () => props.modelValue,
    (val) => {
        const isSame = editor.getHTML() === val;
        if (isSame) return;
        editor.commands.setContent(val, false);
    }
);
</script>
<template>
    <div>
        <div v-if="editor" class="editor-tools">
            <button
                :class="{ 'is-active': editor.isActive('bold') }"
                :disabled="!editor.can().chain().focus().toggleBold().run()"
                title="Bold"
                @click="editor.chain().focus().toggleBold().run()"
            >
                <i class="bx bx-bold"></i>
            </button>
            <button
                :class="{ 'is-active': editor.isActive('italic') }"
                :disabled="!editor.can().chain().focus().toggleItalic().run()"
                title="italic"
                @click="editor.chain().focus().toggleItalic().run()"
            >
                <i class="bx bx-italic"></i>
            </button>
            <button
                :class="{ 'is-active': editor.isActive('strike') }"
                :disabled="!editor.can().chain().focus().toggleStrike().run()"
                title="Strike"
                @click="editor.chain().focus().toggleStrike().run()"
            >
                <i class="bx bx-strikethrough"></i>
            </button>
            <button
                :class="{ 'is-active': editor.isActive('code') }"
                :disabled="!editor.can().chain().focus().toggleCode().run()"
                title="code"
                @click="editor.chain().focus().toggleCode().run()"
            >
                <i class="bx bx-code"></i>
            </button>
            <button title="clear marks" @click="editor.chain().focus().unsetAllMarks().run()">clear marks</button>
            <button title="clear nodes" @click="editor.chain().focus().clearNodes().run()">clear nodes</button>
            <button
                :class="{ 'is-active': editor.isActive('paragraph') }"
                title="paragraph"
                @click="editor.chain().focus().setParagraph().run()"
            >
                <i class="bx bx-paragraph"></i>
            </button>
            <button
                :class="{
                    'is-active': editor.isActive('heading', { level: 1 }),
                }"
                title="h1"
                @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            >
                h1
            </button>
            <button
                :class="{
                    'is-active': editor.isActive('heading', { level: 2 }),
                }"
                @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            >
                h2
            </button>
            <button
                :class="{
                    'is-active': editor.isActive('heading', { level: 3 }),
                }"
                @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            >
                h3
            </button>
            <button
                :class="{
                    'is-active': editor.isActive('heading', { level: 4 }),
                }"
                @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
            >
                h4
            </button>
            <button
                :class="{
                    'is-active': editor.isActive('heading', { level: 5 }),
                }"
                @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
            >
                h5
            </button>
            <button
                :class="{
                    'is-active': editor.isActive('heading', { level: 6 }),
                }"
                @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
            >
                h6
            </button>
            <button
                :class="{ 'is-active': editor.isActive('bulletList') }"
                class="bullet list"
                @click="editor.chain().focus().toggleBulletList().run()"
            >
                <i class="bx bx-list-ul"></i>
            </button>
            <button
                :class="{ 'is-active': editor.isActive('orderedList') }"
                class="ordered-list"
                @click="editor.chain().focus().toggleOrderedList().run()"
            >
                <i class="bx bx-list-ol"></i>
            </button>
            <button
                :class="{ 'is-active': editor.isActive('codeBlock') }"
                title="Code block"
                @click="editor.chain().focus().toggleCodeBlock().run()"
            >
                <i class="bx bx-code-alt"></i>
            </button>
            <button
                :class="{ 'is-active': editor.isActive('blockquote') }"
                title="blockquote"
                @click="editor.chain().focus().toggleBlockquote().run()"
            >
                <i class="bx bxs-quote-right"></i>
            </button>
            <button title="horizontal rule" @click="editor.chain().focus().setHorizontalRule().run()">
                horizontal rule
            </button>
            <button @click="editor.chain().focus().setHardBreak().run()">hard break</button>
            <button :disabled="!editor.can().chain().focus().undo().run()" @click="editor.chain().focus().undo().run()">
                undo
            </button>
            <button :disabled="!editor.can().chain().focus().redo().run()" @click="editor.chain().focus().redo().run()">
                redo
            </button>
        </div>
        <EditorContent id="editor-content" :editor="editor" />
    </div>
</template>
<style lang="scss">
.editor-tools {
    display: flex;
    gap: 3px;
    flex-wrap: wrap;

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

    pre {
        background: #0d0d0d;
        color: #fff;
        font-family: "JetBrainsMono", monospace;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;

        code {
            color: inherit;
            padding: 0;
            background: none;
            font-size: 0.8rem;
        }

        .hljs-comment,
        .hljs-quote {
            color: #616161;
        }

        .hljs-variable,
        .hljs-template-variable,
        .hljs-attribute,
        .hljs-tag,
        .hljs-name,
        .hljs-regexp,
        .hljs-link,
        .hljs-name,
        .hljs-selector-id,
        .hljs-selector-class {
            color: #f98181;
        }

        .hljs-number,
        .hljs-meta,
        .hljs-built_in,
        .hljs-builtin-name,
        .hljs-literal,
        .hljs-type,
        .hljs-params {
            color: #fbbc88;
        }

        .hljs-string,
        .hljs-symbol,
        .hljs-bullet {
            color: #b9f18d;
        }

        .hljs-title,
        .hljs-section {
            color: #faf594;
        }

        .hljs-keyword,
        .hljs-selector-tag {
            color: #70cff8;
        }

        .hljs-emphasis {
            font-style: italic;
        }

        .hljs-strong {
            font-weight: 700;
        }
    }

    ul {
        padding-left: 30px;
        list-style-type: disc;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        margin-bottom: 15px;
        position: relative;
    }

    h1 {
        font-size: 2em;
    }
    h2 {
        font-size: 1.5em;
    }

    code {
        position: relative;
        padding: 10px;
        background-color: var(--background-secondary);
        border-radius: 7px;
        overflow-x: auto;
        transition: background-color 0.25s;
        font-size: 16px;
    }

    p {
        //padding-bottom: 20px;
        //padding-top: 10px;

        code {
            padding: 2px 5px;
            border-radius: 7px;
            background-color: #d3d3d3;
        }
    }

    *::-webkit-scrollbar {
        height: 10px;
    }
}
</style>
