<template>
  <div>
    <Buscador   @mostrarPokeBoton="getPokemon"/>
    <h1>éste seria el pokedex</h1>
    
    
    {{pokemon.name}}

  </div>
</template>

<script>
import Buscador from '../components/Buscador'
import axios from 'axios'
export default {
  data() {
    return {
      pokemon: ''
    }
  },
  
  created () {
    this.getPokemon();
  },
  components: { Buscador },
  methods: {
    async getPokemon (nombrePokemon) {
      try {
        let data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon ||this.$route.params.name || 'pikachu'}`)
        console.log(data.data)
        this.pokemon = data.data
        
        
        
      } catch (error) {
        console.log(error)
      } finally{
        console.log('finally')
      }
    }
  },
  
  

}
</script>

<style scoped>

</style>