<script setup lang="ts">
const isShowContent = ref(false);
const myWork = await queryContent("/my-work").sort({ _id: -1 }).find();
const codeChallenges = useCodeChallenges();

onMounted(() => (isShowContent.value = true));
</script>
<template>
    <NuxtLayout>
        <Transition>
            <div v-show="isShowContent" class="pt-90px">
                <div class="max-w-550px mx-auto px-10px">
                    <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                        <Icon name="pajamas:project" />
                        My Work
                    </div>
                    <div class="pt-5">
                        <div class="indent-md">Showing are personal projects that I made during my spare/free time. I don't add projects from my Work/Jobs, only if allowed.</div>
                    </div>
                    <div class="grid sm:grid-cols-2 grid-cols-1 gap-3">
                        <NuxtLink
                            v-for="(work, i) in myWork"
                            :key="i"
                            :href="work._path"
                            class="p-10px rounded-md transform translate-y-1 hover:translate-y-0 transition-transform cursor-pointer group"
                        >
                            <div class="p-10px">
                                <img :src="`/img/work/${work.img}`" class="rounded-md" :alt="work.description" srcset="" width="500" height="500" />
                            </div>
                            <div class="text-center">
                                <div class="font-700 group-hover:text-[var(--primary)]">{{ work.title }} <Icon name="" /></div>
                                <div>{{ work.description }}</div>
                            </div>
                        </NuxtLink>
                    </div>
                    <div>
                        <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px pb-5 pt-10">
                            <Icon name="material-symbols:other-admission-sharp" />
                            Other Projects
                        </div>
                        <div class="grid sm:grid-cols-2 grid-cols-1 gap-3">
                            <div
                                v-for="codeChallenge in codeChallenges"
                                :key="codeChallenge.title"
                                class="group bg-[var(--background-secondary)] p-3 rounded-md flex flex-col justify-between transform translate-y-0 hover:translate-y-[-5px] transition-all"
                            >
                                <div>
                                    <div class="font-800 group-hover:text-[var(--primary)]">
                                        {{ codeChallenge.title }}
                                    </div>
                                    <div v-html="codeChallenge.des"></div>
                                </div>
                                <div class="flex gap-2 text-size-20px pt-2">
                                    <template v-for="link in codeChallenge.links">
                                        <a :href="link.link" target="_blank" :title="link.tooltip" class="hover:text-[var(--primary)]">
                                            <Icon :name="link.icon" />
                                        </a>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </NuxtLayout>
</template>
