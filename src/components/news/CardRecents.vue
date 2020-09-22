<template>
  <v-card outlined>
    <v-card-title class="title-recents">
      São Roque - Notícias Recentes
    </v-card-title>
    <v-row>
      <v-card-text v-for="(item, i) in recents" :key="i" class="py-0">
        <v-hover v-if="item && item.title" v-slot:default="{ hover }">
          <v-card class=" my-1 px-2" :elevation="hover ? 12 : 0" :to="baseTo+item.link">
            <v-row justify="start">
              <v-col cols="4" sm="2" md="4">
                <v-img max-width="150px" max-height="150px" width="100%" :src="base_url+item.img"></v-img>
              </v-col>
              <v-col cols="7" sm="7" class="pa-0 text-recents py-0">
                <v-card-title class="pa-0 pt-2 release-title">{{item.title}}</v-card-title>
                <v-card-text class="pa-0" v-html="item.text"></v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-card-text>
    </v-row>
    <v-row justify="end" class="px-7">
      <v-btn class="mb-5 mt-5" outlined block small v-if="btnViewMore" color="blue" to="/noticias">Ver mais</v-btn>
    </v-row>
  </v-card>
</template>

<script>

export default {
  props: {
    recents: Array,
    btnViewMore: Boolean,
    baseTo: String
  },
  computed: {
    base_url() {
      return this.$store.state.base_url
    }
  },
}
</script>

<style scoped>
.title-recents {
  background-color: #02aec6;
  padding: 10px 0 10px 14px;
  margin-bottom: 15px;
  color: white;
}

.text-recents {
  padding-top: 10px;
  max-height: 80px;
  overflow: hidden;
}

.release-title {
  max-height: 70px;
  padding: 0px;
  font-size: 0.9rem;
  overflow: hidden;
}

.release-text {
  font-size: 0.8rem;
  overflow: hidden;
}

.card-recents {
  max-height: 100px;
}
</style>