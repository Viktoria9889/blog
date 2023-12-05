import MainPage from "../pages/MainPage";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";



export const routes = [
    {path: '/main', component: MainPage, element: <MainPage/>, exact: true},
    {path: '/posts', component: Posts, element: <Posts/>, exact: true},
    {path: '/posts/:id', component: PostIdPage, element: <PostIdPage/>, exact: true},

]
