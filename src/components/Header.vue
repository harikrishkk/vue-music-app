<template>
  <nav class="container mx-auto flex justify-start items-center py-5 px-4">
    <!-- App Name -->
    <router-link
      :to="{ name: 'home' }"
      exact-active-class="no-active"
      class="text-white font-bold uppercase text-2xl mr-4"
      >Music</router-link
    >

    <div class="flex flex-grow items-center">
      <!-- Primary Navigation -->
      <ul class="flex flex-row mt-1">
        <!-- Navigation Links -->
        <li v-if="!userLoggedIn">
          <a class="px-2 text-white" @click.prevent="toggleAuthModal" href="#"
            >Login / Register</a
          >
        </li>
        <template v-else>
          <li>
            <router-link class="px-2 text-white" to="/about">About</router-link>
          </li>
          <li>
            <router-link class="px-2 text-white" to="/manage"
              >Manage</router-link
            >
          </li>
          <li>
            <a @click.prevent="signOut" class="px-2 text-white" href="#"
              >Logout</a
            >
          </li>
        </template>
      </ul>
      <ul class="flex flex-row mt-1 ml-auto">
        <li>
          <a @click.prevent="changeLocale" class="px-2 text-white" href="#">
            {{ currentLocale }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Header',
  methods: {
    ...mapMutations(['toggleAuthModal']),
    signOut() {
      this.$store.dispatch('signOut');
      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: 'home' });
      }
    },
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === 'fr' ? 'en' : 'fr';
    },
  },
  computed: {
    ...mapState({
      userLoggedIn: (state) => state.auth.userLoggedIn,
    }),
    currentLocale() {
      return this.$i18n.locale === 'fr' ? 'French' : 'English';
    },
  },
};
</script>

<style></style>
