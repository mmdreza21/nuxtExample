<template>
  <v-card tag="article" height="400">

    <v-skeleton-loader
      v-if="loading"
      type="card"
    ></v-skeleton-loader>

    <div v-else>
      <v-img
        max-width="400"
        height="200"
        :src="headline.urlToImage?headline.urlToImage:'https://www.biz-runner.com/wp-content/uploads/2019/02/2-1024x599.jpg'">
        <template v-slot:placeholder>
          <v-skeleton-loader
            type="card"
          ></v-skeleton-loader>
        </template>
      </v-img>
      <div class="md-title">
        <a :href="headline.url" target="_blank">{{
            headline.title
          }}</a>
      </div>
      <div>
        {{ headline.source.name }}
        <v-icon class="small-icon">mdi-book</v-icon>
      </div>
      <div class="md-subhead" v-if="headline.author">
        {{ headline.author }}
        <v-icon >mdi-emoticon-cool</v-icon>
      </div>
      <div class="md-subhead">
        {{ headline.publishedAt }}
        <v-icon class="small-icon">mdi-alarm</v-icon>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    headline: Object
  }
}
</script>

<style scoped>

</style>
