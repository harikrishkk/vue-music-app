/* eslint-disable */
import { usersCollection, auth } from '@/includes/firebase';

export default {
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  getters: {},
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth: (state) => {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { email, password } = payload;
      await auth.signInWithEmailAndPassword(email, password);
      commit('toggleAuth');
    },
    async register(context, payload) {
      const { commit } = context;
      const { email, password, age, country, name } = payload.values;
      const userCred = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // instead of add, use doc().set() if we need to set the ID ourselves
      await usersCollection.doc(userCred.user.uid).set({
        name,
        email,
        age,
        country,
      });
      await userCred.user.updateProfile({
        displayName: name,
      });
      commit('toggleAuth');
    },
    init_login({ commit }) {
      const user = auth.currentUser;
      if (user) {
        commit('toggleAuth');
      }
    },
    async signOut({ commit }) {
      await auth.signOut();
      commit('toggleAuth');
    },
  },
};
