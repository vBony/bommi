<template>
<div id="cont-area">
  <div id="logo"><img src="../../public/imgs/logo-black.png"></div>
    <div id="title">Cadastro da empresa</div>
    <div id="sub-title">Preencha abaixo as informações sobre a sua futura loja na Ubarber com os dados do seu negócio.</div>
  <div class="ipt-sub-area">
    <div class="title-ipt">Nome completo</div>
    <input placeholder="Nome do proprietário" class="ipt" type="text">
    <div class="ipt-msg"></div>
  </div>
  <div id="ipt-area">
    <div class="ipt-sub-area">
      <div class="title-ipt">Nome da empresa</div>
      <input placeholder="Nome da sua loja" class="ipt" type="text">
      <div class="ipt-msg"></div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Nome do domínio</div> 
      <input placeholder="URL da sua loja" class="ipt" type="text">
      <div class="ipt-msg"></div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Telefone da empresa</div>
      <input placeholder="Telefone da loja com DDD" id="ipt-tel" type="text">
      <div class="ipt-msg"></div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">CEP</div>
      <input placeholder="00.000-000" id="ipt-tel" type="text">
      <div class="ipt-msg"></div>
    </div>
    <div id="city-area">
      <div class="sub-city-area">
      <div class="title-ipt">Cidade</div>
      <input placeholder="Cidade da sua loja" id="ipt-city" type="text" disabled>
      <div class="ipt-msg"></div>
    </div>
    <div class="sub-city-area">
    <div class="title-ipt">Estado</div>
      <select name="Estado" id="ipt-state" disabled>
        <option value="UF" selected>UF</option>
      </select>
    <div class="ipt-msg"></div>
    </div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Bairro</div>
      <input placeholder="Bairro da sua loja" class="ipt" type="text">
      <div class="ipt-msg"></div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Endereço</div>
      <input placeholder="Local da sua loja" class="ipt" type="text">
    <div class="ipt-msg"></div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Número</div>
      <input placeholder="Número do endereço" id="ipt-number" type="text">
    <div class="ipt-msg"></div>
    </div>
    <div class="ipt-sub-area">
      <div class="title-ipt">Complemento (Opcional)</div>
      <input placeholder="Complemento do endereço" class="ipt" type="text">
    <div class="ipt-msg"></div>
    </div>
    <div id="btt-area"><button id="btt" disabled>Enviar</button></div>
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