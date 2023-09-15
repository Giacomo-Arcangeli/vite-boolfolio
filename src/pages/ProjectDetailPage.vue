<script>
const apiBaseUri = 'http://127.0.0.1:8000/api/projects/';
import axios from 'axios';
import ProjectCard from '../components/projects/ProjectCard.vue';
export default {
    name: 'ProjectDetailPage',
    data: () => ({
        project: null,
        isLoading: false
    }),
    components: { ProjectCard },
    methods: {
        getProject() {
            this.isLoading = true;
            const endpoint = apiBaseUri + this.$route.params.id;
            axios.get(endpoint)
                .then(res => { this.project = res.data; })
                .catch(err => { this.$router.push({ name: 'not-found' }) })
                .then(() => { this.isLoading = false; });
        }
    },
    created() {
        this.getProject();
    },
};
</script>

<template>
    <AppLoader v-if="isLoading && !project" />
    <div class="m-5">
        <ProjectCard v-if="!isLoading && project" :project="project" :isDetail="true" />
    </div>
</template>

<style scoped></style>