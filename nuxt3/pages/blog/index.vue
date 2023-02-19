<script setup lang="ts">
const isShowContent = ref(false);
const myWork = await queryContent("/blog").sort({ _id: -1 }).limit(100).find();
const codeChallenges = useCodeChallenges();

onMounted(() => (isShowContent.value = true));
</script>
<template>
    <Transition>
        <div v-show="isShowContent" class="pt-90px pb-5">
            <div class="max-w-550px mx-auto px-10px">
                <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                    <Icon name="pajamas:project" />
                    Blog
                </div>
                <div class="pt-5">
                    <div class="indent-md"></div>
                </div>
                <div class="grid grid-cols-1 gap-3">
                    <NuxtLink
                        v-for="(work, i) in myWork"
                        :key="i"
                        :href="work._path"
                        class="p-10px rounded-md transform translate-y-1 hover:translate-y-0 transition-transform cursor-pointer group"
                    >
                        <div class="relative group">
                            <div
                                class="absolute h-10px w-10px bg-gray-600 -left-5 group-hover:bg-[var(--primary)] opacity-50 group-hover:opacity-100 transition-all duration-500 rounded-lg delay top-[50%] transform translate-y-[-50%] translate-x-[-50%]"
                            ></div>
                            <div
                                class="absolute h-1px w-1px group-hover:h-50px bg-[var(--primary)] transition-all duration-500 -left-5 top-[50%] opacity-0 group-hover:opacity-100 delay-100 transform translate-y-[-50%] translate-x-[-50%]"
                            ></div>
                            <div class="absolute top-40%"></div>
                            <div class="font-700 group-hover:text-[var(--primary)]">{{ work.title }}</div>
                            <div class="italic flex gap-2">
                                <div>{{ work.date }}</div>
                                <ul class="flex gap-1">
                                    <li v-for="keyword in work.keywords" class="tag" :class="`tag-${keyword}`" :key="keyword">
                                        {{ keyword }}
                                    </li>
                                </ul>
                            </div>
                            <div>{{ work.description }}</div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </Transition>
</template>
