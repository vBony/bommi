import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import axios from 'axios';
import System from '@/entities/System';
import 'jquery-mask-plugin';
import $ from 'jquery';
import Clientes from '@/entities/Clientes';
import DocumentMixin from '@/mixins/DocumentMixin'

// Importando componentes
@Options({
  components: {
    HelloWorld,
  },
})

class Cadastro extends Vue {
    public clientes = new Clientes()
    public system = new System()

    public erro = {
      system: new System(),
      clientes: new Clientes()
    }

    public documentMixin = new DocumentMixin()

    data() {
        return {
            data: '',
            nome_empresa: this.system.sys_nome_empresa,
            erro: this.erro
        }
    }

    mounted(){
      this.setMaskInputs()
      this.setDomain()
    }

    testeRequisicao(){
      console.log(this.system);
      console.log(this.clientes);
    }

    setMaskInputs(){
      $('input[name=sys_telefone]').mask('(00) 00000-0000');
      $('input[name=sys_cep]').mask('00.000-000');
      $('input[name=sys_cnpj').mask('00.000.000/0000-00');
    }
  
    setDomain(){
      this.system.sys_dominio = this.documentMixin.string_to_slug(this.system.sys_nome_empresa)
    }

    consultaCep(){
      const cep = this.system.sys_cep.replace(/\D/g, '');

      if(cep.length == 8){
        $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", (dados) => {
          if('erro' in dados){
            $('#sys_cep').show()
            this.erro.system.sys_cep = 'CEP inválido'
          } else {
            this.system.sys_cidade = dados.localidade
            this.system.sys_uf = dados.uf
            this.system.sys_bairro = dados.bairro
            this.system.sys_endereco = dados.logradouro
            this.system.sys_complemento = dados.complemento
            $('#sys_cep').hide()
            this.erro.system.sys_cep = ''
          }
        });
      } else {
        $('#sys_cep').show()
        this.erro.system.sys_cep = 'CEP inválido'
      }
    }
}

export default Cadastro