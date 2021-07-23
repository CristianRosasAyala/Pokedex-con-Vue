<template>
  <div>
    <h2 class="titulo">Busca tu pokemon favorito ...</h2>
    
    <InputText class="link" type="text" v-model="nombrePokemon" />
    
    <router-link  :to="`/pokedex/${nombrePokemon.toLowerCase() || 'pikachu'}`" @click="emitirPoke">
    <button class="boton" @click="recargar">Buscar</button>
    </router-link>
    <router-view />
    
  </div>
</template>

<script>

export default {
 name: 'Buscador',
 data() {
     return {
         nombrePokemon: '',
     }
 },
 methods: {
   emitirPoke() {
     this.$emit('mostrarPokeBoton', this.nombrePokemon.toLowerCase());
     this.nombrePokemon = ''
   },
   recargar(){
     Window.local.reload()
   }
 },
}
</script>

<style scoped>
  .titulo{
    margin-top: 3rem;
    font-family: 'Press Start 2P', cursive;
    font-size: 40px;
    color: #D54C4C;
  }
  .link{
    margin-top: 15px;
  }
  .boton{
    font-family: 'Press Start 2P', cursive;
    cursor: pointer;
    margin: 1rem;
    background-color: #D9DD6B;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
  }
</style>