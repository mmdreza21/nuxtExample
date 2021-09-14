<template>
  <v-row class="dca">
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
<!--     <MyForm v-model="item" @submit="addNewData"/>-->
    <v-btn class= @click.stop="load" >loadd</v-btn>
      <MyForm v-model="item" @submit="editData">
          <template #btnText>
            edit
          </template>
        <template #loading="{loading}">
          <v-overlay absolute :value="loading">
            <v-progress-circular
              indeterminate
              size="64"
            ></v-progress-circular>
          </v-overlay>
        </template>
      </MyForm>
<!--      {{item}}-->
    </v-col>
  </v-row>
</template>
<script>
export default  {
  methods:{
    load(){
      this.item = JSON.parse(localStorage.getItem('item'))
    },
    addNewData(){
      localStorage.setItem('item',JSON.stringify(this.item))
    },
    editData(){
      localStorage.setItem('item',JSON.stringify(this.item))
    }
  },
  data(){
    return{
      item:{
        name: null,
        last: null
      }
    }
  }
}
</script>
