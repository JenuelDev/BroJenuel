<template>
    <section class="min-h-100vh flex items-center justify-center p-20px">
        <div class="relative flex flex-col items-center gap-50px">
            <div class="flex gap-5">
                <div class="text-right">
                    <div class="lg:text-size-44px md:text-size-36px text-size-26px font-300 tracking-tight">
                        hi! <span class="animate-wave lg:text-size-54px md:text-size-46px text-size-36px">👋</span>
                    </div>
                    <div class="lg:text-size-52px md:text-size-44px text-size-36px font-600 tracking-tight mt-10px text-[var(--primary)]">I'm <span>Jenuel</span></div>
                    <div class="lg:text-size-44px md:text-size-36px text-size-26px font-300 tracking-tight">i create apps and<br />websites</div>
                </div>
                <div>
                    <img src="https://i.imgur.com/3iN1kQym.jpg" />
                </div>
            </div>

            <div class="flex justify-between gap-5">
                <div class="intro-buttons -bottom-60px -left-50px">
                    <Icon name="icon-park-twotone:workbench" />
                    My Work
                </div>
                <div class="intro-buttons -bottom-100px left-[calc(50%-60px)]">
                    <Icon name="icon-park-twotone:boy-two" />
                    About Me
                </div>
                <div class="intro-buttons -bottom-60px -right-50px">
                    <Icon name="icon-park-twotone:timeline" />
                    My History
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="postcss">
.intro-buttons {
    @apply bg-[var(--primary)] text-[var(--background)] flex items-center justify-center gap-1 rounded-md px-10px py-5px whitespace-nowrap cursor-pointer;
}
</style>
