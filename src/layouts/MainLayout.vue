<template>
  <main class="main">
    <logo-uniform/>
    <Nav/>
    <div class="content">
      <slot></slot>
    </div>
  </main>
</template>

<script>
import Nav from "@/components/common/Nav";
import LogoUniform from "@/components/common/LogoUniform";
export default {
  name: "MainLayout",
  components: {
    Nav,
    LogoUniform
  }
};
</script>

<style lang="scss">
.main {
  height: 100vh;
  background-color: $bg-main;
  background-image: url(../assets/images/main-bg.png);
  background-repeat: repeat-y;
  background-position: left 200px;
  background-size: 100% auto;
  min-height: 100vh;
  padding: 15px;
}
.content {
  flex-grow: 1;
  width: 100%;
}
</style>