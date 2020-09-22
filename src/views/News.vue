<template>
  <div class="pt-7 pt-md-0">
    <v-row justify="start" class="pt-10 pt-md-0">
      <FormHome />
    </v-row>
    <v-container>
      <v-row>
        <h1 class="pl-8 title-top pt-8 pb-4">Notícias</h1>
      </v-row>
      <v-row class="px-5">
        <v-col cols="12" md="7" lg="8">
          <v-card
            outlined
            v-for="(release, i) in releases"
            :key="i"
            elevation="0"
            class="mb-3 px-3"
          >
            <v-row>
              <v-hover v-slot:default="{ hover }">
                <v-card class="px-4" :elevation="hover ? 12 : 0">
                  <v-row>
                    <v-col cols="12" sm="3">
                      <v-img
                        max-height="150px"
                        max-width="150px"
                        width="100%"
                        :src="base_url+release.img"
                      ></v-img>
                    </v-col>
                    <v-col cols="12" sm="9" class="pa-2">
                      <v-card-title class="pa-0">{{release.title}}</v-card-title>
                      <v-card-text class="pa-0">
                        <div class="body-news-main text-justify pt-2" v-html="release.text"></div>
                        <div class="d-flex justify-space-between">
                          <div
                            class="d-flex justify-start"
                          >publicado em: {{ formateDate(release.date)}}</div>
                          <div class="d-flex justify-end">
                            <v-btn
                              outlined
                              small
                              :to="'/noticias/'+release.link"
                              color="#02aec6"
                              elevation="0"
                              dark
                            >Ler mais</v-btn>
                          </div>
                        </div>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-hover>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="5" lg="4">
          <CardRecents :baseTo="'/noticias/'" :recents="recents" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import CardRecents from '@/components/news/CardRecents'
import FormHome from '@/components/FormHome'
import moment from 'moment'

export default {
  components: {
    CardRecents,
    FormHome
  },
  methods: {
    formateDate(date) {
      return moment(String(date)).format('DD/MM/YYYY - hh:mm')
    }
  },
  computed: {
    releases() {
      return this.$store.state.news.all
    },
    base_url() {
      return this.$store.state.base_url
    },
    recents() {
      return this.$store.state.recentNews
    }
  }
}
</script>

<style scoped>
.tolbar-releases {
  border-bottom: 0.5px solid grey !important;
}

.body-news-main {
  max-height: 100px;
  overflow-y: hidden;
}
</style>