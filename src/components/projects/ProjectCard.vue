<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean },
    computed: {
        projectDate() {
            const date = new Date(this.project.created_at);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            day = day < 10 ? '0' + day : day;
            month = month < 10 ? '0' + month : month;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            const projectDate = `${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`;

            return projectDate;
        },
        projectUpdate() {
            const date = new Date(this.project.updated_at);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            day = day < 10 ? '0' + day : day;
            month = month < 10 ? '0' + month : month;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            const projectUpdate = `${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`;

            return projectUpdate;
        },
        abstract() {
            const abstract = this.project.description.slice(0, 220);
            return abstract + '...';
        }
    }
};

</script>

<template>
    <div class="card mb-5">
        <div class="card-body">
            <h1 v-if="isDetail" class="card-title text-center">{{ project.title }}</h1>
            <h5 v-else class="card-title text-center">{{ project.title }}</h5>
            <div class="row align-items-center">
                <div class="col-3">
                    <img class="img-fluid my-4"
                        :src="project.cover ? project.cover : 'https://marcolanci.it/utils/placeholder.jpg'" alt="">
                </div>
                <div class="col-9">
                    <p class="card-text">{{ isDetail ? project.description : abstract }}</p>
                    <div v-if="isDetail">
                        <strong>Type: </strong>{{ project.type ? project.type.label : 'Undefined' }}<br>
                        <div v-if="project.technologies" class="my-3">
                            <strong>Technologies: </strong><span v-for="technology in project.technologies">{{
                                technology.label + ' / ' }}</span>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <button v-if="isDetail" class="btn btn-danger mt-2" @click="$router.back()">Back</button>
                    <RouterLink v-else :to="{ name: 'project-detail', params: { id: project.id } }" class="btn btn-warning">
                        More
                        details
                    </RouterLink>
                    <div class="small">
                        <div><strong>Created on: </strong>{{ projectDate }}</div>
                        <div v-if="isDetail"><strong>Updated on: </strong>{{ projectUpdate }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    border-radius: 10px;
}
</style>


