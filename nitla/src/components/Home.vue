<template>
  <div class="home-component">
    <!-- Barra de navegación -->
    <Navbar />
    <!-- Hamburger Menu -->

    <!-- Slogan -->
    <Slogan />
    <!-- Banner -->
    <div class="banner-container">
      <img class="banner" src="../img/Banner.png" alt />
    </div>
    <!-- Recordatorio -->
    <div class="recordar-container">
      <div class="recordar">
        <h2>Recuerda activar tu GPS!</h2>
      </div>
    </div>
    <!-- Sección métodos de transporte -->
    <MetodosTransporte />
    <!-- Footer -->
    <div class="footer">
      <a href>
        <i class="fab fa-facebook-square"></i>
      </a>
      <a href>
        <i class="fab fa-instagram"></i>
      </a>
      <a href>
        <i class="fab fa-twitter-square"></i>
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Slogan from "../components/Slogan";
import MetodosTransporte from "../components/MetodosTransporte";

export default {
  name: "Home",
  components: {
    Navbar,
    Slogan,
    MetodosTransporte
  }
};
</script>

<style scoped>
/* Banner */
.banner-container {
  width: 100vw;
}

.banner {
  width: 100vw;
}
/* Recordatorio de gps */
.recordar-container {
  width: 100vw;
  margin: 1em 0;
  display: flex;
  justify-content: center;
}

.recordar {
  width: 80%;
  border-radius: 1em;
  border: 1px solid var(--morado);
  text-align: center;
  color: #406f93;
}

.recordar h2 {
  font-size: 1em;
  margin: 0.5em 0;
}

/* Footer */

.footer {
  background: linear-gradient(to right, var(--aqua) 0%, var(--morado) 100%);
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer i {
  margin: 0 1em;
  color: #f3f3f3;
}
</style>
