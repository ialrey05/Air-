<template>
  <div class>
    <div class="nav-bar">
      <div class="page-name">NITLA</div>
      <div class="ham-icon">
        <button v-on:click="mostrarNav" class="ham-icon">
          <i class="ham-bars fas fa-bars"></i>
        </button>
      </div>
      <div class="color-bar"></div>
    </div>
    <div class="menu">
      <ul>
        <router-link to="/">Inicio</router-link>
        <router-link to="/planearviaje">Planear Viaje</router-link>
        <router-link to="/rastrearruta">Rastrear Ruta</router-link>
        <router-link to="/co2">Medidor de CO2</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
const $ = require("jquery");
window.$ = $;

export default {
  name: "navbar",
  methods: {
    mostrarNav: function() {
      $(".menu").slideToggle();
    }
  }
};
</script>

<style scoped>
.menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid rgba(139, 139, 139, 0.4);
  display: none;
}

.menu a {
  display: block;
  border-bottom: 2px solid #f5f5f5;
  padding: 0.3em 0;
  padding-left: 2em;
  color: #222222;
  text-decoration: none;
  transition: color 0.2s;
}

.menu a:hover {
  color: var(--morado);
}

.menu ul {
  margin: 0;
}

.nav-bar {
  width: 100vw;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  height: 4em;
  overflow: hidden;
  padding-top: 0.2em;
  background: #ffffff;
}

.page-name {
  font-size: 2em;
  overflow: hidden;
  display: flex;
  max-height: 100%;
  align-items: center;
  margin-left: 1em;
  background-color: #ffffff;
}

.ham-icon {
  display: flex;
  font-size: 1.3em;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1em;
  border: none;
  background: none;
  background: #ffffff;
}

.ham-times {
  position: absolute;
  text-align: center;
}

.color-bar {
  background: linear-gradient(to right, var(--aqua) 0%, var(--morado) 100%);
  grid-column-start: 1;
  grid-column-end: 3;
  height: 0.2em;
  align-self: flex-end;
}
</style>
