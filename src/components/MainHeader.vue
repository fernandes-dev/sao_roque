<template>
  <div :class="{'header': !$vuetify.breakpoint.smAndDown}">
    <v-app-bar
      fixed
      class="menu-bar pb-10"
      :class="{'bar-top': !$vuetify.breakpoint.smAndDown}"
      height="70px"
      color="white"
    >
      <v-toolbar-title class="col-10 col-sm-10 col-md-2 col-lg-3">
        <router-link class="mx-auto mx-md-0 logo-content" to="/">
          <img class="logo" :src="logo" width="250px" />
        </router-link>
      </v-toolbar-title>
      <div v-if="!$vuetify.breakpoint.smAndDown" class="pl-sm-8 d-flex justify-center">
        <div v-for="(item, i) in menu" :key="i">
          <v-btn
            elevation="0"
            small
            v-if="!item.img && !item.childs"
            :to="item.url"
            v-on="on"
            class="button-menu-bar"
            active-class="primary"
          >{{item.name}}</v-btn>
          <v-menu open-on-hover v-else offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                elevation="0"
                small
                class="button-menu-bar"
                active-class="primary"
                v-on="on"
              >{{item.name}}</v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in item.childs" :key="i">
                <v-list-item-title :to="item.url">
                  <v-btn
                    elevation="0"
                    small
                    class="button-menu-bar ma-0"
                    active-class="primary"
                    v-on="on"
                  >{{ item.name }}</v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-app-bar v-if="!$vuetify.breakpoint.smAndDown" fixed flat color="#003176" height="40px">
      <v-row class="white--text">
        <v-col cols="auto" sm="4" class="d-flex justify-center">
          <h5 class="d-flex justify-center">São Roque Medicina Diagnóstica</h5>
        </v-col>
        <v-col v-if="!$vuetify.breakpoint.smAndDown" cols="12" md="8">
          <v-row justify="end">
            <v-divider color="#7a91b0" class="mx-2" vertical></v-divider>
            <v-btn color="white" x-small text target="blank" href="tel:6632116336">
              <v-icon class="pr-1" small color="white">mdi-phone</v-icon>66 3211-6336
            </v-btn>
            <v-divider color="#7a91b0" class="mx-2" vertical></v-divider>
            <v-btn
              color="white"
              x-small
              text
              target="blank"
              href="mailto:contato@medisaoroque.com.br"
            >
              <v-icon class="pr-1" small color="white">mdi-email-outline</v-icon>contato@medisaoroque.com.br
            </v-btn>
            <v-divider color="#7a91b0" class="mx-2" vertical></v-divider>
            <v-btn x-small icon target="blank" href="https://www.facebook.com/saoroquemd/">
              <v-icon small color="white">mdi-facebook</v-icon>
            </v-btn>
            <v-divider color="#7a91b0" class="mx-2" vertical></v-divider>
            <v-btn x-small icon target="blank" href="https://www.instagram.com/saoroquemd/">
              <v-icon small color="white">mdi-instagram</v-icon>
            </v-btn>
            <v-divider color="#7a91b0" class="mx-2" vertical></v-divider>
            <v-btn x-small icon :to="'/fale-conosco'">
              <v-icon small color="white">mdi-map-marker</v-icon>
            </v-btn>
            <v-divider color="#7a91b0" class="mx-2" vertical></v-divider>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-subheader class="mb-6">
        <div class="d-flex justify-start">MENU</div>
      </v-subheader>
      <v-list-item-group v-for="(route, i) in menu" :key="i" v-model="current">
        <router-link v-if="!route.childs" class="link-menu-app" :to="route.url">
          <v-list-item>
            <v-list-item-title>{{ route.name }}</v-list-item-title>
          </v-list-item>
        </router-link>
        <!-- <v-list-group > -->
        <!-- <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{route.name}}</v-list-item-title>
            </v-list-item-content>
        </template>-->
        <v-list-item v-else v-for="(admin, i) in route.childs" :key="i" :to="admin.url">
          <v-list-item-title>{{admin.name}}</v-list-item-title>
        </v-list-item>
        <!-- </v-list-group> -->
      </v-list-item-group>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      on: null,
      logo: '/img/logo.png',
      icone: '/img/icone2.png',
      drawer: false,
      menu: this.$store.state.menu
    }
  },
  computed: {
    current: {
      get() {
        return this.$route.url
      },
      set() {

      }
    }
  }
}
</script>

<style>
.header {
  padding-bottom: 110px;
}
.button-menu-bar {
  background-color: transparent !important;
  text-transform: none !important;
}

.bar-top {
  margin-top: 40px !important;
}
.active {
  color: white !important;
  background-color: #02aec6 !important;
}

.icon-40 {
  margin-left: 10px;
  margin-top: 10px;
}

.overflow-hidden {
  padding-bottom: 80px;
}

.logo {
  padding: 45px;
}

@media (min-width: 765px) {
  .logo-content {
    display: flex;
    justify-content: center;
  }
}

.itemm {
  padding-right: 40px !important;
}

.list-item {
  padding-left: 20px !important;
}

.item-template {
  padding-left: 0px !important;
}

.link-menu-app {
  text-decoration: none !important;
  color: rgb(34, 34, 34) !important;
}
</style>