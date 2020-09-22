<template>
  <v-card max-height="495px" class="card-doctor" elevation="0">
    <v-hover v-slot:default="{ hover }">
      <div>
        <v-img v-if="doctor.img" height="280px" :src="base_url+doctor.img">
          <v-expand-transition v-if="doctor.facebook || doctor.instagram">
            <div
              v-if="hover"
              class="d-flex primary v-card--reveal white--text"
              style="height: 100%;"
            >
              <v-btn
                v-if="doctor.facebook"
                icon
                class="ma-2"
                target="blank"
                :href="doctor.facebook"
              >
                <v-icon class="social-web" size="40px">mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                v-if="doctor.instagram"
                icon
                class="ma-2"
                target="blank"
                :href="doctor.twitter"
              >
                <v-icon class="social-web" size="40px">mdi-instagram</v-icon>
              </v-btn>
            </div>
          </v-expand-transition>
        </v-img>
      </div>
    </v-hover>
    <v-card-title class="name-doctor" v-if="doctor.name">{{doctor.name}}</v-card-title>
    <v-card-subtitle class="title-doctor" v-if="doctor.cargo" v-html="doctor.cargo"></v-card-subtitle>

    <v-card-actions class="d-flex justify-end pb-0">
      <v-btn
        absolute
        bottom
        class="view-profile"
        elevation="0"
        small
        color="primary"
        outlined
        @click="goProfile(doctor)"
      >Ver perfil</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardDoctor',
  props: {
    doctor: Object,
    toggle: Function
  },
  computed: {
    base_url() {
      return this.$store.state.base_url
    }
  },
  methods: {
    goProfile(doctor) {
      this.$store.commit("doctor", doctor);
      this.$store.dispatch("request", {
        state: "doctor",
        method: "POST",
        url: "body-clinic/" + doctor.link
      });
      this.$router.push('perfil/' + doctor.link)
    }
  }
}
</script>

<style scoped>
.hover-card:hover {
  cursor: default;
}

.social-web {
  color: white !important;
  margin: 5px;
}

.social-web:hover {
  cursor: pointer;
}

.v-card--reveal {
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  width: 100%;
}

.name-doctor {
  font-size: 1rem;
  font-weight: bold;
  color: #217b43;
  padding: 5px 10px;
}

.title-doctor {
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0 10px;
  margin-top: -4px;
}

.descrip-doctor {
  height: 80px;
  overflow: hidden;
  font-size: 0.8rem;
  padding: 0 10px;
  margin-top: 12px;
}

.view-profile {
  text-transform: none !important;
  padding: 4px !important;
  font-size: 0.9rem;
}

.card-doctor {
  width: calc(100% - 16px);
  height: 100%;
}
</style>