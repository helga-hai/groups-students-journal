<template>
  <div id="app">
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}
</style>
