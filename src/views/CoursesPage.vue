<template>
  <main-layout>
    <section class="section Courses">
      <h1>{{title}}</h1>

        <elements-list :coursesList="coursesList"  :class="title" mark="courses"/>
        <create-item @createElement="createElement" mark="courses"/>

    </section>
  </main-layout>
</template>
<script>
import MainLayout from "@/layouts/MainLayout";
import {coursesList} from "@/services/CoursesContent";
import ElementsList from "@/components/ElementsList";
import CreateItem from "@/components/CreateItem";

export default {
  name: "CoursesPage",
  components: {
    MainLayout,
    ElementsList,
    CreateItem
  }, 
  data() {
    return {
      title:'Courses',
      coursesList
    }
  },
  mounted() {
    if (localStorage.coursesList) {
      this.coursesList = JSON.parse(localStorage.coursesList);
    }
  },
  watch: {
    coursesList(newVal) {
      localStorage.coursesList = JSON.stringify(newVal);
    }
  },
  methods: {
    createElement(newItem) {
      this.coursesList.push(newItem);
    }
  }
};
</script>

<style lang="scss">
</style>
