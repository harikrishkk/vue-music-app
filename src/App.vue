<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <app-header />
  </header>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <!-- Player -->
  <app-player />
  <!-- Auth Modal -->
  <app-auth-modal />
</template>
<script>
import Player from '@/components/Player.vue';
import Header from './components/Header.vue';
import AuthModal from './components/Auth.vue';

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appAuthModal: AuthModal,
    appPlayer: Player,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
