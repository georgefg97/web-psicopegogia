<template>
  <div id="app">
    
    <Pantalla1Component/>
  </div>
</template>

<script>
// Importa el componente LoginComponent
//import LoginComponent from './components/LoginComponent'
import Pantalla1Component from './components/Pantalla1Component.vue'


export default {
  name: 'App',
  components: {
    // Registra el componente LoginComponent
    
    Pantalla1Component,
  }
}
</script>

<style>
/* Estilos globales de la aplicación */
</style>
