<template>
  <div class="pt-7 pt-md-0">
    <v-row justify="start" class="pt-10 pt-md-0">
      <FormHome />
    </v-row>
    <v-container>
      <v-row justify="center">
        <div class="title-top-exams pt-8 pb-4">Exames</div>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" class="pa-0">
          <v-text-field v-model="filtered" dense outlined label="Pesquisar"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-expansion-panels focusable class="pb-10">
          <v-expansion-panel v-for="(item,i) in examsFiltered" :key="i">
            <v-expansion-panel-header>
              <v-row class="card-title-tips">
                <v-col col="1">
                  <div class="hash-exams">#{{i+1}}</div>
                </v-col>
                <v-col cols="11">
                  <div class="title-exam" v-html="item.title"></div>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
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
    FormHome,
  },
  data: () => ({
    filtered: ""
  }),
  computed: {
    exams() {
      return this.$store.state.exams.all
    },
    base_url() {
      return this.$store.state.base_url
    },
    examsFiltered() {
      if (this.exams.length > 0)
        return this.exams.filter(post => {
          return post.title.toLowerCase().includes(this.filtered.toLowerCase())
        })
      return this.$store.state.exams.all
    }
  },
  methods: {
    changeView(exam) {
      this.examItem = exam
      this.viewedOrigin = !this.viewedOrigin;
    },
    goExam(exam) {
      this.$store.dispatch("exams/request", {
        state: "item",
        method: "POST",
        url: "/exam/" + exam.link
      });
      this.$router.push('/exames/' + exam.link)
    }
  }
}
</script>

<style>
.card-exam::after {
  display: block;
  content: "";
  height: 4px;
  background-color: var(--v-primary-base);
}

.hash-exams {
  font-weight: bold;
  color: var(--v-primary-base);
}

.title-exam {
  font-size: 1rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.699);
  letter-spacing: 0.5px;
}

.title-top-exams {
  font-size: 1.7rem;
  border-bottom: solid 3px var(--v-primary-base);
  margin-bottom: 50px;
}
</style>