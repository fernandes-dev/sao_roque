<template>
  <div class="footer">
    <v-footer class="d-flex justify-center" color="#003176">
      <div class="col-sm-12 col-md-6">
        <div class="d-flex justify-center mb-5 mt-5">
          <img src="/img/logo2.png" width="300px" />
        </div>
        <v-row>
          <v-img src="/img/curve.png" width="100%"></v-img>
        </v-row>
      </div>
      <v-row class="col-lg-8 col-xl-8" justify="center">
        <v-col cols="12" sm="4" lg="3" xl="2" v-for="link in links" :key="link.name">
            <div class="title-footer">
            <span class="title-footer-child">{{ link.title }}</span>
          </div>
          <v-row v-for="item in link.items.filter(value => !value.childs)" :key="item.name">
            <router-link v-if="!item.form" class="items" :to="item.url ? item.url : ''">
              <div>
                <span v-if="item.icon">
                  <v-icon color="white">{{item.icon}}</v-icon>
                </span>
                <span v-else>&rarr;</span>
                <span class="pl-2">{{item.name}}</span>
              </div>
            </router-link>
            <div v-else>
              <form id="form-news" class="pt-4">
                <v-text-field
                name="name"
                required
                hide-details
                outlined
                dense
                v-model="name"
                label="Nome"
                dark
              ></v-text-field>
                <v-text-field
                name="email"
                required
                class="my-2"
                hide-details
                outlined
                dense
                v-model="email"
                label="E-mail"
                dark
              ></v-text-field>
              <v-btn @click="registerEmail()" elevation="0" small block color="#6ed0cf">Enviar</v-btn>
              </form>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
    <v-row class="copy">
      <div class="copy-text">{{copy}}</div>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      color="white"
    >
      <div class="black--text">{{ message }}</div>
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      snackbar: false,
      base_url: this.$store.state.base_url,
      name: "",
      email: "",
      logo: '/img/favicon-white.svg',
      links: [
        {
          items: this.$store.state.menu,
          title: 'GUIA DA PÁGINA',
        },
        {
          items: [
            {icon: 'mdi-email-outline',name: 'Cadastre seu e-mail e receba as notícias periodicamente', url: ''},
            {form: true}
          ],
          title: 'FIQUE POR DENTRO',
        },
        {
          items: [
            { icon: 'mdi-google-maps', name: 'Av. das Embaúbas, 2562, Jardim Maringá, Sinop-MT, CEP 78556-270', url: 'fale-conosco' },
            { icon: 'mdi-phone-in-talk', name: '(66) 3211-6336' },
          ],
          title: 'ATENDIMENTO',
        }
      ],
      phone: '(66) 3517 2300',
      copy: '© 2020 São Roque Medicina - Todos os direitos reservados.'
    }
  },
  methods: {
    registerEmail(){
      if (this.name.length > 5 && this.email.length > 5) {
        const form = new FormData(document.getElementById('form-news'))
        fetch(this.base_url+"/receive-news", {
          method: 'POST',
          body: form
        })
        .then(resp => resp.json())
        .then(resp => {
          this.message = resp.message
          this.snackbar = !this.snackbar
        })
        .catch(() => {
          this.message = "Preencha os campos corretamente"
          this.snackbar = !this.snackbar
        })
      } else {
        this.message = "Preencha os campos corretamente"
        this.snackbar = !this.snackbar
      }
    }
  }
}
</script>

<style>
.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin: 0 !important;
  
}
/* .v-input__slot {
  max-height: 30px;
  min-height: 0px !important;
} */
.title-footer {
  margin-right: 5%;
  margin-bottom: 10px;
  border-bottom: 1px solid grey;
  font-size: 18px;
  font-weight: bold;
  color: white;
}

.title-footer-child {
  border-bottom: solid 2px white;
  padding-bottom: 2px;
}

.items {
  text-decoration: none !important;
  font-size: 14px;
  margin-left: 10px;
  margin-right: 30px;
  color: white !important;
}


.copy {
  display: flex;
  justify-content: center;
  height: 65px;
  background-color: #373e4c;
}

.copy-text {
  padding: 10px;
  margin: 10px;
  font-size: 0.8rem;
  color: white;
}

body {
  overflow: hidden !important;
}
</style>