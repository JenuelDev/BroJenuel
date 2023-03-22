<script lang="ts" setup>
import { reactive } from "vue";
import Vue3TagsInput from "vue3-tags-input";
import EditorComponent from "@/components/Editor/EditorComponent.vue";
import { supabase } from "@/service/supabase";
import { useRouter } from "vue-router";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { Report } from "notiflix";

const router = useRouter();
const form = reactive({
    title: null,
    tags: [],
    keywords: [],
    content: "",
    cover_img: null,
    is_active: true,
    summary: "",
});

async function submit() {
    if (form.summary.replace(" ", "") == "") {
        Report.failure(
            "Summary Field Empty!",
            "The Summary is a required field. Please make sure to set its value.",
            "Ok"
        );
        return;
    }

    if (!form.tags.length || !form.keywords.length) {
        Report.failure(
            "Tags or Keywords are Required",
            "Please Check keywords or tags. Both should have a value.",
            "Ok"
        );
        return;
    }

    if (form.content.replace(" ", "") == "") {
        Report.failure(
            "Content Is Required",
            "The Content is the most important property. Please make sure to add a content.",
            "Ok"
        );
        return;
    }

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
    form.summary = "";
    alert("successfully Inserted!");
    window.location.reload();
}
</script>
<template>
    <div class="w-full max-w-800px mx-auto">
        <ButtonComponent class="fixed top-70px left-20px" @click="router.push('/admin/blogs')"> Back </ButtonComponent>
        <div class="flex justify-between items-end pb-20px">
            <div class="font-800 text-size-30px">Create Blog</div>
        </div>
        <form @submit.prevent="submit">
            <div class="pb-10px">
                Title: <br />
                <input
                    type="text"
                    v-model="form.title"
                    placeholder="ex. how to code"
                    class="w-full max-w-500px rounded-md"
                    required
                />
            </div>
            <div class="pb-10px">
                Keywords (For SEO):
                <Vue3TagsInput
                    :tags="form.keywords"
                    :add-tag-on-keys="[13, 188]"
                    @on-tags-changed="(tags: never[]) => (form.keywords = tags)"
                    placeholder="Enter Tags, comma separated..."
                />
            </div>
            <div class="pb-10px">
                Tags (To Be Displayed):
                <Vue3TagsInput
                    :tags="form.tags"
                    :add-tag-on-keys="[13, 188]"
                    @on-tags-changed="(tags: never[]) => (form.tags = tags)"
                    placeholder="Enter Tags, comma separated..."
                />
            </div>
            <div>
                Cover Image URL:<br />
                <small>
                    If no provided, it will auto generate cover. Can be a <b>youtube link</b> or <b>image link</b>.
                </small>
                <br />
                <input
                    type="text"
                    v-model="form.cover_img"
                    placeholder="youtube link or image link"
                    class="w-full max-w-500px rounded-md"
                />
            </div>
            <div class="pt-4">Content:</div>
            <div class="mb-3">
                <EditorComponent @onChangeGetPureHtml="(pureHtml) => (form.content = pureHtml)" />
            </div>
            <div>
                Summary:<br />
                <textarea
                    type="text"
                    v-model="form.summary"
                    class="w-full min-h-100px rounded-lg"
                    placeholder="Summary"
                    required
                ></textarea>
            </div>
            <div class="mt-10px">
                <label>
                    <input type="checkbox" v-model="form.is_active" />
                    Set Content as Active
                </label>
            </div>
            <div>
                <ButtonComponent
                    type="submit"
                    class="border border-black p-5px rounded-md hover:bg-black hover:text-white mt-10px"
                >
                    Publish Blog
                </ButtonComponent>
            </div>
        </form>
    </div>
</template>
<style lang="scss">
input {
    outline: none;
}
</style>
