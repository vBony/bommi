<template>
<div id="cont-area">
  <div id="logo"><img src="../../public/imgs/logo-black.png"></div>
    <div id="title">Cadastro da empresa</div>
    <div id="sub-title">Preencha abaixo as informações sobre a sua futura loja na Ubarber com os dados do seu negócio.</div>
  <div class="ipt-sub-area">
    <div class="title-ipt">Nome completo</div>
    <input placeholder="Nome do proprietário" v-bind:class="{'is-invalid': erro.clientes.cli_nome}" class="ipt form-control" type="text" name="cli_nome" v-model="clientes.cli_nome">
    <div class="invalid-feedback color-danger" id="cli_nome">{{erro.clientes.cli_nome}}</div>
  </div>
  <div class="ipt-sub-area mb-4">
    <div class="title-ipt">E-mail</div>
    <input placeholder="E-mail" v-bind:class="{'is-invalid': erro.clientes.cli_email}" class="ipt form-control" type="email" name="cli_email" v-model="clientes.cli_email">
    <div class="invalid-feedback" id="cli_email">{{erro.clientes.cli_email}}</div>
  </div>
   <div class="ipt-sub-area">
    <div class="title-ipt">Senha</div>
    <input placeholder="Senha do usuário" v-bind:class="{'is-invalid': erro.clientes.cli_senha}" class="ipt form-control" type="password" name="cli_senha" v-model="clientes.cli_senha">
    <div class="invalid-feedback" id="cli_senha" >{{erro.clientes.cli_senha}}</div>
  </div>
  <div class="ipt-sub-area">
    <div class="title-ipt">Senha novamente</div>
    <input placeholder="Repita a senha" v-bind:class="{'is-invalid': erro.clientes.cli_repete_senha}" class="ipt form-control" type="password" name="cli_repete_senha" v-model="clientes.cli_repete_senha">
    <div class="invalid-feedback" id="cli_repete_senha">{{erro.clientes.cli_repete_senha}}</div>
    <div class="mt-2">
      <a href="" class="text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Já possuo conta</a>
    </div>
  </div>
  <div id="ipt-area" class="mt-3">
    <div class="ipt-sub-area">
      <div class="title-ipt">Nome da empresa</div>
      <input placeholder="Nome da sua loja" v-bind:class="{'is-invalid': erro.system.sys_nome_empresa}" class="ipt form-control" type="text" name="sys_nome_empresa" v-model="system.sys_nome_empresa" @keyup="setDomain()">
      <div class="invalid-feedback" id="sys_nome_empresa">{{erro.system.sys_nome_empresa}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Nome do domínio</div> 
      <input placeholder="URL da sua loja" v-bind:class="{'is-invalid': erro.system.sys_dominio}" class="ipt form-control" id="dominio" type="text" name="sys_dominio" v-model="system.sys_dominio">
      <div class="invalid-feedback" id="sys_dominio">{{erro.system.sys_dominio}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">CNPJ</div>
      <input placeholder="CNPJ" v-bind:class="{'is-invalid': erro.system.sys_cnpj}" class="ipt form-control" type="text" name="sys_cnpj" v-model="system.sys_cnpj">
      <div class="invalid-feedback" id="sys_cnpj">{{erro.system.sys_cnpj}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Telefone da empresa</div>
      <input placeholder="Telefone da loja com DDD" class="ipt form-control" v-bind:class="{'is-invalid': erro.system.sys_telefone}" id="ipt-tel" type="text" name="sys_telefone" v-model="system.sys_telefone">
      <div class="invalid-feedback" id="sys_telefone">{{erro.system.sys_telefone}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">CEP</div>
      <input placeholder="00.000-000" class="ipt form-control" id="ipt-cep" v-bind:class="{'is-invalid': erro.system.sys_cep}" type="text" name="sys_cep" v-model="system.sys_cep" @change="consultaCep()">
      <div class="invalid-feedback" id="sys_cep">{{erro.system.sys_cep}}</div>
    </div>
    <div id="city-area">
      <div class="sub-city-area">
      <div class="title-ipt">Cidade</div>
      <input placeholder="Cidade da sua loja" class="ipt form-control" id="ipt-city" type="text" disabled name="sys_cidade" v-model="system.sys_cidade">
      <div class="invalid-feedback" id="sys_cidade">{{erro.system.sys_cidade}}</div>
    </div>
    <div class="sub-city-area">
    <div class="title-ipt">Estado</div>
      <input id="ipt-state" type="text" class="form-control" disabled name="sys_uf" v-model="system.sys_uf">
    <div class="invalid-feedback" id="sys_uf">{{erro.system.sys_uf}}</div>
    </div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Bairro</div>
      <input placeholder="Bairro da sua loja" v-bind:class="{'is-invalid': erro.system.sys_bairro}" class="ipt form-control" type="text" name="sys_bairro" v-model="system.sys_bairro">
      <div class="invalid-feedback" id="sys_bairro">{{erro.system.sys_bairro}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Endereço</div>
      <input placeholder="Local da sua loja" v-bind:class="{'is-invalid': erro.system.sys_endereco}" class="ipt form-control" type="text" name="sys_endereco" v-model="system.sys_endereco">
    <div class="invalid-feedback" id="sys_endereco">{{erro.system.sys_endereco}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Número</div>
      <input placeholder="Número do endereço" class="ipt form-control" v-bind:class="{'is-invalid': erro.system.sys_numero}" id="ipt-number" type="text" name="sys_numero" v-model="system.sys_numero">
    <div class="invalid-feedback" id="sys_numero">{{erro.system.sys_numero}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Complemento (Opcional)</div>
      <input placeholder="Complemento do endereço" v-bind:class="{'is-invalid': erro.system.sys_complemento}" class="ipt form-control" type="text" name="sys_complemento" v-model="system.sys_complemento">
    <div class="invalid-feedback" id="sys_complemento">{{erro.system.sys_complemento}}</div>
    </div>
    <div id="btt-area"><button class="btn btn-lg btn-dark px-4 mb-4" @click="enviarDados()">Enviar</button></div>
  </div>
</div>
<div class="loading w-100 h-100">
  <div class="spinner-border text-white" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="text-white fs-4">Carregando...</div>
</div>
<div class="modal fade exampleModal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title fs-2" id="exampleModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="logo"><img  src="../../public/imgs/logo-black.png" alt="50px"></div>
        <div class="ipt-sub-area mb-4">
          <div class="title-ipt">E-mail</div>
          <input placeholder="E-mail"  class="ipt form-control-lg" type="email" name="cli_email">
          <div class="invalid-feedback color-danger" id="cli_email" ></div>
        </div>
        <div class="ipt-sub-area mb-4">
          <div class="title-ipt">Senha</div>
          <input placeholder="Senha"  class="ipt form-control-lg" type="password" name="cli_senha">
          <div class="invalid-feedback color-danger" id="cli_senha" ></div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-dark">Entrar</button>
      </div>
    </div>
  </div>
</div>
</template>

<style src="@/assets/css/cadastro.css" scoped>
</style>

<!-- Importação do model -->
<script lang="ts">
  import Cadastro from "@/models/Cadastro"
  export default Cadastro
</script>