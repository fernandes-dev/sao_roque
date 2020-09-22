<template>
  <div class="pt-7 pt-md-0" v-if="doubts && doubts.length > 0">
    <v-row justify="start" class="pt-10 pt-md-0">
      <FormHome />
    </v-row>
    <v-container>
      <v-row>
        <h1 class="pl-8 title-top pt-8 pb-4">Dúvidas Frequentes</h1>
      </v-row>
      <v-row class="px-5">
        <v-expansion-panels focusable class="pb-10">
          <v-expansion-panel v-for="(item,i) in doubts" :key="i">
            <v-expansion-panel-header>{{i+1}} - {{item.title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pa-5 text-justify" v-html="item.text"></v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
  computed: {
    doubts() {
      return this.$store.state.doubts
    }
  }
}
</script>

<style>
</style>