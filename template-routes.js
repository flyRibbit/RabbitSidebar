import Layout from "@/layout/index.vue";
const routes = [
  {
    path: "/",
    redirect: "/layout/home",
    title: "test1", //Render with title
    icon: "serve",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/layout",
    name: "Layout",
    redirect: "/layout/home",
    component: Layout,
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/basic/home/home.vue"),
      },
      {
        path: "/layout",
        name: "Layout",
        redirect: "/layout",
        title: "test2",
        icon: "test2", //Passing in icon name
        component: () => import("@/views/basic/test2/platform.vue"),
        children: [
          {
            path: "test2",
            name: "test2",
            component: () => import("@/views/basic/test2/test2.vue"),
            title: "test2-1",
            children: [],
          },
          {
            path: "test2-1",
            component: () => import("@/views/basic/test2/child/detail.vue"),
          },
        ],
      },
      {
        path: "/layout",
        name: "Layout",
        redirect: "/layout",
        title: "test3",
        icon: "test3",
        component: () => import("@/views/basic/test3/platform.vue"),
        children: [
          {
            path: "test3",
            name: "test3",
            component: () => import("@/views/basic/test3/notice.vue"),
            title: "test3-1",
          },
          {
            path: "test3-1",
            component: () => import("@/views/basic/test3/child/preview.vue"),
          },
        ],
      },
    ],
  },
];
export default routes;
