export const state = () => ({
  articles: [],
  category: '',
  loading: false,
  countryCode: 'us'
})

export const getters = {
  getArticles(state) {
    return state.articles
  },
  category(state) {
    return state.category
  },
  getLoading(state) {
    return state.loading
  },
  getCountryCode(state) {
    return state.countryCode
  }

}

export const mutations = {
  setArticle(state, articles) {
    state.articles = articles
  },
  setCat(state, category) {
    state.category = category
  },
  setLoading(state, loading) {
    state.loading = loading
    console.log(loading)
  },
  setCountry(state, countryCode) {
    state.countryCode = countryCode
  }

}

export const actions = {
  async loadHeadlines({commit}, apiUrl) {
    commit('setLoading', true)
    try {
      console.log(apiUrl)
      const {articles} = await this.$axios.$get(apiUrl)

      commit('setArticle', articles)
    } catch (e) {

      console.log(e)
    } finally {
      commit('setLoading', false)
    }
  },

}
