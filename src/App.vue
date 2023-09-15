
<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/projects/';
import AppHeader from './components/AppHeader.vue';
import ProjectList from './components/projects/ProjectList.vue';
import AppAlert from './components/AppAlert.vue';
export default {
  components: { AppHeader, ProjectList, AppAlert },
  data: () => ({ projects: [], isLoading: false, isAlertOpen: false }),
  methods: {
    fetchProjects() {
      this.isLoading = true;
      this.isAlertOpen = false;
      axios.get(endpoint)
        .then(res => { this.projects = res.data })
        .catch(err => {
          console.log(err);
          this.isAlertOpen = true;
        })
        .then(() => this.isLoading = false);
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
    <AppAlert :isOpen="isAlertOpen" @close="isAlertOpen = false" />
    <AppLoader v-if="isLoading" />
    <ProjectList v-else :projects="projects" />

  </main>
</template>