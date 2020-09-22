<template>
  <v-app>
    <main-header />
    <v-content>
      <router-view></router-view>
    </v-content>
    <main-footer />
  </v-app>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import MainFooter from '@/components/MainFooter';

export default {

  mounted() {
    this.execRequest("request", "slides", "slides")

    this.execRequest("news/request", "all", "news")

    this.execRequest("unities/request", "all", "unities")

    this.execRequest("exams/request", "all", "exams")

    this.execRequest("request", "recentNews", "news")

    this.execRequest("request", "clinicBody", "body-clinic")

    this.execRequest("request", "certifications", "certifications")

    this.execRequest("request", "about", "about")

    this.execRequest("request", "tips", "all-tips")

    this.execRequest("request", "doubts", "all-doubts")

  },
  components: {
    MainHeader,
    MainFooter
  },
  methods: {
    execRequest(action, state, url) {
      // console.log('ExecRequest ' + state + url)
      this.$store.dispatch(action, {
        state: state,
        method: "POST",
        url: url
      });
      // console.log(this.$store.state)
    }
  }
};
</script>

<style>
.title-top::after {
  content: "";
  display: block;
  height: 3px;
  width: 150px;
  margin-bottom: 20px;
  background-color: var(--v-primary-base);
}

@font-face {
  font-family: AdgetSans;
  src: url("./fonts/adget-sans.ttf");
}
html {
  font-size: 16px;
}
main {
  font-size: 0.875rrem;
  letter-spacing: 0.25px;
}
h1 {
  font-size: 3rrem;
  font-weight: normal;
  letter-spacing: 0px;
}

h2 {
  font-family: Roboto;
  font-size: 2.125rrem;
  font-weight: normal;
  letter-spacing: 0.25px;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
}
h3 {
  /* font-family: AdgetSans, Roboto, sans-serif; */
  font-size: 1.5rrem;
  font-weight: normal;
  letter-spacing: 0px;
  margin-bottom: 12px;
}
h3::after {
  content: "";
  display: block;
  height: 2px;
  width: 80px;
}
h4 {
  font-size: 1.25rrem;
  font-weight: medium;
  letter-spacing: 0.15px;
}
h5 {
  font-size: 1rrem;
  font-weight: normal;
  letter-spacing: 0.15px;
}
h6 {
  font-size: 0.875rrem;
  font-weight: medium;
  letter-spacing: 0.1px;
}
.v-carousel .fas.fa-chevron-left,
.v-carousel .fas.fa-chevron-right {
  font-size: 26px !important;
}
.v-expansion-panels .fas.fa-chevron-up,
.v-expansion-panels .fas.fa-chevron-down {
  font-size: 18px !important;
}

.simple-slide .v-slide-group__content {
  display: grid;
  grid-auto-flow: column;
  display: grid;
  grid-auto-flow: column;
  padding: 5px;
  grid-auto-columns: calc(100vw - 131px);
}

@media screen and (min-width: 600.001px) and (max-width: 960px) {
  .simple-slide .v-slide-group__content {
    grid-auto-columns: calc((100vw - 200px) / 2);
  }
}
@media screen and (min-width: 960.001px) and (max-width: 1264px) {
  .simple-slide .v-slide-group__content {
    grid-auto-columns: calc((900px - 200px) / 3);
  }
}
@media screen and (min-width: 1264.001px) {
  .simple-slide .v-slide-group__content {
    grid-auto-columns: calc((1185px - 240px) / 3);
  }
}
</style>
