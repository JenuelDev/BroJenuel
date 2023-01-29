<script setup lang="ts">
const isShowContent = ref(false);
const skills = useSkills();

onMounted(() => {
    isShowContent.value = true;
});
</script>
<template>
    <div id="my-work" class="my-work pt-30px">
        <Transition>
            <div v-show="isShowContent">
                <div class="w-full max-w-500px mx-auto mt-50px px-20px">
                    <div class="font-800 text-size-20px underline underline-offset-4 decoration-4 underline-opacity-50 decoration-gray-500 text-[var(--primary)]">
                        Technical Skills
                    </div>
                    <div class="pt-5">
                        <div class="indent-md">I am continuously learning to keep up with the latest technologies and be able to pick the best tech for the job.</div>
                    </div>
                </div>
                <div class="max-w-550px mx-auto px-10px pt-30px">
                    <div class="grid sm:grid-cols-2 grid-cols-1 gap-3">
                        <div v-for="skill in skills" :key="skill.tech" class="flex flex-col justify-between pb-5">
                            <div>
                                <div class="flex items-center gap-3 pb-3">
                                    <Icon class="text-size-25px" :name="skill.icon" />
                                    <div class="font-700">{{ skill.tech }}</div>
                                </div>
                                <div class="text-size-14px tracking-wide leading-relaxed" v-html="skill.description"></div>
                            </div>
                            <div class="flex gap-2 pt-10px">
                                <div v-for="tool in skill.tools" :key="tool.text">
                                    <Icon class="text-size-20px" :name="tool.icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>
