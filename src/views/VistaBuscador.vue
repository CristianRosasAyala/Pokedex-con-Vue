<template>
  <div class="template">
    <h1 class="titulo">!Bienvenido a la Pokedex¡</h1>
      <Buscador />
  </div>
</template>

<script>
import Buscador from '../components/Buscador'
export default {
  components: { Buscador },

}
</script>

<style scoped>
  .titulo{
    margin-top: 17%;
    font-family: 'Press Start 2P', cursive;
    font-size: 60px;
    color: #D9DD6B;
  }
  .template{
    display: flex;
    flex-flow: column wrap;
  }
</style>