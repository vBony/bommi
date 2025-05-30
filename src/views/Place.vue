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
                                v-model="service.observation"
                                label="Adicione alguma informação que considere importante." 
                                variant="outlined"
                                hide-details="auto"
                                density="compact"
                                single-line
                                :disabled="blockBtnAddServiceDialog"
                                :counter="250"
                                :maxlength="250"
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

        <v-dialog v-model="toScheduleDialog" width="auto" :persistent="loadingSchedule">
            <v-card max-width="800" min-width="800" class="pa-4">
                <v-card-title>
                    <v-row>
                        <v-col cols="12">
                            <h5 class="text-h5 font-weight-bold">Realizar agendamento</h5>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-card-text>
                    <v-window v-model="stepSchedule" :touch="{ left: null, right: null }">
                        <v-window-item :value="1">
                            <v-row>
                                <v-col cols="12">
                                    <p class="font-weight-bold">Revise os serviços selecionados</p>
                                </v-col>
                            </v-row>
                            <v-divider class="mb-4 border-opacity-100"></v-divider>

                            <div style="height: 300px !important; overflow-y: auto; overflow-x: hidden;"> 
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
                                    <p class="text-body-2 text-grey-darken-1">
                                        Solicitamos essas informações para que possamos entrar em contato 
                                        com você caso ocorra qualquer imprevisto relacionado ao seu agendamento.
                                    </p>
                                </v-col>
                            </v-row>

                            <v-row class="mb-4">
                                <v-col cols="12" md="6" lg="6" xl="6" xxl="6" sm="12">
                                    <label>Seu telefone</label>
                                    <v-text-field 
                                        v-model="schedule.phoneNumber"
                                        label="(99) 99999-9999" 
                                        variant="outlined" 
                                        type="text"
                                        hide-details="auto" 
                                        single-line 
                                        prepend-inner-icon="mdi-phone"
                                        :error-messages="errorsSchedule?.phoneNumber"
                                        v-maska:[mt.phone]
                                    >
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" md="6" lg="6" xl="6" xxl="6" sm="12">
                                    <label>Nome completo</label>
                                    <v-text-field 
                                        v-model="schedule.name"
                                        variant="outlined" 
                                        type="text"
                                        hide-details="auto" 
                                        single-line 
                                        prepend-inner-icon="mdi-account"
                                        :error-messages="errorsSchedule?.name"
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-window-item>

                        <v-window-item :value="3">
                            <div class="pa-4">
                                <!-- Navegação -->
                                <div class="d-flex align-center justify-space-between mb-4">
                                    <span class="font-weight-medium">Escolha a melhor data para você</span>
                                </div>

                                <!-- Datas -->
                                <v-slide-group
                                    v-model="selectedDateIndex"
                                    show-arrows
                                    class="mb-6"
                                    center-active
                                    :touch="{ left: true, right: true }"
                                >
                                    <v-slide-group-item
                                        v-for="(date, index) in place.avaliableDates"
                                        :key="index"
                                    >
                                        <v-btn
                                            class="ma-1"
                                            color="black"
                                            size="x-large"
                                            :variant="schedule.date === date ? 'flat' : 'outlined'"
                                            @click="selectedDateSchedule(date, index)"
                                            :disabled="loadingSchedule"
                                        >
                                            <div class="d-flex flex-column">
                                                <div class="text-caption">{{ getDayOfWeek(date) }} </div>
                                                <div class="text-subtitle-2 font-weight-bold">
                                                    {{ getDateBr(date) }}
                                                </div>
                                            </div>
                                        </v-btn>
                                    </v-slide-group-item>
                                </v-slide-group>

                                <v-divider class="mb-4 border-opacity-100 mt-12" v-if="schedule.date"></v-divider>
                                <p class="font-weight-bold" v-if="schedule.date">Agora selecione o melhor horário</p>
                                <div class="mb-4" v-if="schedule.date">
                                    <div class="d-flex flex-wrap gap-2" v-if="!loadingSchedule && this.hours">
                                        <v-btn
                                            v-for="(hour, i) in hours"
                                            :key="i"
                                            :variant="schedule.hour === hour ? 'flat' : 'outlined'"
                                            color="black"
                                            class="time-btn me-2 mb-2"
                                            @click="schedule.hour = hour"
                                        >
                                            {{ hour }}
                                        </v-btn>
                                    </div>

                                    <div class="d-flex flex-wrap gap-2" v-if="loadingSchedule">
                                        <div class="skeleton-chip me-2 mb-2" v-for="i in 14" :key="i"></div>
                                    </div>

                                    <div class="mt-2" v-if="!loadingSchedule && !this.hours">
                                        <v-alert icon="mdi-emoticon-sad-outline" text="Nenhum horário disponível" variant="tonal"></v-alert>
                                    </div>
                                </div>
                            </div>
                        </v-window-item>
                    </v-window>
                </v-card-text>

                <v-card-actions>
                    <v-btn @click="stepSchedule--" color="secondary" variant="tonal" :loading="loadingSchedule">Anterior</v-btn>

                    <v-spacer />

                    <v-btn @click="nextStepSchedule()" color="black" variant="flat" :loading="loadingSchedule">Próximo</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="showSuccessDialog" width="460" transition="fade-transition" persistent>
            <v-card class="rounded-2xl bg-white text-black border border-gray-200 shadow-lg pa-6">
                <div class="d-flex align-center mb-4">
                    <v-icon color="black" size="28">mdi-check-circle-outline</v-icon>
                    <span class="text-h6 font-weight-medium ml-3">Agendamento Confirmado</span>
                </div>

                <div class="text-body-3 text-gray-800 mb-4">
                    <p>Seu agendamento foi realizado com sucesso.</p><br>
                    <p>Entraremos em contato para confirmar sua presença <strong>45 minutos</strong> antes do horário agendado.</p>
                </div>

                <div class="d-flex justify-end">
                    <v-btn
                        color="black"
                        class="text-none rounded-lg"
                        @click="showSuccessDialog = false"
                    >
                        Fechar
                    </v-btn>
                </div>
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

.time-btn {
    min-width: 80px;
}

.selected-time {
    background-color: #ff9800 !important;
    color: white !important;
}

.skeleton-chip {
    width: 80px;
    height: 32px;
    border-radius: 4px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: skeleton-loading 1.5s infinite;
    display: inline-block;
    margin-right: 8px;
}

@keyframes skeleton-loading {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
</style>

  
<script lang='ts'>
// @ts-nocheck
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'
import req from '@/helpers/http'
import Masks from '@/helpers/maskTokens'
import { vMaska, Mask } from "maska"
import { scheduleDTO } from '@/models/schedule';

const App = defineComponent({
components: {
    HelloWorld
},

directives: { maska: vMaska },

data() {
    return {
        mt: new Masks(),

        serviceDialog: false,
        blockBtnAddServiceDialog: false,
        tab: "1",
        
        toScheduleDialog: false,
        stepSchedule: 1,
        selectedDateIndex: null,
        schedule: { ...scheduleDTO },
        errorsSchedule: { ...scheduleDTO },
        hours: null,
        daysOfWeek: ['SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO', 'DOMINGO'],
        loadingSchedule: false,



        slugName: null,
        place: {},
        service: {},
        servicesOnCart: [],


        showSuccessDialog: false
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
        })
        .catch((err) => {})
    },

    addServiceToCart(){
        this.stepSchedule = 1
        this.serviceDialog = false

        this.servicesOnCart.push(this.service)
        this.service = {}
    },

    deleteServiceFromCart(idService){
        this.servicesOnCart = this.servicesOnCart.filter(s => s.id !== idService)

        if(this.servicesOnCart.length <= 0){
            this.toScheduleDialog = false
        }
    },

    nextStepSchedule() {
        this.errorsSchedule = {}

        if (this.stepSchedule === 2) {
            console.log(this.schedule)
            this.validateUserDataSchedule()
        } else if (this.stepSchedule === 3) {
            this.bookAppointment()
        } else {
            this.stepSchedule++
        }
    },

    bookAppointment(){
        let phoneMask = new Mask(this.mt.phone)
        if(this.schedule.phoneNumber){
            this.schedule.phoneNumber = structuredClone(phoneMask.unmasked(this.schedule.phoneNumber))
        }

        if(!this.schedule.date || !this.schedule.hour){
            return
        }

        this.loadingSchedule = true

        req.post('api/place/appointments/book', this.schedule)
        .then((response) => {
            this.resetSchedule()
            this.toScheduleDialog = false
            this.showSuccessDialog = true
        })
        .catch((reason) => {
            this.errorsSchedule = reason.response.data.errors
        })
        .finally(() => {
          this.loadingSchedule = false;
        });
    },


    mountDataSchedule(){
        let phoneMask = new Mask(this.mt.phone)

        this.schedule.services = this.servicesOnCart.map(item => ({
            id: item.id,
            observation: item.observation
        }));

        this.schedule.idPlace = this.place.id
        if(this.schedule.phoneNumber){
            this.schedule.phoneNumber = structuredClone(phoneMask.unmasked(this.schedule.phoneNumber))
        }

        return this.schedule
    },

    validateUserDataSchedule(){
        // Validação manual dos campos obrigatórios
        const errors = {}

        if (!this.schedule.name || this.schedule.name.length < 3 || this.schedule.name.length > 100) {
            errors.name = ['O nome é obrigatório e deve ter entre 3 e 100 caracteres.']
        }else{
            delete(errors.name)
        }

        let phoneNumber = structuredClone(this.schedule.phoneNumber)
        if(!phoneNumber){
            errors.phoneNumber = ['Telefone é obrigatório.']
        }else{
            phoneNumber = phoneNumber.replace(/\D/g, '')
            if (!phoneNumber || !/^\d{11}$/.test(phoneNumber.replace(/\D/g, ''))) {
                errors.phoneNumber = ['Informe um telefone válido 11 dígitos.']
            }else{
                delete(errors.phoneNumber)
            }
        }

        // Se tiver erros, bloqueia a continuidade
        if (Object.keys(errors).length > 0) {
            this.errorsSchedule = errors
            return
        }else{
            this.resetDateSchedule()
            this.stepSchedule++
        }
    },
    
    getDayOfWeek(date){
        const dayIndex = new Date(date).getDay()
        return this.daysOfWeek[dayIndex]
    },

    getDateBr(date){
        date = new Date(date).toLocaleDateString('pt-BR')
        return date
    },

    selectedDateSchedule(date, index){
        this.hours = null
        this.schedule.hour = null
        
        this.loadingSchedule = true

        this.schedule.date = date
        this.selectedDateIndex = index

        // Dados válidos: faz requisição
        const schedule = this.mountDataSchedule()

        req.post('api/place/appointments/availability', schedule)
        .then((response) => {
            this.hours = response.data.times
        })
        .catch((reason) => {
            this.errorsSchedule = reason.response.data.errors
            this.hours = null
        })
        .finally(() => {
            this.loadingSchedule = false;
        });
    },

    resetDateSchedule(){
        this.schedule.date = null
        this.schedule.hour = null

        this.selectedDateIndex = null
        this.hours = null
    },

    resetSchedule(){
        this.resetDateSchedule()
        this.schedule = { ...scheduleDTO }
        this.errorsSchedule = {}
        this.stepSchedule = 1


        this.service = {}
        this.servicesOnCart = []
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
  