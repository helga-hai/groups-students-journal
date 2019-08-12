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
import ElementsList from "@/components/ElementsList";
import CreateItem from "@/components/CreateItem";
import {coursesList} from "@/services/CoursesContent";

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
  methods: {
    createElement(newItem) {
      this.coursesList.push(newItem);
      let localkey = 'changecourses';
      localStorage[localkey] = JSON.stringify(this.coursesList);
    }
  }
};
</script>

<style lang="scss">
</style>
