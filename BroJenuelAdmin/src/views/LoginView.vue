<script setup lang="ts">
import { supabase } from "@/service/supabase";
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

onMounted(async () => {
    const { data, error } = await supabase.auth.getUser();
    if (data) router.push("/admin");
});

const router = useRouter();
const form = reactive<{ email: string | null; password: string | null }>({
    email: null,
    password: null,
});

async function submit() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email ?? "",
        password: form.password ?? "",
    });

    if (error) {
        alert(error.message);
        return;
    }

    router.push("/admin");
}
</script>
<template>
    <div class="w-full max-w-500px mx-auto mt-30px shadow-md p-10px">
        <div>Admin Login</div>
        <form @submit.prevent="submit">
            <input class="w-full mb-2 outline-none" type="text" v-model="form.email" placeholder="example@gmail.com" />
            <input class="w-full mb-2 outline-none" type="password" v-model="form.password" placeholder="password" />
            <div>
                <button type="submit" class="border px-10px hover:bg-black hover:text-white">Submit</button>
            </div>
        </form>
    </div>
</template>
