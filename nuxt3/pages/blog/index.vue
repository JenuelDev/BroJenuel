<script setup lang="ts">
const isShowContent = ref(false);
const emailJs = useEmailJs();
const isLoading = ref(false);
const form = reactive<{
    subject: string | null;
    name: string | null;
    email: string | null;
    message: string;
}>({
    subject: null,
    name: null,
    email: null,
    message: "",
});
async function submitMail() {
    isLoading.value = true;
    try {
        if (form.name && form.subject && form.email && form.message)
            await emailJs.sendEmail({
                name: form.name,
                subject: form.subject,
                email: form.email,
                message: form.message,
            });

        form.name = null;
        form.email = null;
        form.subject = null;
        form.message = "";
    } catch (e) {
        console.log(e);
    }
    isLoading.value = false;
}
onMounted(() => (isShowContent.value = true));
</script>
<template>
    <Transition>
        <div v-show="isShowContent" class="pt-90px min-h-90vh">
            <div class="max-w-550px mx-auto px-10px">
                <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                    <Icon name="fluent-mdl2:blog" />
                    Blog
                </div>
                <div class="pt-5">
                    <div class="indent-md">
                        I am currently looking for Job. However, if you have other request or questions, don't hesitate to contact me using the form bellow.
                    </div>
                </div>
                <div>Blog is under construction</div>
            </div>
        </div>
    </Transition>
</template>
