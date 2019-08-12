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
  data(){
    return {
      title:'Users',
      usersList
    }
  },
  methods: {
    createElement(newItem) {
      this.usersList.push(newItem);
      let localkey = 'changeusers';
      localStorage[localkey] = JSON.stringify(this.usersList);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
