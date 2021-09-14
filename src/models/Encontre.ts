import { Vue } from 'vue-class-component';
import DocumentMixin from '@/mixins/DocumentMixin';
import $ from 'jquery';
import 'jquery-mask-plugin';
import axios from 'axios'


class Encontre extends Vue{
    public docMixin = new DocumentMixin()
    public estados = []
    public estado = null

    public cidades = []
    public cidade = null

    public bairros = []
    public bairro = null

    public loading = false

    created(){
        // console.log(this.estados);
        this.getEstados()
    }

    getEstados(){
        // create a promise for the axios request
        this.loading = true
        axios.post(this.docMixin.getUrlServer()+ 'sistema/estados')
        .then((response) => {
            if(response.data.estados != undefined){
                this.estados = response.data.estados
                this.loading = false
            }
        })
    }

    getCidades(){
        if(this.estado != null){
            this.loading = true
            axios.post(this.docMixin.getUrlServer()+ 'sistema/cidades', {estado: this.estado})
            .then((response) => {
                if(response.data.cidades != undefined){
                    this.cidades = response.data.cidades
                    this.loading = false
                }
            })
        }
    }

    getBairros(){
        if(this.cidade != null){
            this.loading = true
            axios.post(this.docMixin.getUrlServer()+ 'sistema/bairros', {cidade: this.cidade})
            .then((response) => {
                if(response.data.bairros != undefined){
                    this.bairros = response.data.bairros
                    this.loading = false
                }
            })
        }
    }

}

export default Encontre
