<template>
<div id="cont-area">
  <div id="logo"><img src="../../public/imgs/logo-black.png"></div>
    <div id="title">Cadastro da empresa</div>
    <div id="sub-title">Preencha abaixo as informações sobre a sua futura loja na Ubarber com os dados do seu negócio.</div>
  <div class="ipt-sub-area">
    <div class="title-ipt">Nome completo</div>
    <input placeholder="Nome do proprietário" class="ipt" type="text" name="sys_nome" v-model="system.sys_nome">
    <div class="ipt-msg" id="sys_nome">{{erro.sys_nome}}</div>
  </div>
  <div id="ipt-area">
    <div class="ipt-sub-area">
      <div class="title-ipt">Nome da empresa</div>
      <input placeholder="Nome da sua loja" class="ipt" type="text" name="sys_nome_empresa" v-model="system.sys_nome_empresa" @keyup="setDomain()">
      <div class="ipt-msg" id="sys_nome_empresa">{{erro.sys_nome_empresa}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Nome do domínio</div> 
      <input placeholder="URL da sua loja" class="ipt" id="dominio" type="text" name="sys_dominio" v-model="system.sys_dominio">
      <div class="ipt-msg" id="sys_dominio">{{erro.sys_dominio}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Telefone da empresa</div>
      <input placeholder="Telefone da loja com DDD" id="ipt-tel" type="text" name="sys_telefone" v-model="system.sys_telefone">
      <div class="ipt-msg" id="sys_telefone">{{erro.sys_telefone}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">CEP</div>
      <input placeholder="00.000-000" id="ipt-cep" type="text" name="sys_cep" v-model="system.sys_cep" @change="consultaCep()">
      <div class="ipt-msg" id="sys_cep">{{erro.sys_cep}}</div>
    </div>
    <div id="city-area">
      <div class="sub-city-area">
      <div class="title-ipt">Cidade</div>
      <input placeholder="Cidade da sua loja" id="ipt-city" type="text" disabled name="sys_cidade" v-model="system.sys_cidade">
      <div class="ipt-msg" id="sys_cidade">{{erro.sys_cidade}}</div>
    </div>
    <div class="sub-city-area">
    <div class="title-ipt">Estado</div>
      <input id="ipt-state" type="text" disabled name="sys_uf" v-model="system.sys_uf">
    <div class="ipt-msg" id="sys_uf">{{erro.sys_uf}}</div>
    </div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Bairro</div>
      <input placeholder="Bairro da sua loja" class="ipt" type="text" name="sys_bairro" v-model="system.sys_bairro">
      <div class="ipt-msg" id="sys_bairro">{{erro.sys_bairro}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Endereço</div>
      <input placeholder="Local da sua loja" class="ipt" type="text" name="sys_endereco" v-model="system.sys_endereco">
    <div class="ipt-msg" id="sys_endereco">{{erro.sys_endereco}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Número</div>
      <input placeholder="Número do endereço" id="ipt-number" type="text" name="sys_numero" v-model="system.sys_numero">
    <div class="ipt-msg" id="sys_numero">{{erro.sys_numero}}</div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Complemento (Opcional)</div>
      <input placeholder="Complemento do endereço" class="ipt" type="text" name="sys_complemento" v-model="system.sys_complemento">
    <div class="ipt-msg" id="sys_complemento">{{erro.sys_complemento}}</div>
    </div>
    <div id="btt-area"><button id="btt" @click="testeRequisicao()">Enviar</button></div>
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