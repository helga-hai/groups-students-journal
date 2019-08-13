<template>
  <main-layout>
    <section class="section Users">
      <h1>{{title}}</h1>

        <elements-list :usersList="usersList" :class="title" mark="users"/>
        <create-item @createElement="createElement" mark="users"/>

    </section>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import {usersList} from "@/services/UsersContent";
import ElementsList from "@/components/ElementsList";
import CreateItem from "@/components/CreateItem";

export default {
  name: "UsersPage",
  components: {
    MainLayout,
    ElementsList,
    CreateItem
  },
  data() {
    return {
      title:'Users',
      usersList
    }
  },
  mounted() {
    if (localStorage.usersList) {
      this.usersList = JSON.parse(localStorage.usersList);
    }
  },
  watch: {
    usersList(newVal) {
      localStorage.usersList = JSON.stringify(newVal);
    }
  },
  methods: {
    createElement(newVal) {
      this.usersList.push(newVal);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
