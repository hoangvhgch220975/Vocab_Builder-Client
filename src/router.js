import Vue from 'vue';
import Router from 'vue-router';
import Words from './views/Words.vue';
import NewWord from './views/New.vue';  // Renamed to NewWord
import ShowWord from './views/Show.vue';  // Renamed to ShowWord
import EditWord from './views/Edit.vue';  // Renamed to EditWord
import AboutPage from './views/AboutPage.vue';  // Renamed to AboutPage
import HomePage from './views/Home.vue';  // Renamed to HomePage

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/words',  // Fixed: Automatically redirects to /words
            name: 'HomePage',  // Updated name to HomePage
            component: HomePage
        },
        {
            path: '/words',
            name: 'Words',
            component: Words
        },
        {
            path: '/words/new',
            name: 'NewWord',  // Updated name to NewWord
            component: NewWord
        },
        {
            path: '/words/show/:id',
            name: 'ShowWord',  // Updated name to ShowWord
            component: ShowWord,
            props: true  // This ensures the 'id' param is passed as a prop to the ShowWord component
        },
        {
            path: '/words/edit/:id',
            name: 'EditWord',  // Updated name to EditWord
            component: EditWord,
            props: true  // This ensures the 'id' param is passed as a prop to the EditWord component
        },
        {
            path: '/about',
            name: 'AboutPage',  // Updated name to AboutPage
            component: AboutPage
        }
    ]
});

export default router;
