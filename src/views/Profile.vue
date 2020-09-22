<template>
  <div class="pt-7 pt-md-0">
    <v-row justify="start" class="pt-10 pt-md-0">
      <FormHome />
    </v-row>
    <v-container  v-if="profile && profile.name" class="pt-10 mt-10">
      <v-card outlined height="100%" class="pa-5">
        <v-row justify="start" class="px-2">
          <v-col cols="12">
            <v-img class="float-sm-left mr-5 mb-5" max-height="250px" width="300px" :src="base_url+profile.img">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-row>
              <h1 class="title-top pb-0">{{profile.name}}</h1>
            </v-row>
            <h3 class="pt-0">{{profile.cargo}}</h3>
            <div class="text-justify" v-html="profile.text"></div>
          </v-col>
        </v-row>
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
    this.$store.dispatch("request", {
      state: "doctor",
      method: "POST",
      url: "body-clinic/" + this.$route.params.link
    });
  },
  data: function() {
    return {
      base_url: this.$store.state.base_url
    }
  },
  computed: {
    profile() {
      return this.$store.state.doctor
    }
  }
}
</script>

<style scoped>

</style>>