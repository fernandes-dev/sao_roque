<template>
  <div class="pt-7 pt-md-0">
    <v-row justify="start" class="pt-10 pt-md-0">
      <FormHome />
    </v-row>
    <v-container v-if="newsItem && newsItem.title" class="mt-10 pt-10 mt-md-0">
      <v-row>
        <h1 class="pl-8 title-top">{{newsItem.title}}</h1>
      </v-row>
      <v-row>
        <h5 class="pl-8 pb-5">publicado em: {{ formateDate(newsItem.date)}}</h5>
      </v-row>
      <v-row class="px-5">
        <v-col cols="12" md="8" class="py-0 pt-3">
          <v-card elevation="0">
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 5 : 0"
                @click="openModal(newsItem.img)"
                :class="{'d-flex justify-center': $vuetify.breakpoint.smAndDown, 'float-left': $vuetify.breakpoint.smAndUp}"
                class="mr-5 mb-5"
              >
                <v-img max-height="250px" max-width="250px" :src="base_url+newsItem.img"></v-img>
              </v-card>
            </v-hover>
            <div class="d-flex justify-start pt-2"></div>
            <v-card-text class="pa-0">
              <div class="body-news text-justify" v-html="newsItem.text"></div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <CardRecents :baseTo="'/noticias/'" :recents="recents" :btnViewMore="true" />
        </v-col>
      </v-row>
    </v-container>
    <TinyBox :loop="true" v-model="index" :images="imagesBox" />
  </div>
</template>

<script>

import CardRecents from '@/components/news/CardRecents'
import FormHome from '@/components/FormHome'
import moment from 'moment'
import TinyBox from 'vue-tinybox'

export default {
  beforeCreate() {
    // console.log(this.$route.params.link)
    this.$store.dispatch("news/request", {
      state: "item",
      method: "POST",
      url: "news/" + this.$route.params.link
    });
  },
  data: () => ({
    index: null,
    imagesBox: [],
  }),
  components: {
    CardRecents,
    FormHome,
    TinyBox
  },
  methods: {
    formateDate(date) {
      return moment(String(date)).format('DD/MM/YYYY - hh:mm')
    },
    openModal(image) {
      this.imagesBox = []
      image = this.base_url + image
      this.imagesBox.push({ src: image })
      console.log(this.imagesBox);
      this.index = 0
    },
  },
  computed: {
    recents() {
      return this.$store.state.recentNews
    },
    newsItem() {
      return this.$store.state.news.item
    },
    base_url() {
      return this.$store.state.base_url
    }
  },
  watch: {
    '$route.params.link': function () {
      this.$store.dispatch("news/request", {
        state: "item",
        method: "POST",
        url: "news/" + this.$route.params.link
      });
    }
  }
}
</script>

<style scoped>
.release-title {
  overflow-y: hidden;
  max-height: 80px;
}
.body-news {
  font-size: 0.9rem;
  padding-bottom: 35px;
}
</style>