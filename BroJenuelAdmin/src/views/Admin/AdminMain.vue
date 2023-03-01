<script setup lang="ts">
import { isLogged, supabase } from "@/service/supabase";
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";

const router = useRouter();
async function logout() {
    if (!confirm("are you sure you want to logout?")) return;

    const { error } = await supabase.auth.signOut();
    if (error) {
        alert(error.message);
    }

    router.push("/");
}

onBeforeMount(async () => {
    await isLogged();
});
</script>
<template>
    <div class="sticky top-0 w-full bg-white h-[50px] shadow-md flex items-center px-15px justify-between z-50">
        <div>BroJenuel Admin Portal</div>
        <ul class="flex gap-2">
            <li>
                <RouterLink to="/admin">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/admin/blogs">Blogs</RouterLink>
            </li>
            <li>
                <RouterLink to="/admin/about">About</RouterLink>
            </li>
            <li>
                <div class="cursor-pointer" @click="logout">Logout</div>
            </li>
        </ul>
    </div>
    <div class="p-10px">
        <RouterView />
    </div>
</template>
