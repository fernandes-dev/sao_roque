<template>
  <v-dialog transition="dialog-bottom-transition" fullscreen hide-overlay @click:outside="changeViewed" v-if="exam && exam.title" v-model="viewed" max-width="1000px">
    <v-card width="100%">
      <!-- <v-btn
        class="pa-0"
        fab
        right
        absolute
        elevation="0"
        small
        color="transparent"
        dark
        @click="changeViewed"
      >
        <v-icon class="pa-0" color="red">mdi-close</v-icon>
      </v-btn> -->
      <v-app-bar fixed color="primary">
        <v-toolbar elevation="0" fixed dark color="primary">
        <v-toolbar-title>Exame</v-toolbar-title>
          <v-btn right absolute icon dark @click="changeViewed">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      </v-app-bar>
      <v-container>
        <v-card-title class="d-flex justify-center pb-0">{{exam.title}}</v-card-title>
        <v-row justify="center" class="pa-6">
          <v-img max-height="250px" :src="base_url+exam.img"></v-img>
        </v-row>
        <v-card-text class="text-justify" v-html="exam.text"></v-card-text>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: function() {
    return {
      base_url: this.$store.state.base_url
    }
  },
  props: {
    viewed: Boolean,
    exam: Object,
  },
  methods: {
    changeViewed() {
      this.$emit("changeViewed");
    },
  },
};
</script>

<style>
</style>