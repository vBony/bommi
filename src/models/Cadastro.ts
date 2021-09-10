import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import System from '@/entities/System';
import 'jquery-mask-plugin';
import $ from 'jquery';
import Clientes from '@/entities/Clientes';
import DocumentMixin from '@/mixins/DocumentMixin'
import Swal from 'sweetalert2'
// import dotenv from 'dotenv'


// Importando componentes
@Options({
  components: {
    HelloWorld,
  },
})

class Cadastro extends Vue {
    public clientes = new Clientes()
    public system = new System()

    public urlServer = ''

    public erro = {
      system: new System(),
      clientes: new Clientes()
    }

    public errorReset = {
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
      this.documentMixin.getUrlServer()
      this.updateInputs()
      $('.loading').hide()
    }

    enviarDados(){
      const data = {
        clientes: this.clientes,
        system: this.system
      }

      $.ajax({
        type: "POST",
        url: this.documentMixin.getUrlServer()+ 'sistema/cadastrar',
        data: {dados:data},
        beforeSend: function(){
          $(".loading").fadeIn('fast')
        },
        complete:function(){
          $('.loading').fadeOut('fast')
        },
        success: (data) => {
          if(data.errors){
            this.erro = data.errors
            if(this.erro.clientes.cli_senha){
              this.erro.clientes.cli_repete_senha = this.erro.clientes.cli_senha
            }
          }else if (data.message == '200'){
            this.erro = this.errorReset
            Swal.fire({
              icon: 'success',
              title: 'Cadastro realizado com sucesso!',
              confirmButtonColor: '#a5dc86',
              allowOutsideClick: false,
            })
          }
        },
        dataType: 'json',
      });
    }

    setMaskInputs(){
      $('input[name=sys_telefone]').mask('(00) 00000-0000');
      $('input[name=sys_cep]').mask('00.000-000');
      $('input[name=sys_cnpj').mask('00.000.000/0000-00');
    }
  
    setDomain(){
      this.system.sys_dominio = this.documentMixin.string_to_slug(this.system.sys_nome_empresa)
    }

    updateInputs(){
      $('.ipt').on('change', function(){
        const name = $(this).attr('name')
        $(`.ipt-msg#${name}`).hide()
        $(this).removeClass('ipt-erro')
        if(name == 'cli_senha'){
          $(`.ipt-msg#cli_repete_senha`).hide()
          $('input[name=cli_repete_senha]').removeClass('ipt-erro')
        }
        if(name == 'sys_nome_empresa'){
          $(`.ipt-msg#sys_dominio`).hide()
          $('input[name=sys_dominio]').removeClass('ipt-erro')
        }
      })
    }

    consultaCep(){
      const cep = this.system.sys_cep.replace(/\D/g, '');

      if(cep.length == 8){
        $.ajax({
          type: "GET",
          url: "https://viacep.com.br/ws/"+ cep +"/json/?callback=?",
          beforeSend: function(){
            $(".loading").fadeIn('fast')
          },
          complete:function(){
            $('.loading').fadeOut('fast')
          },
          success: (dados) => {
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
          },
          dataType: 'json',
        });
      } else {
        $('#sys_cep').show()
        this.erro.system.sys_cep = 'CEP inválido'
      }
    }
}

export default Cadastro