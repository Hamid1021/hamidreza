import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "صفحه اصلی",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "پروژه های من",
    path: "/projects",
    newTab: false,
  },
  {
    id: 33,
    title: "پست ها",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "تماس با من",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "صفحات",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
