<template>
  <v-form @submit.prevent="send">
    <v-text-field v-model="item.name" label="name" outlined></v-text-field>
    <v-text-field v-model="item.last" label="last" outlined></v-text-field>

    <v-btn type="submit">
      <slot name="btnText">save</slot>
    </v-btn>

    <slot name="loading" :loading="loading"></slot>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  props: {
    value: {
      type: Object,
    }
  },
  computed: {
    item: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  name: "MyForm",
  methods: {
    send() {
      this.loading = true
      setTimeout(() => {
        this.$emit('submit')
        this.loading = false
      }, 3000)
    }
  }
}
</script>

<style scoped>

</style>
