<script setup lang="ts">
const isShowContent = ref(false);
const experiences = useExperiences();
onMounted(() => (isShowContent.value = true));
</script>
<template>
    <Transition>
        <div v-show="isShowContent" class="pt-90px min-h-90vh">
            <div class="max-w-550px mx-auto px-10px">
                <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                    <Icon name="mdi:chart-timeline" />
                    Timeline
                </div>
                <div class="pt-5">
                    <div class="indent-md">
                        I am currently not looking for Job. However, if you have other request or questions, don't hesitate to contact me using the form bellow.
                    </div>
                </div>
                <div class="timeline-div p-10px">
                    <div>
                        <p v-for="(experience, i) in experiences" :key="experience.url">
                            <div class="font-800 text-size-18px pb-2">
                                <span>{{ experience.position }}</span>
                                <a :href="experience.url" class="hover:text-[var(--primary)]"> @ {{ experience.company }}</a>
                            </div>
                            <div>{{ experience.workStart }} - <span v-html="experience.workUntil"></span></div>
                            <div>
                                <button class="btn !text-size-13px" role="button"
                            title="Open Link"
                            :id="`open-link-button${i}`" > <Icon name="octicon:link-external-16" /> {{ experience.url.slice(0, 30) }}... </button>
                            </div>
                            <div v-html="experience.des"></div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>
<style lang="scss">
.timeline-div {
    body {
        font-family: Helvetica;
    }

    div {
        width: 100%;
        margin: auto;
    }

    p {
        border-top: 2px dashed;
        border-color: var(--primary) !important;
        margin: 0;
        padding: 30px;
        counter-increment: section;
        position: relative;
    }

    p:nth-child(even):before {
        content: counter(section);
        right: 100%;
        margin-right: -15px;
        display: flex;
        align-items: center;
        position: absolute;
        border-radius: 50%;
        padding: 10px;
        height: 30px;
        width: 30px;
        background-color: var(--primary);
        text-align: center;
        color: var(--background);
        font-size: 110%;
        top: 40%;
    }

    p:nth-child(odd):before {
        content: counter(section);
        left: 100%;
        margin-left: -15px;
        position: absolute;
        border-radius: 50%;
        padding: 10px;
        height: 30px;
        width: 30px;
        background-color: var(--primary);
        color: var(--background);
        text-align: center;
        font-size: 110%;
        display: flex;
        align-items: center;
        top: 40%;
    }

    p:nth-child(even) {
        border-left: 2px dashed;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        margin-right: 30px;
        padding-right: 0;
    }

    p:nth-child(odd) {
        border-right: 2px dashed;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        margin-left: 30px;
        padding-left: 0;
    }

    p:first-child {
        border-top: 0;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }

    p:last-child {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .present-work {
        color: var(--primary);
    }
}
</style>
