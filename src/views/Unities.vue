<template>
  <div class="pt-7 pt-md-0">
    <v-row justify="start" class="pt-10 pt-md-0">
      <FormHome />
    </v-row>
    <v-container>
      <v-row>
        <h1 class="pl-4 pt-8 pb-4 title-top">Unidades de Atendimento</h1>
      </v-row>
      <v-row justify="start" class="pb-10">
        <v-col cols="auto" v-for="(unity, i) in unities" :key="i">
          <v-card tile elevation="0">
            <v-card-title class="px-0 d-flex justify-center">
              {{unity.title}}
            </v-card-title>
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 4 : 0" tile outlined class="pa-1" @click="openModal(unity.imgs, i)">
                <v-img max-width="280px" max-height="190px" :src="base_url+unity.capa"></v-img>
              </v-card>
            </v-hover>
            <v-card-text class="px-0 pt-2" v-html="unity.text" />
          </v-card>
        </v-col>
      </v-row>
      <TinyBox :loop="true" v-model="index" :images="imagesBox" />
    </v-container>
  </div>
</template>

<script>
import TinyBox from 'vue-tinybox'
import FormHome from '@/components/FormHome'

export default {
  components: {
    TinyBox,
    FormHome
  },
  data: () => ({
    index: null,
    imagesBox: [],
  }),
  methods: {
    openModal(data = null, i) {
      this.imagesBox = []   
      data.forEach(element => {
        let newSrc
        newSrc = this.base_url+element
        this.imagesBox.push(newSrc)
      });
      this.index = i
    },   
  },
  computed: {
    unities() {
      return this.$store.state.unities.all
    },
    gallery() {
      return this.$store.state.unities.gallery
    },
    base_url() {
      return this.$store.state.base_url
    }
  }
}
</script>

<style>

</style>