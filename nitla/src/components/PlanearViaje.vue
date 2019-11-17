<template>
  <div class="planear-component">
    <Navbar />
    <div class="respeto">
      <h2>Recuerda respetar los señalamientos</h2>
    </div>
    <div class="estabilidad">
      <h3>Velocidad óptima</h3>
    </div>
    <div class="velocimetro">
      <div class="vel"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
const $ = require("jquery");
window.$ = $;

export default {
  name: "PlanearViaje",
  components: { Navbar },
  methods: {}
};
</script>

<style scoped>
.planear-component {
  overflow: hidden;
  height: 100vh;
}

.velocimetro {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}

.estabilidad {
  display: fixed;
  position: absolute;
  border-bottom: 4px solid #222222;
  align-self: flex-start;
  z-index: 250;
  width: 60vw;
  margin-top: 8em;
}
.estabilidad h3 {
  width: 100vw;
  margin-left: 0.2em;
}

.vel {
  background: linear-gradient(to bottom, var(--aqua) 0%, var(--morado) 100%);
  width: 40%;
  height: 28em;
  animation-name: velocidad;
  animation-duration: 2s;
  animation-delay: 0.1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

h2 {
  width: 100%;
  position: fixed;
  align-self: center;
  text-align: center;
  margin-top: 0.5em;
}
@keyframes velocidad {
  0% {
  }
  100% {
    transform: scaleY(1.1);
  }
}
</style>
