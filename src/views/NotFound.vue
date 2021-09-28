<template>
<div class="page-wrap flex-row h-100 d-flex justify-content-center align-items-center">
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-12 text-center">
        <img src="../../public/imgs/logo-black.png" width="60">
        <span class="display-1 d-block">404</span>
        <div class="mb-4 lead">A página que você está procurando não foi encontrada.</div>
        <a href="" class="btn btn-link">Página principal</a>
      </div>
    </div>
  </div>
</div>
</template>

<style src="@/assets/css/not-found.css" scoped>
</style>
<style src="@/assets/css/normalize.css">
</style>

<!-- Importação do model -->
<script lang="ts">
  import NotFound from "@/models/NotFound"
  export default NotFound
</script>