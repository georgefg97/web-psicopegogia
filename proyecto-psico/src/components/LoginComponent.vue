<template>
    <div class="background">
      <div class="container-lg">
        <div class="row vertical-offset-100">
          <div class="col-lg-6 col-lg-offset-3">
            <div class="card shadow-lg p-5">
              <!-- Logo -->
              <div class="text-center mb-4">
                <img src="@/assets/logo1.png" alt="Logo" style="max-width: 100px;">
              </div>
  
              <h2 class="text-center mb-4">BIENVENIDO</h2>
              <form accept-charset="UTF-8" role="form">
                <div class="form-group">
                  <input class="form-control form-control-lg" placeholder="E-mail" name="email" type="text">
                </div>
                <div class="form-group">
                  <input class="form-control form-control-lg" placeholder="Password" name="password" type="password">
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
              </form>
              <hr>
              <div class="text-center">
                <a href="#" class="underlineHover">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Componente Vue
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  .background {
    background-image: url('@/assets/fondo1.PNG');
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .card {
    background-color: #fff;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  </style>
  