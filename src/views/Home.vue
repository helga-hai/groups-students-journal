<template>
  <main-layout>
    <section class="section">
      <h2>Home</h2>
      <div class="center-blocks">
        <div><router-link to="/courses" active-class="router-link-active">Courses</router-link></div>
        <div><router-link to="/users" active-class="router-link-active">Users</router-link></div>
      </div>
    </section>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
export default {
  name: "Home",
  components: {
    MainLayout,
  }
}
</script>

<style lang="scss">
.center-blocks {
  display:block;
  margin:0 auto;
  width:80%;
  text-align:center;
  border: 2px solid #000000;
  div {
    display:inline-block;
    width:50%;
    min-width: 170px;
    a {
      font-size:26px;
      text-transform: uppercase;
      color:#000000;
      line-height:97px;

    }  
  }
}
</style>
