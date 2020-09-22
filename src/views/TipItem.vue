<template>
  <div class="pt-7 pt-md-0 px-6">
    <v-row justify="start" class="pt-10 pt-md-0">
      <FormHome />
    </v-row>
    <v-container class="mb-10">
      <v-row>
        <h1 class="title-top pt-8 pb-4">{{tip.title}}</h1>
      </v-row>
      <v-row>
        <div v-html="tip.text"></div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FormHome from '@/components/FormHome'

export default {
  components: {
    FormHome
  },
  mounted() {
    this.$store.dispatch("request", {
      state: 'tipItem',
      method: "POST",
      url: '/tips/' + this.$route.params.link
    });
  },
  computed: {
    tip() {
      return this.$store.state.tipItem
    }
  }
}
</script>

<style>
</style>