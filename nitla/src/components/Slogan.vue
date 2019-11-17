<template>
  <div class="slogan-container">
    <div class="slogan-content">
      <span>
        <span class="minus">-</span>
        Menos
        <span class="trafico">tráfico</span>
        , más
        <span class="vida">vida +</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slogan"
};
</script>

<style scoped>
.slogan-content {
  display: flex;
  font-size: 1em;
  text-align: center;
  justify-content: center;
  margin: 01em 0;
}

.slogan-content h2,
.slogan-content span {
  font-size: 1.2em;
}

/* Colores slogan */
.minus,
.trafico {
  color: var(--rosa);
}

.vida {
  color: var(--verde);
}
</style>
