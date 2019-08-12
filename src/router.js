import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
export const PATH_COURSES = "/courses";
export const PATH_USERS = "/users";
export const PATH_HOME = "/";

Vue.use(Router);

let router = new Router({
    mode: 'history',
    component: Home,
    routes: [
        //    {
        //         path: "/courses/:id",
        //         name: "course",
        //         component: () =>
        //             import ("./views/SelectCourse.vue")
        //     },
        {
            path: PATH_USERS,
            name: "Users",
            component: () =>
                import ("./views/UsersPage.vue"),
        },
        {
            path: PATH_COURSES,
            name: "Courses",
            component: () =>
                import ("./views/CoursesPage.vue")
        },
        {
            path: PATH_HOME,
            name: "Home",
            component: () =>
                import ("./views/Home.vue")
        }
    ]
});

export default router;