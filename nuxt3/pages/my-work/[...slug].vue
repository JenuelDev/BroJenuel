<template>
    <main class="pt-70px min-h-80vh max-w-500px mx-auto px-10px relative">
        <button class="btn sticky top-80px -left-100px bg-[var(--background)] z-99" @click="$router.go(-1)" role="button" title="Go Back" id="go-back-button">
            <Icon name="material-symbols:arrow-back-rounded" />
            Back
        </button>
        <div class="pt-40px">
            <ContentDoc v-slot="{ doc }">
                <h1 class="text-size-25px font-700 pb-3">{{ doc.title }}</h1>
                <div class="content-render">
                    <ContentRenderer :value="doc" />
                </div>
            </ContentDoc>
        </div>
    </main>
</template>
