<script lang="ts" setup>
import {reactive} from "vue";
import Vue3TagsInput from "vue3-tags-input";
import EditorComponent from "@/components/Editor/EditorComponent.vue";
import { supabase } from "@/service/supabase";
import { useRouter } from "vue-router";
import ButtonComponent from "@/components/ButtonComponent.vue";

const router = useRouter();
const form = reactive({
    title: null,
    tags: [],
    keywords: [],
    content: "",
    cover_img: null,
    is_active: true,
    summary: null,
});

async function submit() {
    const dataToInsert = {
        title: form.title,
        tags: form.tags,
        keywords: form.keywords,
        content: form.content,
        cover_img: form.cover_img,
        is_active: form.is_active ? 1 : 0,
        summary: form.summary,
        slug: (form.title as any).replace(/\W+/g, "-"),
    };

    const { error } = await supabase.from("blogs").insert(dataToInsert);

    if (error) {
        alert(error.message);
        return;
    }

    form.title = null;
    form.tags = [];
    form.keywords = [];
    form.content = "";
    form.cover_img = null;
    form.is_active = false;
    form.summary = null;
    alert("successfully Inserted!");
}
</script>
<template>
    <div class="w-full max-w-800px mx-auto">
        <ButtonComponent @click="router.push('/admin/blogs')"> Back </ButtonComponent>
        <div class="flex justify-between items-end pb-20px">
            <div class="font-800 text-size-20px">Create Blog</div>
        </div>
        <form @submit.prevent="submit">
            <div class="pb-10px">
                Title: <br />
                <input
                    type="text"
                    v-model="form.title"
                    placeholder="ex. how to code"
                    class="w-full max-w-500px"
                    required
                />
            </div>
            <div class="pb-10px">
                Keywords (For SEO):
                <Vue3TagsInput
                    :tags="form.keywords"
                    @on-tags-changed="(tags: never[]) => (form.keywords = tags)"
                    placeholder="Enter Tags, comma separated..."
                />
            </div>
            <div class="pb-10px">
                Tags (To Be Displayed):
                <Vue3TagsInput
                    :tags="form.tags"
                    @on-tags-changed="(tags: never[]) => (form.tags = tags)"
                    placeholder="Enter Tags, comma separated..."
                />
            </div>
            <div>
                Cover Image URL:<br />
                <small>If no provided, it will auto generate cover</small><br />
                <input type="text" v-model="form.cover_img" class="w-full max-w-500px" />
            </div>
            <div class="pt-4">Content:</div>
            <EditorComponent v-model="form.content" />
            <div class="mt-10px">
                <label>
                    <input type="checkbox" v-model="form.is_active" />
                    Set Content as Active
                </label>
            </div>
            <div>
                Summary:<br />
                <input type="text" v-model="form.summary" class="w-full max-w-500px" />
            </div>
            <div>
                <button
                    type="submit"
                    class="border border-black p-5px rounded-md hover:bg-black hover:text-white mt-10px"
                >
                    Publish Blog
                </button>
            </div>
        </form>
    </div>
</template>
<style lang="scss">
input {
    outline: none;
}
</style>
