<template>
  <div class="pt-7 pt-md-0" v-if="certifications && certifications.title">
    <v-row justify="start" class="pt-10 pt-md-0">
      <FormHome />
    </v-row>
    <v-container>
      <v-row>
        <h1 class="pl-8 title-top pt-8 pb-4">Certificações</h1>
      </v-row>
      <v-row class="px-5">
        <v-card outlined class="pa-5">
          <v-img class="float-sm-left ma-4" :src="base_url+certifications.capa"></v-img>
          <v-card-text class="text-justify" v-html="certifications.text"></v-card-text>
        </v-card>
      </v-row>
      <v-row justify="center" class="pt-10">
        <div class="primary--text"><h2>Veja nossos certificados</h2></div>
      </v-row>
      <v-row class="px-2 pb-10 mb-10">
        <v-col v-for="(img, i) in imgs" :key="i" class="d-flex justify-center">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 0" outlined @click="openModal(imgs, i)"
              class="d-flex justify-center">
              <v-img max-width="250px" height="200px" :src="base_url+img"></v-img>
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
    FormHome,
    TinyBox
  },
  mounted() {
    this.$store.dispatch("request", {
      state: "certifications",
      method: "POST",
      url: "/certifications"
    });
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
    certifications() {
      return this.$store.state.certifications
    },
    imgs() {
      return this.$store.getters["certificationsImgs"];
    }
  }
}
</script>

<style>

</style>