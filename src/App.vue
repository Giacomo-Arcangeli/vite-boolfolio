
<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/projects/';
import AppHeader from './components/AppHeader.vue';
import ProjectList from './components/projects/ProjectList.vue';
export default {
  components: { AppHeader, ProjectList },
  data: () => ({ projects: [] }),
  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => { this.projects = res.data })
    }
  },
  created() {
    this.fetchProjects();
  }
};
</script>


<template>
  <AppHeader />
  <main class="container my-3">
    <ProjectList :projects="projects" />

  </main>
</template>