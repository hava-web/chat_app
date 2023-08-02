import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

// Echo.channel(`messenger`)
//     .listen('MessageSent', (e) => {
//         console.log(e);
//     });

Echo.private(`messenger`)
    .listen('MessageSent', (e) => {
        console.log(e);
    });

Echo.join(`group_chat.1`)
    .here((users) => {
        console.log(users)
    })
    .joining((user) => {
        console.log(user);
    })
    .leaving((user) => {
        console.log(user);
    })
    .listen('GroupChatMessage', (e) => {
        console.log(e);
    })
    .error((error) => {
        console.error(error);
    });