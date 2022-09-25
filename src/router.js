import { createRouter, createWebHistory } from 'vue-router';

import Volumes from './pages/Titles/Volumes.vue';
import Titles from './pages/Titles/Titles.vue';
import AddTitle from './pages/Titles/AddTitles.vue';
import VolumeDetails from './pages/VolumeDetails/VolumeDetails.vue';
import AddVolumes from './pages/VolumeDetails/AddVolumes.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/titles' },
    { path: '/titles', component: Titles },
    {
      path: '/titles/:id',
      component: Volumes,
      props: true,
      children: [
        { path: 'details', component: VolumeDetails }, // /coaches/c1/contact
      ],
    },
    { path: '/addtitles', component: AddTitle },
    { path: '/addvolumes', component: AddVolumes }, // embed into volume
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
