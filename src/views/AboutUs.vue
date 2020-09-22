<template>
  <div class="pt-7 pt-md-0" v-if="about && about.title">
    <v-row justify="start" class="pt-10 pt-md-0">
      <FormHome />
    </v-row>
    <v-container>
      <v-row class="pt-5 px-5">
        <h1 class="title-top">{{about.title}}</h1>
      </v-row>
      <v-row class="px-5">
        <v-card outlined>
          <v-card-text class="text-justify" v-html="about.text"></v-card-text>
        </v-card>
      </v-row>
      <v-row class="pb-10 pt-5 px-5">
        <v-col cols="12" sm="4" v-for="(img, i) in about.imgs" :key="i" class="d-flex justify-center">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 0" outlined @click="openModal(about.imgs, i)">
              <v-img  height="250px" :src="base_url+img"></v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <TinyBox :loop="true" v-model="index" :images="imagesBox" />
  </div>
</template>

<script>
import FormHome from '@/components/FormHome';
import TinyBox from 'vue-tinybox';

export default {
  components: {
    TinyBox,
    FormHome
  },
  data: function() {
    return { 
      base_url: this.$store.state.base_url,
      index: null,
      imagesBox: []
    }
  },
  methods: {
    openModal(data, index){
      if (data) {
        this.imagesBox = []   
        data.forEach(element => {
          let newSrc
          newSrc = this.base_url+element
          this.imagesBox.push(newSrc)
        });
        this.index = index
      }
    }
  },
  computed: {
    about() {
      return this.$store.state.about
    }
  }
}
</script>

<style>

</style>