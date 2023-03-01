import { supabase } from "./../service/supabase";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Admin/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import("@/views/LoginView.vue"),
        },
        {
            path: "/admin",
            component: () => import("@/views/Admin/AdminMain.vue"),
            children: [
                {
                    path: "",
                    name: "home",
                    component: HomeView,
                },
                {
                    path: "blogs",
                    name: "blogs",
                    component: () => import("@/views/Admin/Blogs/BlogsView.vue"),
                },
                {
                    path: "blog/create",
                    name: "create-blog",
                    component: () => import("@/views/Admin/Blogs/CreateBlog.vue"),
                },
                {
                    path: "about",
                    name: "about",
                    // route level code-splitting
                    // this generates a separate chunk (About.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import("../views/Admin/AboutView.vue"),
                },
            ],
        },
    ],
});

router.beforeEach(async (to) => {
    if (["blogs", "create-blog"].includes(to.name as any)) {
        const { data } = await supabase.auth.getUser();
        if (!data.user) return false;
    }
});

export default router;
