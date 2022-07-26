// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/components/HomeComponent';
import SearchComponent from '@/components/SearchComponent';
import ResultComponent from '@/components/ResultComponent';

Vue.use(VueRouter);

// 라우트 정보
// 라우팅을 해주면서 #을 제거해주면서, path에 입력한 경로에 매핑된 컴포넌트를 보여준다.
const route = [
    {
    path: "/", 
    redirect: '/home'
    },  // 루트(/)로 접속했을때, Home 컴포넌트를 보여준다.
    {
    path: "/home", 
    component: HomeComponent
    }, 
    { 
    path: "/search", 
    component: SearchComponent
    },
    { 
    path: "/result", 
    component: ResultComponent
    },
];

// Vue 라우터 인스턴스 생성
const router = new VueRouter({
    mode: 'history',
    routes: route
});

export default router;