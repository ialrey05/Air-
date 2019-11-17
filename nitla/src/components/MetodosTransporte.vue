<template>
  <div class="metodos-container">
    <div class="metodos">
      <!-- Metro -->
      <div class="display-img metro-main">
        <h3 class="frase">Utiliza los servicios de tu ciudad</h3>
      </div>
      <div class="display-img metro-sec">
        <h3 class="frase"></h3>
      </div>
      <!-- Bicicleta -->
      <div class="display-img bici-main">
        <h3 class="frase">Recuerda que puedes transportarte y ejercitarte a la vez</h3>
      </div>
      <div class="display-img bici-sec">
        <h3 class="frase"></h3>
      </div>
      <!-- Camión -->
      <div class="display-img camion-main">
        <h3 class="frase">El transporte público es tu amigo</h3>
      </div>

      <div class="display-img camion-sec">
        <h3 class="frase"></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetodosTransporte"
};
</script>

<style scoped>
/* Metodos */

.metodos-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}

.metodos {
  padding: 0 1.9em;
  width: 100%;
  display: grid;
  grid-template-columns: 0.25fr 0.5fr 0.25fr;
  grid-row-gap: 0.5em;
  grid-column-gap: 0.5em;
}

.metodos h3 {
  font-size: 1em;
  height: 15em;
}

.display-img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.frase {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: #f3f3f3;
  text-align: center;
  height: 100%;
  width: 100%;
  margin: 0;
  justify-content: center;
}

.metro-main {
  grid-column-start: 1;
  grid-column-end: 3;
  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9U0b9vY3khjF0aHKf_BqZu49tFu8iHxD-PAhwEpXURgDbDYmt);
  border: 2px solid var(--green);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.metro-sec {
  grid-column-start: 3;
  grid-column-end: 4;
  border: 2px solid var(--morado);
  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRD_7f41ppT-8NGgBi9zuXTEMvKl3LWPZ1k8ERLtEtdGjOq_dgv);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -3em;
}

.bici-main {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMhadKHbcgHZdB244ClTDrw_FyUhT69dVHZVbrES_cEEexddFt);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid var(--verde);
}

.bici-sec {
  max-width: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF-P03w_C4Z3fKN9gbd99KMQLkqkpWlX4U4HNBvFEGHLTcp09k);
  background-size: cover;
  background-position: center;
  border: 2px solid var(--morado);
  background-repeat: no-repeat;
}

.camion-main {
  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeFVtoxR9d9FbeqcHSQWo3QVYeIvG_xYdO7M04ewnCBz5q7AVU);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  grid-column-start: 1;
  border: 2px solid var(--green);
  grid-column-end: 3;
}

.camion-sec {
  grid-column-start: 3;
  grid-column-end: 4;
  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCSKHznRfIYvJJYVdug0Ktu_kl2u3xAEQ0-xle78FFR9_bBmDi);
  background-size: cover;
  background-position: center;
  border: 2px solid var(--morado);
  background-repeat: no-repeat;
}
</style>
