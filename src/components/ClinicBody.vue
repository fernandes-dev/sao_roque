<template>
  <v-sheet >
    <v-row class="d-flex justify-center">
      <v-col  class="d-flex justify-center">
        <h1 class="mb-4 mt-10"><b>Corpo Clínico</b></h1>
      </v-col>
    </v-row>
    <v-slide-group class="px-sm-8 simple-slide d-flex justify-center" show-arrows>
      <v-slide-item
        class="mx-2 pb-10"
        v-for="(doctor, i) in doctors"
        :key="i"
        
      >
        <CardDoctor  :doctor="doctor" />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>


<script>

import CardDoctor from '@/components/CardDoctor'

export default {
  name: 'ClinicBody',
  components: {
    CardDoctor
  },
  data() {
    return {
      model: null,
    }
  },
  props: {
    title: String
  },
  computed: {
    doctors() {
      return this.$store.state.clinicBody
    }
  }
}
</script>

<style scoped>
.center-especiality {
  font-size: 1.9rem;
  margin-bottom: 20px;
  margin-top: 40px;
  padding: 0 80px;
}
</style>