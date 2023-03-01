<template>
    <div class="sticky top-0 w-full bg-white h-[50px] shadow-md flex items-center px-15px justify-between z-50">
        <div>BroJenuel Admin Portal</div>
        <ul class="flex gap-2">
            <li>
                <RouterLink to="/admin">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/admin/blogs">Blogs</RouterLink>
            </li>
            <li>
                <RouterLink to="/admin/about">About</RouterLink>
            </li>
        </ul>
    </div>
    <div class="p-10px">
        <RouterView />
    </div>
</template>
