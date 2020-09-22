<template>
  <div v-if="newsRecents && newsRecents.length > 0" style="background-color: #f5f5f5;">
    <v-row class="d-flex justify-center">
      <v-col cols="11" md="9" lg="8" xl="10" class="d-flex justify-center px-0 pl-xl-10">
        <h1
          :class="{'d-flex justify-center': $vuetify.breakpoint.smAndDown}"
          class="pl-xl-8 container"
        >
          <b>Notícias</b>
        </h1>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col
        cols="11"
        sm="5"
        md="4"
        lg="3"
        :class="{'d-flex justify-center': $vuetify.breakpoint.smAndDown}"
      >
        <v-card
          max-height="320px"
          max-width="320px"
          style="background-color: #f5f5f5;"
          elevation="2"
          class="px-0 mx-0"
          @click="openModal(newsRecents[0].img)"
        >
          <v-img width="100%" height="100%" :src="base_url+newsRecents[0].img"></v-img>
        </v-card>
      </v-col>
      <v-col cols="11" sm="6" md="5" lg="5" class="d-flex justify-center">
        <v-card style="background-color: #f5f5f5;" max-height="300px" elevation="0" class="text">
          <v-card-title class="pt-0" v-html="newsRecents[0].title"></v-card-title>
          <v-card-text v-html="newsRecents[0].text" class="text-news-recents text-justify"></v-card-text>
          <v-card-actions class="py-0 pt-3 d-flex justify-end">
            <v-btn
              elevation="0"
              small
              color="primary"
              dark
              :to="'/noticias/'+newsRecents[0].link"
            >Leia mais</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <TinyBox :loop="true" v-model="index" :images="imagesBox" />
  </div>
</template>

<script>
import TinyBox from 'vue-tinybox'

export default {
  components: {
    TinyBox
  },
  data: () => ({
    index: null,
    imagesBox: [],
  }),
  methods: {
    openModal(image) {
      this.imagesBox = []
      image = this.base_url + image
      this.imagesBox.push({ src: image })
      // console.log(this.imagesBox);
      this.index = 0
    },
  },
  computed: {
    base_url() {
      return this.$store.state.base_url
    },
    newsRecents() {
      return this.$store.state.recentNews
    }
  }
}
</script>

<style>
.text-news-recents {
  overflow-y: hidden;
  max-height: 210px;
}
</style>