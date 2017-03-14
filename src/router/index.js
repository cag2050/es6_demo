import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello';
import Spread from '../components/Spread';
import Destructuring from '../components/Destructuring';
import ObjectAssign from '../components/ObjectAssign';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello,
        },
        {
            path: '/Spread',
            name: 'Spread',
            component: Spread,
        },
        {
            path: '/Destructuring',
            name: 'Destructuring',
            component: Destructuring,
        },
        {
            path: '/ObjectAssign',
            name: 'ObjectAssign',
            component: ObjectAssign,
        },
    ],
});
