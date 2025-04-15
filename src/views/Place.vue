<template>
    <v-app>
        <v-container class="d-flex justify-center px-4 py-4" fluid>
            <v-sheet class="pa-6 mt-12" width="100%" max-width="1250" elevation="0" color="transparent">
                <v-row no-gutters>
                    <v-col cols="12" class="d-flex align-center justify-space-between">
                        <div class="d-flex align-center">
                            <v-img class="rounded-circle me-5" width="100" height="100" aspect-ratio="1/1" cover
                                src="https://picsum.photos/200/300"></v-img>
                            <h1 class="text-h4 font-weight-bold">{{ place.name }}</h1>
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
                                
                                <v-row 
                                    v-for="(category, index) in place.categories" 
                                    v-bind:key="index"
                                >
                                    <v-col cols="12">
                                        <h2 class="text-h5 font-weight-bold">{{ category.name }}</h2>
                                    </v-col>

                                    <v-col cols="12" lg="4" md="6" sm="12" v-for="(service, indexService) in category.services" v-bind:key="indexService">
                                        <v-card class="pa-4" style="cursor: pointer !important;" color="grey-lighten-5"
                                            elevation="1" @click="openServiceDialog(service)">
                                            <p class="text-medium-emphasis font-weight-bold mb-2 text-truncate">
                                                {{ service.name }}
                                            </p>
                                            <p class="text-disabled text-body-2 card-desc-truncate">
                                                {{ service.description }}
                                            </p>
                                            <p class="font-weight-bold mt-2">R$ {{ service.price }}</p>
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
                                        <p>{{ place.categoryPlace.name }}</p>
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

                                                <p>
                                                    {{ place.address.district }}, {{ place.address.number }}, {{ place.address.complement }}, {{ place.address.city }} - {{ place.address.uf }}, CEP: {{ place.address.cep }}
                                                </p>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <div class="d-flex align-center">
                                                <v-icon size="x-large" class="me-2">mdi-phone</v-icon>
                                                <p>{{ place.phoneNumber }}</p>
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

            <v-slide-y-transition>
                <div
                    v-if="servicesOnCart.length > 0"
                    class="pa-2"
                    style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 1000; width: 100%; max-width: 400px;"
                >
                    <v-card class="bg-primary rounded-lg pa-3 d-flex align-center justify-space-between" elevation="16">
                        <div>
                            Serviços selecionados: {{ servicesOnCart.length }}
                        </div>
                        <div class="ms-auto">
                            <v-btn @click="openScheduleDialog()">Agendar</v-btn>
                        </div>
                    </v-card>
                </div>
            </v-slide-y-transition>
        </v-container>





        <!-- DIALOGS -->
        <v-dialog v-model="serviceDialog" width="auto">
            <v-card max-width="800" min-width="800">
                <v-card-text class="pa-6">
                    <v-row>
                        <v-col cols="12">
                            <h6 class="text-h5 font-weight-bold">{{ service.name }}</h6>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <p class="text-medium-emphasis">
                                {{ service.description }}
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <p class="font-weight-bold mt-2">
                                <v-icon class="me-1">mdi-clock-outline</v-icon>
                                Duração:  {{ service.duration }}
                            </p>
                            <p class="font-weight-bold mt-2">
                                <v-icon class="me-1">mdi-cash</v-icon>
                                R$ {{ service.price }}
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <label class="text-subtitle-1">Alguma observação?</label>
                            <v-textarea 
                                v-model="service.note"
                                label="Adicione alguma informação que considere importante." 
                                variant="outlined"
                                hide-details="auto"
                                density="compact"
                                single-line
                                :disabled="blockBtnAddServiceDialog"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn 
                        v-if="blockBtnAddServiceDialog == false"
                        class="ms-auto px-4" 
                        @click="addServiceToCart()" 
                        color="primary"
                        variant="tonal"
                    >
                        Adicionar

                        <b class="ms-4">R${{ service.price }}</b>
                    </v-btn>

                    <v-btn 
                        v-else
                        class="ms-auto px-4" 
                        color="primary"
                        variant="tonal"
                        disabled
                        prepend-icon="mdi-check-bold"
                    >
                        Adicionado
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="toScheduleDialog" width="auto">
            <v-card max-width="800" min-width="800" class="pa-4">
                <v-card-title>
                    <v-row>
                        <v-col cols="12">
                            <h5 class="text-h5 font-weight-bold">Realizar agendamento</h5>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-card-text>
                    <v-window v-model="stepSchedule">
                        <v-window-item :value="1">
                            <v-row>
                                <v-col cols="12">
                                    <p class="font-weight-bold">Revise os serviços selecionados</p>
                                </v-col>
                            </v-row>
                            <v-divider class="mb-4 border-opacity-100"></v-divider>

                            <div style="max-height: 300px !important; overflow-y: auto; overflow-x: hidden;"> 
                                <v-row 
                                    v-for="(service, index) in servicesOnCart" 
                                    v-bind:key="index"
                                >
                                    <v-col cols="10" class="d-flex flex-column justify-center">
                                        <p class="font-weight-bold"> {{ service.name }}</p>
                                        <p class="text-caption text-medium-emphasis mb-0">
                                            R$ {{ service.price }}
                                        </p>
                                        <p class="text-caption text-medium-emphasis mb-0 d-flex align-center">
                                            <v-icon size="18" class="me-1">mdi-clock-outline</v-icon>
                                            {{ service.duration }}
                                        </p>
                                    </v-col>
    
                                    <v-col cols="2" class="d-flex justify-end align-center">
                                        <v-btn 
                                            elevation="0" 
                                            icon="mdi-delete" 
                                            size="small"
                                            @click="deleteServiceFromCart(service.id)"
                                        ></v-btn>
                                    </v-col>
    
                                    <v-divider class="dashed-divider border-opacity-75"></v-divider>
                                </v-row>
                            </div>
                            
                            <v-row class="mt-4">
                                <v-col cols="6" class="d-flex flex-column">
                                    <span class="text-caption text-medium-emphasis">Total</span>
                                    <span class="text-subtitle-2 font-weight-bold">R$ {{ totalPrice }}</span>
                                </v-col>

                                <v-col cols="6" class="d-flex flex-column align-end">
                                    <span class="text-caption text-medium-emphasis">Duração total</span>
                                    <span class="text-subtitle-2 font-weight-bold">{{ totalDuration }}</span>
                                </v-col>
                            </v-row>
                        </v-window-item>

                        <v-window-item :value="2">
                            <v-row>
                                <v-col cols="12">
                                    <p class="font-weight-bold">Informe seus dados pessoais</p>
                                </v-col>
                            </v-row>
                        </v-window-item>

                        <v-window-item :value="3">
                            <v-row>
                                <v-col cols="12">
                                    <p class="font-weight-bold">Escolha o melhor dia</p>
                                </v-col>
                            </v-row>
                        </v-window-item>
                    </v-window>
                </v-card-text>

                <v-card-actions>
                    <v-btn @click="stepSchedule--" color="secondary" variant="tonal">Anterior</v-btn>
                    <v-spacer />
                    <v-btn @click="stepSchedule++" color="black" variant="flat">Próximo</v-btn>
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

    line-height: 1.5rem;
    min-height: calc(1.5rem * 3); /* Garante altura de 3 linhas */
}

.card-desc-truncate:empty::before {
    content: ' '; /* espaço em branco */
    visibility: hidden;
}

.dashed-divider {
    border-top: 1px dashed rgba(0, 0, 0, 0.5); /* pode ajustar a cor conforme tema */
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
        blockBtnAddServiceDialog: false,
        tab: "1",
        
        toScheduleDialog: false,
        stepSchedule: 1,

        slugName: null,
        place: {},
        service: {},
        servicesOnCart: []
    };
},

methods: {
    openServiceDialog(serviceSelected) {
        let serviceExist = this.servicesOnCart.find(service => service.id === serviceSelected.id);

        
        
        this.serviceDialog = true

        if(serviceExist){
            this.blockBtnAddServiceDialog = true
        }else{
            this.blockBtnAddServiceDialog = false
        }

        this.service = serviceSelected
    },

    openScheduleDialog(){
        this.toScheduleDialog = true
    },

    init(){
        req.get(`api/place/data-by-slug/${this.slugName}`)
        .then((res) => {
            this.place = res.data

            console.log(this.place)
        })
        .catch((err) => {})
    },

    addServiceToCart(){
        this.serviceDialog = false

        this.servicesOnCart.push(this.service)
        this.service = {}
    },

    deleteServiceFromCart(idService){
        this.servicesOnCart = this.servicesOnCart.filter(s => s.id !== idService)

        if(this.servicesOnCart.length <= 0){
            this.toScheduleDialog = false
        }
    }
},

computed: {
    totalPrice() {
        return this.servicesOnCart.reduce((total, s) => {
            const price = parseFloat(s.price);
            return isNaN(price) ? total : total + price;
        }, 0).toFixed(2);
    },
    totalDuration() {
        const totalMinutes = this.servicesOnCart
        .reduce((totalMinutes, s) => {
            const [hours, minutes] = s.duration.split(':').map(Number); // Separa as horas e minutos e converte para número
            return totalMinutes + (hours * 60) + minutes; // Converte tudo para minutos
        }, 0);

        const hours = Math.floor(totalMinutes / 60); // Converte os minutos totais para horas
        const minutes = totalMinutes % 60; // Pega o restante dos minutos

        return `${hours}h ${minutes}min`; // Retorna no formato desejado
    }
},

created() {
    this.slugName = this.$route.params.nomeEstabelecimento
    this.init()
}

});

export default App
</script>
  