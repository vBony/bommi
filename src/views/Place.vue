<template>
    <v-app>
        <v-container class="d-flex justify-center px-4 py-4" fluid>
            <v-sheet class="pa-6 mt-12" width="100%" max-width="1250" elevation="0" color="transparent">
                <v-row no-gutters>
                    <v-col cols="12" class="d-flex align-center justify-space-between">
                        <div class="d-flex align-center">
                            <v-img class="rounded-circle me-5" width="100" height="100" aspect-ratio="1/1" cover
                                src="https://picsum.photos/200/300"></v-img>
                            <h1 class="text-h4 font-weight-bold">Barbearia do Seu Zé</h1>
                        </div>
                    </v-col>

                    <v-col cols="12" class="mt-3">
                        <v-tabs v-model="tab" bg-color="transparent">
                            <v-tab value="1">Serviços</v-tab>
                            <v-tab value="2">Informações</v-tab>
                            <v-tab value="3">Postagens</v-tab>
                        </v-tabs>
                    </v-col>

                    <v-col cols="12" class="mt-4">
                        <v-window v-model="tab">
                            <v-window-item value="1" class="py-10">
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field label="Buscar Serviço" variant="outlined" type="search"
                                            hide-details="auto" single-line prepend-inner-icon="mdi-magnify" clearable>
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12">
                                        <h2 class="text-h5 font-weight-bold">Corte masculino</h2>
                                    </v-col>

                                    <v-col cols="12" lg="4" md="6" sm="12">
                                        <v-card class="pa-4" style="cursor: pointer !important;" color="grey-lighten-5"
                                            elevation="1" @click="openServiceDialog()">
                                            <p class="text-medium-emphasis font-weight-bold mb-2 text-truncate">Barba +
                                                Corte com Tesoura Barba</p>
                                            <p class="text-disabled text-body-2 card-desc-truncate">
                                                Serviço completo com corte de cabelo feito na tesoura
                                                e barba modelada. Ideal para quem busca um visual
                                                moderno com acabamento profissional.
                                            </p>
                                            <p class="font-weight-bold mt-2">R$ 99,99</p>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-window-item>

                            <v-window-item value="2" class="py-10">
                                <v-row>
                                    <v-col cols="12">
                                        <h2 class="text-h6 font-weight-bold">
                                            Categoria
                                        </h2>
                                        <p>Salão de beleza</p>
                                    </v-col>

                                    <v-col cols="12">
                                        <h2 class="text-h6 font-weight-bold">Informações de contato</h2>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1136.2563016606873!2d-49.237878258756844!3d-16.68211676992657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef19bb8487ca3%3A0x5b6a52f7d9718e23!2sResidencial%20Gran%20Royale!5e0!3m2!1sen!2sbr!4v1744495408913!5m2!1sen!2sbr"
                                            width="100%" height="250" style="border:0;" allowfullscreen="false"
                                            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                        </iframe>

                                        <div class="mt-4">
                                            <div class="d-flex align-center">
                                                <v-icon size="x-large" class="me-2">mdi-store-marker</v-icon>
                                                <p>Rua 238, S/N, Qd. 34, Lt. 16 Apto. 204 Residencial Délio, Setor Leste
                                                    Universitário, Goiânia-GO, CEP: 74.603-180</p>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <div class="d-flex align-center">
                                                <v-icon size="x-large" class="me-2">mdi-phone</v-icon>
                                                <p>(62) 99611-4399</p>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-window-item>

                            <v-window-item value="3">
                                Three
                            </v-window-item>
                        </v-window>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-container>





        <!-- DIALOGS -->
        <v-dialog v-model="serviceDialog" width="auto">
            <v-card max-width="800">
                <v-card-text class="pa-6">
                    <v-row>
                        <v-col cols="12">
                            <h6 class="text-h5">Barba + Corte com Tesoura Barba</h6>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <p class="text-medium-emphasis">
                                Serviço completo com corte de cabelo feito na tesoura
                                e barba modelada. Ideal para quem busca um visual
                                moderno com acabamento profissional.
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <p class="font-weight-bold mt-2">R$ 99,99</p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <label class="text-subtitle-1">Alguma observação?</label>
                            <v-textarea 
                                label="Adicione alguma informação que considere importante." 
                                variant="outlined"
                                hide-details="auto"
                                density="compact"
                                single-line
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn 
                        class="ms-auto px-4" 
                        @click="serviceDialog = false" 
                        color="primary"
                        variant="tonal"
                    >
                        Adicionar

                        <b class="ms-4">R$99,99</b>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<style scoped>
.card-desc-truncate {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

  
<script lang='ts'>
// @ts-nocheck
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'
import req from '@/helpers/http'

const App = defineComponent({
components: {
    HelloWorld
},

data() {
    return {
        serviceDialog: false,
        tab: "1",

        slugName: null,
        place: {}
    };
},
methods: {
    openServiceDialog() {
        this.serviceDialog = true
    },

    init(){
        req.get(`api/place/slug/${this.slugName}`)
        .then((res) => {
            this.place = res.data

            console.log(this.place)
        })
        .catch((err) => {})

    }
},

created() {
    this.slugName = this.$route.params.nomeEstabelecimento
    this.init()
}

});

export default App
</script>
  