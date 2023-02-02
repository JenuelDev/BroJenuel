<script setup lang="ts">
const isShowContent = ref(false);
const currentDate = new Date();

onMounted(() => {
    isShowContent.value = true;
});
</script>
<template>
    <div id="about-me">
        <Transition>
            <div v-show="isShowContent" class="">
                <div class="font-800 text-size-20px text-[var(--primary)] w-full max-w-500px mx-auto px-20px pt-80px">About Me</div>
                <div class="pt-5 w-full max-w-550px mx-auto px-20px pt-80px">
                    <div class="pb-10px indent-md">
                        My name is Jenuel Ganawed or call me BroJenuel. I’m a developer with a full-stack background and a keen eye for good design. Currently, I focus on building
                        apps and software using web tools.
                    </div>
                    <div class="indent-md">
                        Over the past {{ currentDate.getFullYear() - 2017 }} years, I’ve gained experience across some aspects of the application lifecycle, including frontend,
                        backend, and dev-ops.
                    </div>
                    <div class="flex justify-center pt-5 gap-3">
                        <NuxtLink href="/TimeLine" class="btn btn-lg btn-filled sm:w-auto w-full group">
                            <Icon name="mdi:chart-timeline" class="group-hover:animate-head-shake" />
                            Time line
                        </NuxtLink>
                        <NuxtLink href="/my-work" class="btn btn-lg btn-filled sm:w-auto w-full group">
                            <Icon name="pajamas:project" class="group-hover:animate-head-shake" />
                            My Work
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>
