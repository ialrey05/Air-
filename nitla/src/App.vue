<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
:root {
  --aqua: #2ad4c2;
  --morado: #a350d3;
  --verde: #2cdf7f;
  --rosa: #e41993;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inconsolata", Helvetica, Arial;
}

#app {
  background: #fafafa;
}
</style>
