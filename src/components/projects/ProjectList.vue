<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectList',
    components: { ProjectCard },
    props: { projects: Array },
};

</script>

<template>
    <h1 class="text-center my-5">Projects</h1>
    <div class="row gy-3" v-if="projects.length">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
    <h3 v-else class="text-center">There are no projects</h3>
</template>