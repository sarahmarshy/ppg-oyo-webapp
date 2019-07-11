<template>
    <div id="App">
        <!-- Inserts all of the components listed in 'routes' in src/main.js, depending on the current URL -->
        <router-view />
    </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';
import SubmitData from './components/SubmitData.vue';

require('@/../public/css/style.css')
require('@/../public/css/dropzone.css')

export default {
    name: 'App',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Dashboard,
        // eslint-disable-next-line vue/no-unused-components
        SubmitData,
    },
};
</script>

<style>

</style>
