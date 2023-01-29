<script setup lang="ts">
const isShowContent = ref(false);

onMounted(() => (isShowContent.value = true));
</script>
<template>
    <Transition>
        <div v-show="isShowContent" class="pt-90px min-h-90vh">
            <div class="max-w-550px mx-auto px-10px">
                <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                    <Icon name="mdi:gmail" />
                    Contact
                </div>
                <div class="pt-5">
                    <div class="indent-md">
                        I am currently not looking for Job. However, if you have other request or questions, don't hesitate to contact me using the form bellow.
                    </div>
                </div>
                <form class="pt-5">
                    <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-[var(--background-secondary)] bg-clip-padding border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none mb-3"
                        placeholder="Enter Your Name"
                        required
                    />
                    <input
                        type="email"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-[var(--background-secondary)] bg-clip-padding border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none mb-3"
                        placeholder="Enter Your Email Address"
                        required
                    />
                    <textarea
                        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-[var(--background-secondary)] bg-clip-padding border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none mb-3"
                        id="exampleFormControlTextarea1"
                        rows="4"
                        placeholder="Write Your message"
                        required
                    ></textarea>
                    <button type="submit" class="btn btn-lg">Send Message</button>
                </form>
            </div>
        </div>
    </Transition>
</template>
