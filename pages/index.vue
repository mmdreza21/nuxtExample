<template>
  <v-row>
    <v-col>

      <!--      <NewsCard :headline="headline"/>-->
<div class="video-container">

      <video  controls ref="video"    id="videoRef">
        <source src="http://video.novino.net/video/video/1600432338343feded81c51c4ec7d9d64a46c95c3d25316756-360p.mp4">
      </video>
</div>
    </v-col>

  </v-row>
</template>
<script>
// import {mapGetters} from 'veux'
import NewsCard from "~/components/NewsCard";

export default {
  components: {NewsCard},
  data() {
    return {
      leftPanel: false,
      showSidePanel: false,
      video: null
    }
  },

  computed: {
    headlines() {
      return this.$store.getters["articles/getArticles"]
    },
    category() {
      return this.$store.getters["articles/category"]
    },
    loading() {
      return this.$store.getters["articles/getLoading"]
    },

  },
  mounted() {
    this.video = this.$refs.video
  },
  async fetch({store}) {
    await store.dispatch(
      "articles/loadHeadlines",
      `top-headlines?country=us`
    )
  },
  methods: {
    async loadCats(path) {
      this.$store.commit("articles/setCat", path)
      await this.$store.dispatch(
        "articles/loadHeadlines",
        `top-headlines?country=${this.country}&category=${this.category}`
      )
    },
    async changeCountry(countryCode) {
      console.log(countryCode)

      this.$store.commit("articles/setCountry", countryCode)
      // await this.$store.dispatch(
      //   "articls/loadHeadlines",
      //   `top-headlines?country=${this.country}&category=${this.category}`
      // )
    },
  },
}
</script>

<style scoped>
.small-icon {
  font-size: 18px !important;
}
.video-container {
  width: 100%;
  padding-top: 56.25%;
  height: 0;
  position: relative;
}
#videoRef {
  background: #000;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
a {
  text-decoration: none;
}

.fixed-toolbar {
  position: fixed;
  top: 0;
  z-index: 5;
}
</style>
