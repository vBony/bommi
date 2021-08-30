import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';
import System from '@/entities/System';
import 'jquery-mask-plugin';
import $ from 'jquery';
import Clientes from '@/entities/Clientes';

// Importando componentes
@Options({
  components: {
    HelloWorld,
  },
})

class Cadastro extends Vue {
    public clientes = new Clientes()
    public system = new System()
    public erro = new System()

    data() {
        return {
            data: '',
            nome_empresa: this.system.sys_nome_empresa,
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

    string_to_slug(str:string) {
      str = str.replace(/^\s+|\s+$/g, ""); // trim
      str = str.toLowerCase();
    
      // remove accents, swap ñ for n, etc
      const from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
      const to = "aaaaaaeeeeiiiioooouuuunc------";
    
      for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
      }
    
      str = str
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-"); // collapse dashes
    
      return str;
    }
  
    setDomain(){
      this.system.sys_dominio = this.string_to_slug(this.system.sys_nome_empresa)
    }

    consultaCep(){
      const cep = this.system.sys_cep.replace(/\D/g, '');

      if(cep.length == 8){
        $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", (dados) => {
          if('erro' in dados){
            $('#sys_cep').show()
            this.erro.sys_cep = 'CEP inválido'
          } else {
            this.system.sys_cidade = dados.localidade
            this.system.sys_uf = dados.uf
            this.system.sys_bairro = dados.bairro
            this.system.sys_endereco = dados.logradouro
            this.system.sys_complemento = dados.complemento
            $('#sys_cep').hide()
            this.erro.sys_cep = ''
          }
        });
      } else {
        $('#sys_cep').show()
        this.erro.sys_cep = 'CEP inválido'
      }
    }
}

export default Cadastro