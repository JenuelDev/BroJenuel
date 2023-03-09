<script setup lang="ts">
import { useRouter } from "vue-router";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { onMounted, ref, watch } from "vue";
import { supabase } from "@/service/supabase";
import { Loading } from "notiflix";

const loading = ref(false);
const router = useRouter();
const blogs: any = ref([]);

async function getBlogs() {
    loading.value = true;
    const { data, error } = await supabase.from("blogs").select().order("id", { ascending: false });
    loading.value = false;

    if (error) {
        alert(error.message);
        return;
    }

    blogs.value = data as any;
}

async function deleteBlog(id: string | number) {
    if (!confirm("Are you sure you want to delete This item?")) return;

    loading.value = true;
    const deleteBlogMeta = await supabase.from("blog_meta").delete().eq("blogs_id", id);
    if (deleteBlogMeta.error) {
        alert(deleteBlogMeta.error.message);
        return;
    }

    const deleteBlog = await supabase.from("blogs").delete().eq("id", id);
    loading.value = false;
    if (deleteBlog.error) {
        alert(deleteBlog.error.message);
        return;
    }

    alert("Successfully Deleted!");
    getBlogs();
}

async function setActive(id: string | number, value: number) {
    if (!confirm(`Set it as ${value ? "Active" : "In-Active"}?`)) return;

    loading.value = true;
    const { error } = await supabase
        .from("blogs")
        .update({
            is_active: value,
        })
        .eq("id", id);
    loading.value = false;

    if (error) {
        alert(error.message);
        return;
    }

    getBlogs();
    alert(`Successfully set as ${value ? "Active" : "In-Active"}!`);
}

watch(
    () => loading.value,
    (val) => {
        if (val) Loading.pulse();
        else Loading.remove();
    }
);

onMounted(async () => {
    await getBlogs();
});
</script>
<template>
    <div class="">
        <div class="flex justify-between mt-20px max-w-920px mx-auto shadow-md p-20px items-center mb-30px">
            <div class="font-800 text-size-20px">Blogs</div>
            <ButtonComponent @click="router.push('/admin/blog/create')"> Add Post </ButtonComponent>
        </div>
        <div class="max-w-920px mx-auto">
            <div v-for="blog in blogs" :key="blog.id" class="py-10px flex justify-between hover:bg-gray-100 px-10px">
                <div class="flex items-center gap-2">
                    <span
                        class="w-10px h-10px block rounded-full"
                        :class="`${blog.is_active ? 'bg-green-500' : 'bg-red-500'}`"
                    ></span>
                    {{ blog.title }}
                </div>
                <div class="flex gap-2">
                    <div v-if="blog.is_active" class="hover:underline cursor-pointer" @click="setActive(blog.id, 0)">
                        Set As Inactive
                    </div>
                    <div v-else class="hover:underline cursor-pointer" @click="setActive(blog.id, 1)">
                        Set As Active
                    </div>
                    <div class="text-red-600 hover:underline cursor-pointer" @click="deleteBlog(blog.id)">Delete</div>
                </div>
            </div>
        </div>
    </div>
</template>
