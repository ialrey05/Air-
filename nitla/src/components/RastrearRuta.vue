<template>
  <div class="rastrear-component">
    <Navbar />
    <div class="animation">
      <img src="../img/Autobus.png" alt class="autobus morado" />
      <img src="../img/autobusaqua.png" alt class="autobus aqua" />
      <img src="../img/autobusverde.png" alt class="autobus verde" />
      <img src="../img/autobusrosa.png" alt class="autobus rosa" />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "RastrearRuta",
  components: {
    Navbar
  }
};
</script>

<style scoped>
.rastrear-component {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.animation {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.autobus {
  margin-bottom: 4em;
  width: 12em;
  margin-left: 30em;
  animation-name: movimiento;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.autobusverde {
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

@keyframes movimiento {
  0% {
  }
  100% {
    transform: translateX(-40em);
  }
}
</style>