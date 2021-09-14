<template>
  <v-navigation-drawer
    v-model="isActive"
    right
    temporary
    fixed
  >
    <v-list>
      <v-list-item>
        <v-select
          outlined
          @input="changeCountry"
          label="country"
          v-model="country"
          :items="items"
          item-value="value"
          item-text="text">

        </v-select>

      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "RightDrawer",
  props: {
    value: Boolean
  },
  watch: {
    async country() {
      await this.$store.dispatch(
        "articles/loadHeadlines",
        `top-headlines?country=${this.country}&category=${this.category}`
      )
    }
  },
  data() {
    return {
      items: [
        {value: "us", text: 'United State'},
        {value: "ca", text: 'Canada'},
        {value: "de", text: 'Germany'},
        {value: "ru", text: 'Russia'}
      ],
      rightDrawer: false,

    }
  },
  computed: {
    category() {
      return this.$store.getters["articles/category"]
    },
    country: {
      get() {
        return this.$store.getters['articles/getCountryCode']
      },
      set(val) {
        return val
      }
    },
    isActive: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    async changeCountry(countryCode) {


      this.$store.commit("articles/setCountry", countryCode)

    },
  }
}
</script>

<style scoped>

</style>
