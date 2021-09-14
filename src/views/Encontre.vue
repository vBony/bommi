
<template>
<div class="container">
    <div class="row mt-4">
        <div class="col-12 text-center">
            <img  style="height:200px" src="../../public/imgs/logo-black.png" alt="">
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-12 text-center">
            <h3>Encontre a barbearia mais próxima de você!</h3>
        </div>
    </div>

    <div class="row mt-4" v-if="estados != null">
        <div class="col-lg-2 col-sm-12 col-md-2">
            <div class="form-group">
                <label for="estado">Estado</label>
                <select class="form-control" id="estado" v-model="estado" @change="getCidades()">
                    <option  v-for="(estado, index) in estados" :key="index" :value="estado.sys_uf">{{estado.sys_uf}}</option>
                </select>
            </div>
        </div>

        <div class="col-lg-5 col-sm-12 col-md-5" v-if="estado != null">
            <div class="form-group">
                <label for="estado">Cidade</label>
                <select class="form-control" id="cidade" v-model="cidade" @change="getBairros()">
                    <option  v-for="(cidade, index) in cidades" :key="index" :value="cidade.sys_cidade">{{cidade.sys_cidade}}</option>
                </select>
            </div>
        </div>

        <div class="col-lg-5 col-sm-12 col-md-5" v-if="cidade != null">
            <div class="form-group">
                <label for="estado">Bairro</label>
                <select class="form-control" id="cidade" v-model="bairro">
                    <option  v-for="(bairro, index) in bairros" :key="index" :value="bairro.sys_bairro">{{bairro.sys_bairro}}</option>
                </select>
            </div>
        </div>
    </div>

    <div class="row mt-4 card p-4 text-center" v-if="estados == null">
        <h4>Infelizmente não encontramos nenhuma barbearia nas proximidades :(</h4>
        <h5>Mas não desanime, tente novamente mais tarde!</h5>
    </div>
</div>

<div class="loading w-100 h-100" v-if="loading != false">
  <div class="spinner-border text-white" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="text-white fs-4">Carregando...</div>
</div>

</template>

<style src="@/assets/css/encontre.css" scoped>
</style>
<style src="@/assets/css/normalize.css">
</style>

<!-- Importação do model -->
<script lang="ts">
  import Encontre from "@/models/Encontre"
  export default Encontre
</script>