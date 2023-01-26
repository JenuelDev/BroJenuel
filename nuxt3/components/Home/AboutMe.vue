<script setup lang="ts">
const isShowContent = ref(false);

onMounted(() => {
    isShowContent.value = true;
});
</script>
<template>
    <div id="about-me" class="w-full max-w-500px mx-auto mt-50px mb-20px px-20px">
        <Transition>
            <div v-show="isShowContent">
                <div class="font-800 text-size-20px underline underline-offset-4 decoration-4 underline-opacity-50 decoration-gray-500 text-[var(--primary)]">About Me</div>
                <div class="pt-5">
                    <div class="pb-10px indent-md">
                        My name is Jenuel Ganawed or call me BroJenuel. I’m a developer with a full-stack background and a keen eye for good design. I love to make complex things
                        simple and joy to use. Currently, I focus on building apps and software using web tools.
                    </div>
                    <div class="indent-md">
                        Over the past 6 years, I’ve gained experience across some aspects of the application lifecycle, including frontend, backend, and dev-ops. It allows me to
                        take full ownership of a project from design to implementation and deployment.
                    </div>
                </div>
                <div class="mt-20px flex gap-10px justify-center">
                    <button class="button">My Portfolio</button>
                    <button class="button">My Experience</button>
                </div>
            </div>
        </Transition>
    </div>
</template>
