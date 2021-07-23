<template>
  <div class="template">
    <Buscador   @mostrarPokeBoton="getPokemon" />
    <h1 class="tituloOk" >Hé encontrado...</h1>
    
      <div id="pokedex" >
      <!-- Left Panel -->
      <div id="left-panel">
        <!-- Top lights -->
        <div class="left-top-container">
          <svg height="100" width="225" class="left-svg">
            <polyline
              points="0,75 70,75 90,38 224,38"
              style="fill: none; stroke: black; stroke-width: 3"
            />
          </svg>
          <div class="lights-container">
            <div class="big-light-boarder">
              <div class="big-light blue">
                <div class="big-dot light-blue"></div>
              </div>
            </div>
            <div class="small-lights-container">
              <div class="small-light red">
                <div class="dot light-red"></div>
              </div>
              <div class="small-light yellow">
                <div class="dot light-yellow"></div>
              </div>
              <div class="small-light green">
                <div class="dot light-green"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- Center Screen -->
        <div class="screen-container">
          <div class="screen">
            <div class="top-screen-lights">
              <div class="mini-light red"></div>
              <div class="mini-light red"></div>
            </div>
            <div id="main-screen">
              <img class="imagen-poke" :src="`http://play.pokemonshowdown.com/sprites/xyani/${pokemon.name}.gif`" :alt="pokemon.name">
            </div>
            <div class="bottom-screen-lights">
              <div class="small-light red">
                <div class="dot light-red"></div>
              </div>
              <div class="burger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- Bottom Buttons -->
        <div class="buttons-container">
          <div class="upper-buttons-container">
            <div class="big-button"></div>
            <div class="long-buttons-container">
              <div class="long-button red"></div>
              <div class="long-button light-blue"></div>
            </div>
          </div>
          <div class="nav-buttons-container">
            <div class="dots-container">
              <div>.</div>
              <div>.</div>
            </div>
            <div class="green-screen">
              <span id="name-screen">{{pokemon.name}}</span>
            </div>
            <div class="right-nav-container">
              <div class="nav-button">
                <div class="nav-center-circle"></div>
                <div class="nav-button-vertical"></div>
                <div class="nav-button-horizontal">
                  <div class="border-top"></div>
                  <div class="border-bottom"></div>
                </div>
              </div>
              <div class="bottom-right-nav-container">
                <div class="small-light red">
                  <div class="dot light-red"></div>
                </div>
                <div class="dots-container">
                  <div class="black-dot">.</div>
                  <div class="black-dot">.</div>
                  <div class="black-dot">.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Left panel -->

      <!-- Right-panel -->
      <div id="right-panel"  >
        <!-- Blank container -->
        <div class="empty-container" >
          <svg height="100%" width="100%">
            <polyline
              
              style="fill: #f2f2f2; stroke: none; stroke-width: 3;  "
              
            />
            <polyline
              points="0,40 138,40 158,75 250,75"
              style="fill: none; stroke: black; stroke-width: 3 "
            />
          </svg>
        </div>
        <!-- Top screen -->
        <div class="top-screen-container">
          <div id="about-screen" class="right-panel-screen" >
            Height: {{pokemon.height}}0cm Weight: {{pokemon.weight}}kg
          </div>
        </div>
        <!-- Blue Buttons -->
        <div class="square-buttons-container">
          <div class="blue-squares-container">
            <div class="blue-square"></div>
            <div class="blue-square"></div>
            <div class="blue-square"></div>
            <div class="blue-square"></div>
            <div class="blue-square"></div>
            <div class="blue-square"></div>
            <div class="blue-square"></div>
            <div class="blue-square"></div>
            <div class="blue-square"></div>
            <div class="blue-square"></div>
          </div>
        </div>
        <!-- Center Buttons -->
        <div class="center-buttons-container">
          <div class="center-left-container">
            <div class="small-reds-container">
              <div class="small-light red">
                <div class="dot light-red"></div>
              </div>
              <div class="small-light red">
                <div class="dot light-red"></div>
              </div>
            </div>
            <div class="white-squares-container">
              <div class="white-square"></div>
              <div class="white-square"></div>
            </div>
          </div>
          <div class="center-right-container">
            <div class="thin-buttons-container">
              <div class="thin-button"></div>
              <div class="thin-button"></div>
            </div>
            <div class="yellow-button yellow">
              <div class="big-dot light-yellow"></div>
            </div>
          </div>
        </div>
        <!-- Bottom screens -->
        <div class="bottom-screens-container">
          <div id="type-screen" class="right-panel-screen">{{pokemon.types[0].type.name}}</div>
          <div id="id-screen" class="right-panel-screen">Id: {{pokemon.id}}</div>
        </div>
      </div>
    </div>
    
    
    
   
    

  </div>
</template>

<script>
import Buscador from '../components/Buscador'
import axios from 'axios'
export default {
  data() {
    return {
      pokemon: '',
      llamadoExito: true,

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
        let data = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        console.log(data.data)
        this.pokemon = data.data
        
      } finally{
        console.log('finally')
        
      }
    }
  },
  computed: {
    exito() {
     
      console.log(this.llamadoExito)
       return (this.llamadoExito) ? 'tituloOk' : 'tituloNotOk'
    }
  },
  

}
</script>

<style scoped>
 #pokedex{
   margin-left: 30%;
 }

 .imagen-poke{
   object-fit: contain;
   width: 100%;
   height: 100%;
 }
 .tituloOk{
   margin-top: 2rem;
   font-family: 'Press Start 2P', cursive;
   margin-bottom: 1rem;
   color: #fff;
  text-shadow:
      0 0 7px rgba(255, 255, 255, 0.637),
      0 0 10px rgba(255, 255, 255, 0.459),
      0 0 21px rgba(255, 255, 255, 0.356),
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
 }
 .template{
   display: flex;
   flex-flow: column nowrap;
 }
</style>