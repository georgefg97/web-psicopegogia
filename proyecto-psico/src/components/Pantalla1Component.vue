<template>
  <div id="app">
    <!-- Fondo de pantalla -->
    <div class="background">
      <!-- Navbar con opciones -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <!-- Logo de la empresa -->
          <a class="navbar-brand" href="#">
            <img src="@/assets/logo1.png" class="logo">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Quiénes somos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Inscripciones</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Contenedor para la imagen -->
      <div class="container-fluid d-flex justify-content-center align-items-center h-100">
        <div class="row">
          <div class="col">
            <img src="@/assets/ima1.jpg" class="img-fluid">
          </div>
        </div>
      </div>

      <!-- Contenido de la aplicación -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.background {
  background-image: url('@/assets/fondo2.PNG');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.logo {
  width: 40px;
  height: auto;
}

.img-fluid {
  width: auto;
  height: 100%;
}
</style>
