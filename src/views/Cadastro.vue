<template>
<div id="cont-area">
  <div id="logo"><img src="../../public/imgs/logo-black.png"></div>
    <div id="title">Cadastro da empresa</div>
    <div id="sub-title">Preencha abaixo as informações sobre a sua futura loja na Ubarber com os dados do seu negócio.</div>
  <div class="ipt-sub-area">
    <div class="title-ipt">Nome completo</div>
    <input placeholder="Nome do proprietário" v-bind:class="{'ipt-erro': erro.clientes.cli_nome}" class="ipt" type="text" name="cli_nome" v-model="clientes.cli_nome">
    <div class="ipt-msg" id="cli_nome" v-if="erro.clientes.cli_nome">{{erro.clientes.cli_nome}}</div>
  </div>
  <div class="ipt-sub-area mb-5">
    <div class="title-ipt">E-mail</div>
    <input placeholder="E-mail" v-bind:class="{'ipt-erro': erro.clientes.cli_email}" class="ipt" type="email" name="cli_email" v-model="clientes.cli_email">
    <div class="ipt-msg" id="cli_email" v-if="erro.clientes.cli_email">{{erro.clientes.cli_email}}</div>
  </div>
  <div id="ipt-area">
    <div class="ipt-sub-area">
      <div class="title-ipt">Nome da empresa</div>
      <input placeholder="Nome da sua loja" v-bind:class="{'ipt-erro': erro.system.sys_nome_empresa}" class="ipt" type="text" name="sys_nome_empresa" v-model="system.sys_nome_empresa" @keyup="setDomain()">
      <div class="ipt-msg" id="sys_nome_empresa" v-if="erro.system.sys_nome_empresa">{{erro.system.sys_nome_empresa}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Nome do domínio</div> 
      <input placeholder="URL da sua loja" v-bind:class="{'ipt-erro': erro.system.sys_dominio}" class="ipt" id="dominio" type="text" name="sys_dominio" v-model="system.sys_dominio">
      <div class="ipt-msg" id="sys_dominio" v-if="erro.system.sys_dominio">{{erro.system.sys_dominio}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">CNPJ</div>
      <input placeholder="CNPJ" v-bind:class="{'ipt-erro': erro.system.sys_cnpj}" class="ipt" type="text" name="sys_cnpj" v-model="system.sys_cnpj">
      <div class="ipt-msg" id="sys_cnpj" v-if="erro.system.sys_cnpj">{{erro.system.sys_cnpj}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Telefone da empresa</div>
      <input placeholder="Telefone da loja com DDD" class="ipt" v-bind:class="{'ipt-erro': erro.system.sys_telefone}" id="ipt-tel" type="text" name="sys_telefone" v-model="system.sys_telefone">
      <div class="ipt-msg" id="sys_telefone" v-if="erro.system.sys_telefone">{{erro.system.sys_telefone}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">CEP</div>
      <input placeholder="00.000-000" class="ipt" id="ipt-cep" v-bind:class="{'ipt-erro': erro.system.sys_cep}" type="text" name="sys_cep" v-model="system.sys_cep" @change="consultaCep()">
      <div class="ipt-msg" id="sys_cep" v-if="erro.system.sys_cep">{{erro.system.sys_cep}}</div>
    </div>
    <div id="city-area">
      <div class="sub-city-area">
      <div class="title-ipt">Cidade</div>
      <input placeholder="Cidade da sua loja" class="ipt" id="ipt-city" type="text" disabled name="sys_cidade" v-model="system.sys_cidade">
      <div class="ipt-msg" id="sys_cidade" v-if="erro.system.sys_cidade">{{erro.system.sys_cidade}}</div>
    </div>
    <div class="sub-city-area">
    <div class="title-ipt">Estado</div>
      <input id="ipt-state" type="text" disabled name="sys_uf" v-model="system.sys_uf">
    <div class="ipt-msg" id="sys_uf" v-if="erro.system.sys_uf">{{erro.system.sys_uf}}</div>
    </div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Bairro</div>
      <input placeholder="Bairro da sua loja" v-bind:class="{'ipt-erro': erro.system.sys_bairro}" class="ipt" type="text" name="sys_bairro" v-model="system.sys_bairro">
      <div class="ipt-msg" id="sys_bairro" v-if="erro.system.sys_bairro">{{erro.system.sys_bairro}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Endereço</div>
      <input placeholder="Local da sua loja" v-bind:class="{'ipt-erro': erro.system.sys_endereco}" class="ipt" type="text" name="sys_endereco" v-model="system.sys_endereco">
    <div class="ipt-msg" id="sys_endereco" v-if="erro.system.sys_endereco">{{erro.system.sys_endereco}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Número</div>
      <input placeholder="Número do endereço" class="ipt" v-bind:class="{'ipt-erro': erro.system.sys_numero}" id="ipt-number" type="text" name="sys_numero" v-model="system.sys_numero">
    <div class="ipt-msg" id="sys_numero" v-if="erro.system.sys_numero">{{erro.system.sys_numero}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Complemento (Opcional)</div>
      <input placeholder="Complemento do endereço" v-bind:class="{'ipt-erro': erro.system.sys_complemento}" class="ipt" type="text" name="sys_complemento" v-model="system.sys_complemento">
    <div class="ipt-msg" id="sys_complemento" v-if="erro.system.sys_complemento">{{erro.system.sys_complemento}}</div>
    </div>
    <div id="btt-area"><button id="btt" @click="enviarDados()">Enviar</button></div>
  </div>
</div>
</template>

<style src="@/assets/css/cadastro.css">
</style>
<style src="@/assets/css/normalize.css">
</style>

<!-- Importação do model -->
<script lang="ts">
  import Cadastro from "@/models/Cadastro"
  export default Cadastro
</script>