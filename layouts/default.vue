<template>
  <v-app dark>
      <LeftDrawerList v-model="drawer" />
    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>

      <nuxt-link to="/">
        <v-toolbar-title v-text="title"/>
      </nuxt-link>
      <v-spacer/>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
  <RightDrawer v-model="rightDrawer" />
    <v-footer

      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>

import LeftDrawerList from "~/components/shared/LeftDrawerList";
import RightDrawer from "~/components/shared/RightDrawer";

export default {
  components: {RightDrawer, LeftDrawerList},
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {name: "Top headLines", path: "", icon: "mdi-calendar-today"},
        {name: "Technology", path: "technology", icon: "mdi-keyboard"},
        {name: "Business", path: "business", icon: "mdi-domain"},
        {name: "Entertainment", path: "entertainment", icon: "mdi-calendar-weekend"},
        {name: "Health", path: "health", icon: "mdi-food"},
        {name: "Science", path: "science", icon: "mdi-fingerprint"},
        {name: "Sport", path: "sport", icon: "mdi-golf"},
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'mmd news '
    }
  },
  computed: {
    category() {
      return this.$store.getters["articles/category"]
    },
    loading() {
      return this.$store.getters["articles/getLoading"]
    },

  },
  methods: {
    async loadCats(path) {
      this.$store.commit("articles/setCat", path)
      await this.$store.dispatch(
        "articles/loadHeadlines",
        `top-headlines?country=${this.country}&category=${this.category}`
      )
    },
    async chengeCountry(countryCode) {
      console.log(countryCode)

      this.$store.commit("articles/setCountry", countryCode)
      // await this.$store.dispatch(
      //   "articls/loadHeadlines",
      //   `/api/top-headlines?country=${this.country}&category=${this.category}`
      // )
    },
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
