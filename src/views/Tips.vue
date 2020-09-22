<template>
  <div class="pt-7 pt-md-0" v-if="tips && tips.length > 0">
    <v-row justify="start" class="pt-10 pt-md-0">
      <FormHome />
    </v-row>
    <v-container class="mb-10">
      <v-row justify="center">
        <div class="title-top-tips pt-8 pb-4">Dicas de Coleta</div>
      </v-row>
      <v-row class="mb-3 px-2" justify="center" v-for="(item, i) in tips" :key="i">
        <v-hover v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 4 : 0"
            class="col-12 col-md-10 col-lg-8 py-0"
            outlined
            width="100%"
            @click="goTip(item)"
          >
            <v-row class="card-title-tips">
              <v-col col="1" class="py-3 px-1 px-sm-5">
                <div class="hash-tips">#{{i+1}}</div>
              </v-col>
              <v-col cols="10" class="px-0 py-3">
                <div v-html="item.title"></div>
              </v-col>
              <v-col cols="1" class="px-0 py-3 px-sm-5">
                <v-icon>mdi-open-in-new</v-icon>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-row>
      <v-row class="px-5"></v-row>
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
    tips() {
      return this.$store.state.tips
    }
  },
  methods: {
    goTip(item) {
      this.$store.commit("insertTip", item)
      this.$router.push({ path: '/dicas/' + item.link })
    }
  }
}
</script>

<style>
.title-top-tips {
  font-size: 1.7rem;
  border-bottom: solid 3px var(--v-primary-base);
  margin-bottom: 50px;
}

.card-title-tips {
  font-weight: bold;
  color: rgb(70, 70, 70);
  font-size: 1.1rem;
}

.hash-tips {
  color: var(--v-primary-base);
}
</style>