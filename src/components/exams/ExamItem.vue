<template>
  <div v-if="exam && exam.title" class="pt-7 pt-md-0">
    <v-row justify="start" class="pt-10 pt-md-0">
      <FormHome />
    </v-row>
    <v-container>
      <h1 class="px-5 pt-5 title-top">{{exam.title}}</h1>
      <v-card elevation="0">
        <!-- <v-card-title></v-card-title> -->
        <v-card outlined class="float-sm-left ma-5">
          <v-img max-width="350px" :src="base_url+exam.img"></v-img>
        </v-card>
        <v-card-text v-html="exam.text" class="text-justify"></v-card-text>
      </v-card>
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
    this.$store.dispatch("exams/request", {
      state: "item",
      method: "POST",
      url: "/exam/"+this.$route.params.link
    });
  },
  data: function () {
    return {
      base_url: this.$store.state.base_url
    }
  },
  computed: {
    exam() {
      return this.$store.state.exams.item
    }
  }
}
</script>

<style>

</style>