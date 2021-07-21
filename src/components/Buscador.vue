<template>
  <div>
    <h2>éste seria el buscador</h2>
    <input type="text" v-model="nombrePokemon">
    <router-link :to="`/pokedex/${nombrePokemon || 'pikachu'}`" @click="emitirPoke">Buscar</router-link>
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
     this.$emit('mostrarPokeBoton', this.nombrePokemon);
     this.nombrePokemon = ''
   }
 },
}
</script>

<style>

</style>