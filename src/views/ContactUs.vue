<template>
  <div class="pt-7 pt-md-0">
    <v-row justify="start" class="pt-10 pt-md-0">
      <FormHome />
    </v-row>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <div class="d-flex justify-center primary--text pt-10 pb-8">
            <h1>Fale Conosco</h1>
          </div>
          <v-row justify="space-between">
            <v-col cols="12" sm="6">
              <Localization />
            </v-col>
            <v-col cols="12" sm="6">
              <FormContact />
              <div id="midias">
                <v-row class="col" justify="center">
                  <v-btn large text target="blank" href="tel:6632116336">
                    <v-icon class="mr-2" color="primary">mdi-phone</v-icon>
                    <div>66 3211-6336</div>
                  </v-btn>
                  <v-btn large text target="blank" href="mailto:contato@medisaoroque.com.br">
                    <v-icon class="mr-2" color="primary">mdi-email-outline</v-icon>
                    <div>contato@medisaoroque.com.br</div>
                  </v-btn>
                  <v-btn large text target="blank" href="https://www.instagram.com/saoroquemd/">
                    <v-icon class="mr-2" color="primary">mdi-instagram</v-icon>
                    <div>@saoroquemd</div>
                  </v-btn>
                  <v-btn large text target="blank" href="https://www.facebook.com/saoroquemd/">
                    <v-icon class="mr-2" color="primary">mdi-facebook</v-icon>
                    <div>@saoroquemd</div>
                  </v-btn>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-row class="pt-10" justify="center"></v-row>
  </div>
</template>

<script>
import FormHome from '@/components/FormHome';
import Localization from '@/components/Localization';
import FormContact from '@/components/FormContact';

export default {
  components: {
    Localization,
    FormHome,
    FormContact
  },
  data: () => ({

  })
}
</script>

<style>
</style>