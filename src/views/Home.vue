<template>
  <div>
    <Carousel v-if="$vuetify.breakpoint.smAndUp" />
    <div class="pt-10 mt-7 pt-sm-0 ma-sm-0 d-flex justify-center">
      <FormHome :login="login" />
    </div>
    <v-divider></v-divider>
    <NewsRecentsHome class="py-10" />
    <v-divider></v-divider>
    <v-container class="px-lg-10">
      <ClinicBody />
    </v-container>
    <v-img v-if="$vuetify.breakpoint.smAndUp" height="100%" max-height="700px" width="100%" src="/img/rodape.png"></v-img>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import NewsRecentsHome from '@/components/NewsRecentsHome'
import ClinicBody from '@/components/ClinicBody'
import FormHome from '@/components/FormHome'

export default {
  data: () => ({
    login: ""
  }),
  components: {
    Carousel,
    NewsRecentsHome,
    ClinicBody,
    FormHome
  },
  computed: {
    slides() {
      return this.$store.state.slides
    }
  }
}
</script>

<style>

</style>