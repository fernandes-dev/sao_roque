<template>
  <div>
    <form id="form-contact">
      <v-row>
        <v-col cols="12" sm="6" class="py-0 pb-3">
          <v-text-field outlined dense hide-details label="Nome" name="name" v-model="contact.name"></v-text-field>
        </v-col>
        <v-col class="py-0 pb-3">
          <v-text-field
            outlined
            dense
            hide-details
            label="E-mail"
            name="email"
            v-model="contact.email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" class="py-0 pb-3">
          <v-text-field
            outlined
            dense
            hide-details
            label="Telefone"
            name="phone"
            v-model="contact.phone"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-3">
          <v-text-field
            outlined
            dense
            hide-details
            label="Assunto"
            name="subject"
            v-model="contact.subject"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-select
            outlined
            dense
            hide-details
            class="pb-3"
            name="unity"
            :items="unities"
            item-text="name"
            item-value="email"
            label="Unidade de Atendimento"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-textarea
            outlined
            label="Mensagem"
            name="message"
            v-model="contact.message"
            :rows="5"
            auto-grow
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-btn hide-details block color="primary" @click="contactUs">Enviar</v-btn>
        </v-col>
      </v-row>
    </form>
    <v-snackbar v-model="snackbar" color="white">
      <div class="black--text">{{ message }}</div>
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      contact: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      },
      message: "",
      snackbar: false,
      base_url: this.$store.state.base_url
    }
  },
  methods: {
    contactUs() {
      const form = new FormData(document.getElementById('form-contact'))
      fetch(this.base_url + "/contact-us", {
        method: 'POST',
        body: form
      })
        .then(resp => resp.text())
        .then(() => {
          this.message = "E-mail enviado com sucesso"
          this.snackbar = !this.snackbar
          this.contact = {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
          }
        })
        .catch(() => {
          this.contact = {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
          }
          this.message = "Erro, entre em contato com o suporte"
          this.snackbar = !this.snackbar
        })
    }
  },
  computed: {
    unities() {
      // console.log(this.$store.state.unities.all);
      const emails = []
      this.$store.state.unities.all.forEach(item => {
        if (item.email.length > 0)
          emails.push({ email: item.email, name: item.title })
      });
      return emails
    },
  }
}
</script>

<style>
</style>