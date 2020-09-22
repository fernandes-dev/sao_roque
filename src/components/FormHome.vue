<template>
  <v-row justify="center" class="row-form-home">
    <v-card  class="row-form-home" elevation="0" >
      <v-row justify="center">
        <v-col cols="10" sm="9" md="4" lg="3" class="pt-sm-1 py-md-7">
          <h1 class="title-form-home">Resultado de Exames</h1>
          <h5>
            Informe seu código de login e senha nos campos abaixo para acessar
            a área do Resultados de Exames
          </h5>
        </v-col>
        <v-col cols="10" sm="6" md="3" class="px-sm-10 d-flex flex-column justify-center">
          <form target="_blank" method="POST" action="http://187.72.199.28/csp/saoroque/MV.FC.cls?w3exec=WLR000">
            <input type="hidden" name="W3SERVERPOOL" value="cetan">
            <input type="hidden" name="W3EXEC" value="WLR000">
            <input type="hidden" name="w3Retries" value="1" >
            <v-text-field
            name="w3User"
            dark
            color="primary"
            dense
            outlined
            hide-details
            v-model="loginInside"
            label="Login"
            required
            class="pb-2"
            ></v-text-field>
            <v-text-field
            name="w3UserPass"
            dark
            color="primary"
            :type="showPass ? 'text': 'password'"
            dense
            outlined
            hide-details
            :append-icon="!showPass ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPass = !showPass"
            v-model="passwordInside"
            label="Senha"
            required
            ></v-text-field>
            <v-btn type="submit" color="#6ed0cf" block small elevation="0" class="my-2 mb-0">Entrar</v-btn>       
          </form>
        </v-col>
        <v-col cols="10" sm="4" md="2" class="d-flex flex-column justify-center">
          <h5>
            Não forneça seu código e senha de acesso à nenhuma pessoa não
            autorizada
          </h5>
        </v-col>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
export default {
  props: {
    login: String,
    password: String
  },
  data: function() {
    return {
      showPass: false,
      loginInside: this.login,
      passwordInside: this.password
    }
  }
}
</script>

<style>

.row-form-home {
  background-color: #003176 !important;
  color: white !important;
}

.title-form-home {
  font-weight: bold;
}

/* .v-input__slot {
  max-height: 30px !important;
} */

</style>