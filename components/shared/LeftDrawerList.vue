<template>
  <v-navigation-drawer
    v-model="isOpen"
    clipped
    fixed
    app
  >
    <v-list>
      <v-progress-linear
        v-if="loading"
        indeterminate
        color="light-green darken-4"
      ></v-progress-linear>
      <v-list-item

        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        @click="loadCats(item.path)"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"/>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "LeftDrawerList",
  props: {
    value: Boolean
  },
  data() {
    return {
      items: [
        {name: "Top headLines", path: "", icon: "mdi-calendar-today"},
        {name: "Technology", path: "technology", icon: "mdi-keyboard"},
        {name: "Business", path: "business", icon: "mdi-domain"},
        {name: "Entertainment", path: "entertainment", icon: "mdi-calendar-weekend"},
        {name: "Health", path: "health", icon: "mdi-food"},
        {name: "Science", path: "science", icon: "mdi-fingerprint"},
        {name: "Sport", path: "sport", icon: "mdi-golf"},
      ],
    }
  },
  computed: {
    isOpen: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    category() {
      return this.$store.getters["articles/category"]
    },
    loading() {
      return this.$store.getters["articles/getLoading"]
    },
    country() {
      return this.$store.getters["articles/getCountryCode"]
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
  }
}
</script>

<style scoped>

</style>
