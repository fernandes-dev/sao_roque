<template>
  <v-carousel height="450"  show-arrows >
    <div class="div-superior">
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="base_url+slide.img" width="100%"></v-carousel-item>
    </div>
    
  </v-carousel>
</template>

<script>
export default {
  computed: {
    slides() {
      return this.$store.state.slides
    },
    base_url() {
      return this.$store.state.base_url
    }
  }
}
</script>

<style>
</style>