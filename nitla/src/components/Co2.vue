<template>
  <div class="co2-component">
    <Navbar />
    <div class="co2">
      <div class="caja">
        <h2>100%</h2>
      </div>
      <div class="anuncio">
        <h1>Porcentaje de CO2 restante</h1>
      </div>
      <div class="fecha">
        <h3>Renovación hasta:</h3>
        <h3>30/12/2019</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "Co2",
  components: {
    Navbar
  }
};
</script>

<style scoped>
.co2 {
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.caja {
  width: 70%;
  height: 40%;
  background: linear-gradient(to right, var(--aqua) 0%, var(--morado) 100%);
  margin-top: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #222222;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
}

.anuncio {
  width: 80%;
  margin-top: 2em;
  text-align: center;
  border-bottom: 3px solid var(--morado);
}

.fecha {
  margin-top: 1em;
}

.fecha h3 {
  text-align: center;
}
</style>